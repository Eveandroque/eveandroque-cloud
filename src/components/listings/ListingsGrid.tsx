import React, {useState} from 'react';
import type {Property} from './types';

// ─── Skeleton Card ─────────────────────────────────────────────────────────────

export const SkeletonCard = () => (
    <div className="skeleton-card">
        <div className="skeleton-image"/>
        <div className="skeleton-body">
            <div className="skeleton-line short"/>
            <div className="skeleton-line medium"/>
            <div className="skeleton-meta">
                <div className="skeleton-line small"/>
                <div className="skeleton-line small"/>
                <div className="skeleton-line small"/>
            </div>
        </div>
    </div>
);

// ─── Property Card ─────────────────────────────────────────────────────────────

interface PropertyCardProps {
    property: Property;
    index: number;
}

export function PropertyCard({property, index}: PropertyCardProps) {
    const [imgLoaded, setImgLoaded] = useState(false);

    return (
        <a
            href={`/listings/${property.slug}`}
            className="property-card"
            style={{animationDelay: `${index * 50}ms`}}
            data-astro-prefetch="viewport"
        >
            <div className="property-card__image-wrapper">
                {!imgLoaded && <div className="property-card__image-placeholder"/>}
                <img
                    src={property.thumbnail}
                    alt={property.name}
                    className="property-card__image"
                    style={{opacity: imgLoaded ? 1 : 0}}
                    onLoad={() => setImgLoaded(true)}
                    loading="lazy"
                />
            </div>

            <div className="property-card__body">
                <div className="property-card__location">
                    <PinIcon/>
                    <span>{property.city}</span>
                </div>

                <h3 className="property-card__name">{property.name}</h3>

                <div className="property-card__meta">
                    <div className="property-card__meta-item">
                        <BathIcon/>
                        <span>{property.bathrooms} Bath</span>
                    </div>
                    <div className="property-card__meta-item">
                        <BedIcon/>
                        <span>{property.bedrooms} Beds</span>
                    </div>
                    <div className="property-card__meta-item">
                        <GuestIcon/>
                        <span>{property.maxGuests} guests</span>
                    </div>
                </div>
            </div>
        </a>
    );
}

// ─── Listings Grid ─────────────────────────────────────────────────────────────

interface ListingsGridProps {
    listings: Property[],
    isLoading: boolean,
    isFetching: boolean,
    isError: boolean,
    total: number,
    page: number,
    onPageChange: (page: number) => void,
    pageSize?: any,
    hasMore?: boolean
}

export function ListingsGrid({
                                 listings,
                                 isLoading,
                                 isFetching,
                                 isError,
                                 total,
                                 page,
                                 onPageChange,
                                 pageSize,
                                 hasMore
                             }: ListingsGridProps) {
    const totalPages = Math.ceil(total / pageSize);

    if (isError) {
        return (
            <div className="listings-error">
                <p>Unable to load properties. Please try again.</p>
            </div>
        );
    }

    return (
        <div className="listings-section">
            {/* Refetch bar */}
            {isFetching && !isLoading && <div className="listings-refetch-bar"/>}

            {/* Grid */}
            <div className={`listings-grid${isFetching && !isLoading ? ' is-fetching' : ''}`}>
                {isLoading
                    ? Array.from({length: 12}).map((_, i) => <SkeletonCard key={i}/>)
                    : listings.length === 0
                        ? (
                            <div className="listings-empty">
                                <p>No properties match your filters.</p>
                                <p>Try adjusting or clearing some filters.</p>
                            </div>
                        )
                        : listings.map((property, i) => (
                            <PropertyCard key={property.id} property={property} index={i}/>
                        ))
                }
            </div>

            {/* Pagination */}
            {!isLoading && totalPages > 1 && (
                <div className="listings-pagination">
                    <button
                        className="pagination-btn"
                        disabled={page <= 1}
                        onClick={() => onPageChange(page - 1)}
                    >
                        ← Prev
                    </button>

                    <div className="pagination-pages">
                        {Array.from({length: totalPages}, (_, i) => i + 1)
                            .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                            .reduce<(number | '...')[]>((acc, p, i, arr) => {
                                if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push('...');
                                acc.push(p);
                                return acc;
                            }, [])
                            .map((p, i) =>
                                p === '...'
                                    ? <span key={`ellipsis-${i}`} className="pagination-ellipsis">…</span>
                                    : (
                                        <button
                                            key={p}
                                            className={`pagination-page${p === page ? ' is-active' : ''}`}
                                            onClick={() => onPageChange(p as number)}
                                        >
                                            {p}
                                        </button>
                                    )
                            )
                        }
                    </div>

                    <button
                        className="pagination-btn"
                        disabled={page >= totalPages}
                        onClick={() => onPageChange(page + 1)}
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const PinIcon = () => (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
        <path
            d="M7 1C4.79 1 3 2.79 3 5c0 2.97 4 8 4 8s4-5.03 4-8c0-2.21-1.79-4-4-4zm0 5.5A1.5 1.5 0 1 1 7 3.5a1.5 1.5 0 0 1 0 3z"
            fill="currentColor"/>
    </svg>
);

const BedIcon = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path
            d="M1 10V6.5C1 5.4 1.9 4.5 3 4.5H13C14.1 4.5 15 5.4 15 6.5V10M1 10H15M1 10V13M15 10V13M3 4.5V3C3 2.45 3.45 2 4 2H12C12.55 2 13 2.45 13 3V4.5M5 7.5H11"
            stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const BathIcon = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <path
            d="M2 8H14V11C14 12.1 13.1 13 12 13H4C2.9 13 2 12.1 2 11V8ZM2 8V4C2 3.45 2.45 3 3 3V3C3.55 3 4 3.45 4 4V5.5"
            stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const GuestIcon = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
);