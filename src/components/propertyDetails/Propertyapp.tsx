// src/components/property/PropertyApp.tsx
// Root React island for the property detail page.
// Manages shared state: selectedServices (flows from AdditionalServices → InquiryForm)

import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PropertyGallery} from './Propertygallery';
import {PropertyInquiryForm} from './PropertyinquiryForm';
import {AdditionalServices} from './AdditionalServices';
import {PropertyMap} from './Propertymap';
import {RelatedProperties} from './Relatedproperties';
import type {PropertyDetail} from './types';
import './property.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            retry: 2,
            refetchOnWindowFocus: false,
        },
    },
});

interface PropertyAppProps {
    property: PropertyDetail;
    filloutUrl: string;
    workerUrl: string;
    mapboxToken: string;
}

// ─── Exported component — wraps island in QueryClientProvider ─────────────────

export function PropertyApp(props: PropertyAppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <PropertyAppInner {...props} />
        </QueryClientProvider>
    );
}

function PropertyAppInner({
                              property,
                              filloutUrl,
                              workerUrl,
                              mapboxToken,
                          }: PropertyAppProps) {
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState<'overview' | 'amenities'>('overview');

    const toggleService = (id: string) => {
        setSelectedServices(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    // ── Amenities grouped for display ──────────────────────────────────────────
    const amenityGroups = [
        {label: 'Featured', items: property.featuredAmenities},
        {label: 'Outdoor', items: property.outdoorFeatures},
        {label: 'Indoor', items: property.indoorFeatures},
        {label: 'Pool & Spa', items: property.poolSpa},
        {label: 'Parking', items: property.parkingTypes},
    ].filter(g => g.items.length > 0);

    const formatCurrency = (n: number) =>
        `$${n.toLocaleString()}`;

    return (
        <div className="property-app">

            {/* ── Gallery ── */}
            <PropertyGallery
                thumbnail={property.thumbnail}
                imageUrls={property.images}
                name={property.name}
            />

            {/* ── Header ── */}
            <div className="property-header">
                <div className="property-header__col1">
                    <div className="property-header__main">
                        <div className="property-header__location">
                            <PinIcon/>
                            {property.city}
                            {/*{property.address &&*/}
                            {/*    <span className="property-header__address">&nbsp;· {property.address}</span>}*/}
                        </div>
                        <h1 className="property-header__name">{property.name}</h1>
                        <div className="property-header__stats">
                            <div className="property-stat">
                                <BedIcon/>
                                <span>{property.bedrooms} Beds</span>
                            </div>
                            <div className="property-stat">
                                <BathIcon/>
                                <span>{property.bathrooms} Baths</span>
                            </div>
                            {property.maxGuests && (
                                <div className="property-stat">
                                    <GuestIcon/>
                                    <span>Up to {property.maxGuests} guests</span>
                                </div>
                            )}
                            {property.eventMaxCap && (
                                <div className="property-stat">
                                    <EventIcon/>
                                    <span>Up to {property.eventMaxCap} for events</span>
                                </div>
                            )}
                            {property.sqft && (
                                <div className="property-stat">
                                    <SqftIcon/>
                                    <span>{property.sqft.toLocaleString()} sqft</span>
                                </div>
                            )}
                        </div>

                        {/* Rental type badges */}
                        {property.rentalTypes.length > 0 && (
                            <div className="property-header__types">
                                {property.rentalTypes.map(type => (
                                    <span key={type} className="property-type-badge">{type}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* ── Tab Nav ── */}
                    <div className="property-tabs">
                        <button
                            className={`property-tab${activeTab === 'overview' ? ' is-active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`property-tab${activeTab === 'amenities' ? ' is-active' : ''}`}
                            onClick={() => setActiveTab('amenities')}
                        >
                            Amenities
                        </button>
                    </div>

                    {/* ── Overview Tab ── */}
                    {activeTab === 'overview' && (
                        <div className="property-content">

                            {/* Description */}
                            <section className="property-description">
                                <p>{property.description}</p>
                            </section>

                            {/* Rules */}
                            {property.rules.length > 0 && (
                                <section className="property-rules">
                                    <h2>Property Rules</h2>
                                    <div className="property-rules__grid">
                                        {property.rules.map(rule => (
                                            <div key={rule} className="property-rule">
                                                <CheckIcon/>
                                                <span>{rule}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* Booking details */}
                            <section className="property-booking-details">
                                <h2>Booking Details</h2>
                                <div className="property-booking-details__grid">
                                    {property.booksFarOut &&
                                        <Detail label="Books Far Out" value={property.booksFarOut}/>}
                                    {property.noticeNeeded &&
                                        <Detail label="Notice Needed" value={property.noticeNeeded}/>}
                                    {property.overnight && <Detail label="Overnight" value={property.overnight}/>}
                                    {property.lateNight && <Detail label="Late Night" value={property.lateNight}/>}
                                    {property.cleaningFee &&
                                        <Detail label="Cleaning Fee" value={formatCurrency(property.cleaningFee)}/>}
                                    {property.petFee &&
                                        <Detail label="Pet Fee" value={formatCurrency(property.petFee)}/>}
                                    {property.maxPets && <Detail label="Max Pets" value={String(property.maxPets)}/>}
                                    {property.handicapAccessible &&
                                        <Detail label="Handicap" value={property.handicapAccessible}/>}
                                </div>
                            </section>
                        </div>
                    )}

                    {/* ── Amenities Tab ── */}
                    {activeTab === 'amenities' && (
                        <div className="property-content">
                            <section className="property-amenities">
                                <h2 className="property-amenities__title">
                                    Hotel-grade amenities, <em>but just for you</em>
                                </h2>
                                {amenityGroups.map(group => (
                                    <div key={group.label} className="amenity-group">
                                        <h3 className="amenity-group__label">{group.label}</h3>
                                        <div className="amenity-group__grid">
                                            {group.items.map(item => (
                                                <div key={item} className="amenity-item">
                                                    <CheckIcon/>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </section>
                        </div>
                    )}

                    {/* Map */}
                    {property.address && (
                        <section className="property-map-section">
                            <h2>Explore this location</h2>
                            <PropertyMap
                                address={property.address}
                                mapboxToken={mapboxToken}
                            />
                        </section>
                    )}

                    {/* ── Additional Services ── */}
                    <AdditionalServices
                        selected={selectedServices}
                        onToggle={toggleService}
                    />
                </div>
                {/* ── Sticky Sidebar Inquiry Form ── */}
                <aside className="property-header__sidebar">
                    <PropertyInquiryForm
                        propertyName={property.name}
                        propertySlug={property.slug}
                        selectedServices={selectedServices}
                        rentalTypes={property.rentalTypes}
                        startingEventRate={property.startingEventRate}
                    />
                </aside>
            </div>

            {/* ── Fillout Embed Form ── */}
            <section className="property-fillout">
                <div className="property-fillout__header">
                    <h2>
                        If you have any query just let us know,{' '}
                        <em>we will get back to you.</em>
                    </h2>
                    <p>We'll usually reply to your query in minutes.</p>
                </div>
                <iframe
                    src={filloutUrl}
                    className="property-fillout__iframe"
                    frameBorder="0"
                    allowFullScreen
                    title="Contact form"
                />
            </section>

            {/* ── Related Properties ── */}
            <RelatedProperties
                currentSlug={property.slug}
                city={property.city}
                workerUrl={workerUrl}
            />

        </div>
    );
}

// ─── Detail row ───────────────────────────────────────────────────────────────

function Detail({label, value}: { label: string; value: string }) {
    return (
        <div className="booking-detail">
            <span className="booking-detail__label">{label}</span>
            <span className="booking-detail__value">{value}</span>
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M1 10V6.5C1 5.4 1.9 4.5 3 4.5H13C14.1 4.5 15 5.4 15 6.5V10M1 10H15M1 10V13M15 10V13M3 4.5V3C3 2.45 3.45 2 4 2H12C12.55 2 13 2.45 13 3V4.5"
            stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
);
const BathIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
            d="M2 8H14V11C14 12.1 13.1 13 12 13H4C2.9 13 2 12.1 2 11V8ZM2 8V4C2 3.45 2.45 3 3 3V3C3.55 3 4 3.45 4 4V5.5"
            stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
);
const GuestIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M3 14c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
);
const EventIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
);
const SqftIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 8h6M8 5v6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
);
const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M4.5 7l2 2 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);