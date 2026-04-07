// src/components/property/PropertyGallery.tsx
// React island (client:load) — handles modal state

import React, {useState, useEffect, useCallback} from 'react';
import type {PropertyImage} from './types';

interface PropertyGalleryProps {
    thumbnail: string;
    imageUrls: PropertyImage[];
    name: string;
}

export function PropertyGallery({thumbnail, imageUrls, name}: PropertyGalleryProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeTag, setActiveTag] = useState<string>('All');

    // Use thumbnail as hero fallback until imageUrls is populated
    const hasGallery = imageUrls.length > 0;
    const hero = hasGallery ? thumbnail : imageUrls[0].url;
    const second = hasGallery ? imageUrls[0]?.url : null;
    const third = hasGallery ? imageUrls[1]?.url : null;

    // Group images by tag for modal
    const tags = ['All', ...Array.from(new Set(imageUrls.map(img => img.tag ?? 'Other').filter(Boolean)))];

    const filtered = activeTag === 'All'
        ? imageUrls
        : imageUrls.filter(img => img.tag === activeTag);

    // Close modal on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setModalOpen(false);
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    // Lock body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalOpen]);

    return (
        <>
            {/* ── Hero Grid ── */}
            <div className="pg-hero">
                <div className="pg-hero__main">
                    <img src={hero} alt={name} className="pg-hero__img"/>
                </div>

                {(second || third) && (
                    <div className="pg-hero__side">
                        {second && (
                            <div className="pg-hero__side-item">
                                <img src={second} alt={`${name} 2`} className="pg-hero__img"/>
                            </div>
                        )}
                        {third && (
                            <div className="pg-hero__side-item">
                                <img src={third} alt={`${name} 3`} className="pg-hero__img"/>
                            </div>
                        )}
                    </div>
                )}

                {/* Show all photos button */}
                {hasGallery && (
                    <button className="pg-hero__show-all" onClick={() => setModalOpen(true)}>
                        <GridIcon/>
                        Show all photos
                    </button>
                )}
            </div>

            {/* ── Photo Modal ── */}
            {modalOpen && (
                <>
                    <div className="pg-modal-backdrop" onClick={() => setModalOpen(false)}/>
                    <div className="pg-modal" role="dialog" aria-label="All photos">

                        <div className="pg-modal__header">
                            <h2 className="pg-modal__title">{name} — Photos</h2>
                            <button className="pg-modal__close" onClick={() => setModalOpen(false)}>
                                <CloseIcon/>
                            </button>
                        </div>

                        {/* Tag filter tabs */}
                        {tags.length > 1 && (
                            <div className="pg-modal__tabs">
                                {tags.map(tag => (
                                    <button
                                        key={tag}
                                        className={`pg-modal__tab${activeTag === tag ? ' is-active' : ''}`}
                                        onClick={() => setActiveTag(tag)}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Image grid */}
                        <div className="pg-modal__grid">
                            {filtered.map((img, i) => (
                                <div key={i} className="pg-modal__item">
                                    <img src={img.url} alt={img.tag ?? name} loading="lazy"/>
                                    {img.tag && <span className="pg-modal__tag">{img.tag}</span>}
                                </div>
                            ))}
                        </div>

                    </div>
                </>
            )}
        </>
    );
}

const GridIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
);

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);