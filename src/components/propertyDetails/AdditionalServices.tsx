// src/components/property/AdditionalServices.tsx
// Selectable service cards — selected services are passed up to PropertyApp,
// which shares them with PropertyInquiryForm

import React from 'react';
import {ADDITIONAL_SERVICES} from './types';

interface AdditionalServicesProps {
    selected: string[];
    onToggle: (id: string) => void;
}

export function AdditionalServices({selected, onToggle}: AdditionalServicesProps) {
    return (
        <section className="additional-services">
            <div className="additional-services__header">
                <h2 className="additional-services__title">
                    Additional Services,{' '}
                    <em>for your comfort</em>
                </h2>
                <p className="additional-services__sub">
                    Select the additional services you'd like — they'll be added to your inquiry.
                </p>
            </div>

            <div className="additional-services__grid">
                {ADDITIONAL_SERVICES.map(service => {
                    const isSelected = selected.includes(service.id);
                    return (
                        <button
                            key={service.id}
                            className={`service-card${isSelected ? ' is-selected' : ''}`}
                            onClick={() => onToggle(service.id)}
                            type="button"
                        >
                            <div className="service-card__icon">
                                <ServiceIcon name={service.icon}/>
                            </div>
                            <div className="service-card__body">
                                <h4 className="service-card__name">{service.name}</h4>
                                <p className="service-card__desc">{service.description}</p>
                            </div>
                            {isSelected && (
                                <span className="service-card__check">✓</span>
                            )}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}

// ─── Service Icons ─────────────────────────────────────────────────────────────

function ServiceIcon({name}: { name: string }) {
    switch (name) {
        case 'team':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 21c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round"/>
                    <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M21 21c0-2.76-1.79-5.1-4.27-5.76" stroke="currentColor" strokeWidth="1.5"
                          strokeLinecap="round"/>
                </svg>
            );
        case 'staging':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="14" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 14v-2a2 2 0 012-2h10a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M7 18v2M17 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            );
        case 'photography':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 7l2-3h4l2 3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
            );
        case 'wellness':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C12 21 4 15 4 9a8 8 0 0116 0c0 6-8 12-8 12z" stroke="currentColor"
                          strokeWidth="1.5"/>
                    <path d="M12 9v4M10 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            );
        case 'layout':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
            );
        case 'permits':
            return (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor"
                          strokeWidth="1.5"/>
                    <path d="M14 3v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
            );
        default:
            return null;
    }
}