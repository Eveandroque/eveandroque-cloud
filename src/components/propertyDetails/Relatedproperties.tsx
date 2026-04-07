// src/components/property/RelatedProperties.tsx
// Fetches listings from the same city, excludes current property

import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";

interface Property {
    id: string;
    slug: string;
    name: string;
    city: string;
    thumbnail: string;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number | null;
}

interface RelatedPropertiesProps {
    currentSlug: string;
    city: string;
    workerUrl: string;
}

async function fetchRelated(workerUrl: string, city: string, currentSlug: string): Promise<Property[]> {
    const res = await fetch(
        `${workerUrl}/api/listings/cards?searchAreas=${encodeURIComponent(city)}&pageSize=5`
    );
    if (!res.ok) throw new Error('Failed to fetch related properties');
    const data = await res.json();
    // @ts-ignore
    return (data.listings ?? [])
        .filter((p: Property) => p.slug !== currentSlug)
        .slice(0, 4);
}

export function RelatedProperties({currentSlug, city, workerUrl}: RelatedPropertiesProps) {
    const {data: listings = [], isLoading, isError} = useQuery<Property[]>({
        queryKey: ['related', city, currentSlug],
        queryFn: () => fetchRelated(workerUrl, city, currentSlug),
        staleTime: 1000 * 60 * 5,
    });

    if (isError || (!isLoading && listings.length === 0)) return null;

    return (
        <section className="related-properties">
            <div className="related-properties__header">
                <h2 className="related-properties__title">
                    Guests who liked{' '}
                    <em>{currentSlug.replace(/-/g, ' ')}</em>{' '}
                    also liked:
                </h2>
                <a href="/listings" className="related-properties__cta">
                    Search & Calendar →
                </a>
            </div>

            <div className="related-properties__grid">
                {isLoading
                    ? Array.from({length: 4}).map((_, i) => (
                        <div key={i} className="related-card related-card--skeleton">
                            <div className="related-card__img-skeleton"/>
                            <div className="related-card__body">
                                <div className="skeleton-line short"/>
                                <div className="skeleton-line medium"/>
                            </div>
                        </div>
                    ))
                    : listings.map(property => (
                        <a
                            key={property.id}
                            href={`/listings/${property.slug}`}
                            className="related-card"
                            data-astro-prefetch="viewport"
                        >
                            <div className="related-card__img-wrapper">
                                <img
                                    src={property.thumbnail}
                                    alt={property.name}
                                    loading="lazy"
                                />
                            </div>
                            <div className="related-card__body">
                                <div className="related-card__location">
                                    <PinIcon/>
                                    {property.city}
                                </div>
                                <h3 className="related-card__name">{property.name}</h3>
                                <div className="related-card__meta">
                                    <span>{property.bedrooms} Beds</span>
                                    <span>·</span>
                                    <span>{property.bathrooms} Baths</span>
                                    {property.maxGuests && (
                                        <>
                                            <span>·</span>
                                            <span>{property.maxGuests} guests</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        </section>
    );
}

const PinIcon = () => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
        <path
            d="M7 1C4.79 1 3 2.79 3 5c0 2.97 4 8 4 8s4-5.03 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3.5a1.5 1.5 0 0 1 0 3z"
            fill="currentColor"/>
    </svg>
);