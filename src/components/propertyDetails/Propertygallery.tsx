// src/components/property/PropertyGallery.tsx
// React island (client:load) — handles modal + swiper lightbox state

import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Keyboard, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type {PropertyImage} from './types';
import ImageSwiper from './ImageSwiper';

interface PropertyGalleryProps {
    thumbnail: string;
    imageUrls: PropertyImage[];
    name: string;
}

export function PropertyGallery({thumbnail, imageUrls, name}: PropertyGalleryProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [swiperIndex, setSwiperIndex] = useState<number | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const hasGallery = imageUrls.length > 0;
    const hero = hasGallery ? thumbnail : imageUrls[0]?.url;
    const second = hasGallery ? imageUrls[0]?.url : null;
    const third = hasGallery ? imageUrls[1]?.url : null;

    const tags = Array.from(new Set(imageUrls.map(img => img.tag ?? 'Other').filter(Boolean)));

    const groupedImages: Record<string, typeof imageUrls> = {};
    for (const img of imageUrls) {
        const key = img.tag ?? 'Other';
        if (!groupedImages[key]) groupedImages[key] = [];
        groupedImages[key].push(img);
    }

    const closeModal = () => {
        setModalOpen(false);
        if (window.location.hash.startsWith('#pg-section-')) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    };

    const openModal = () => {
        setModalOpen(true);
        if (window.location.hash.startsWith('#pg-section-')) {
            history.replaceState(null, '', window.location.pathname + window.location.search + window.location.hash);
        }
    }

    const openLightbox = (index: number) => {
        setActiveSlide(index);
        setSwiperIndex(index);
    };

    const closeLightbox = () => setSwiperIndex(null);

    // Escape: close lightbox first, then modal
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (swiperIndex !== null) closeLightbox();
                else if (modalOpen) closeModal();
            }
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [swiperIndex, modalOpen]);

    // Lock body scroll when either layer is open
    useEffect(() => {
        document.body.style.overflow = (modalOpen || swiperIndex !== null) ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [modalOpen, swiperIndex]);

    return (
        <>
            {/* ── Hero Grid ── */}
            <div className="pg-hero">
                <div className="pg-hero__main" onClick={openModal}>
                    <img src={hero} alt={name} className="pg-hero__img"/>
                </div>

                {(second || third) && (
                    <div className="pg-hero__side">
                        {second && (
                            <div className="pg-hero__side-item" onClick={openModal}>
                                <img src={second} alt={`${name} 2`} className="pg-hero__img"/>
                            </div>
                        )}
                        {third && (
                            <div className="pg-hero__side-item" onClick={openModal}>
                                <img src={third} alt={`${name} 3`} className="pg-hero__img"/>
                            </div>
                        )}
                    </div>
                )}

                {hasGallery && (
                    <button className="pg-hero__show-all" onClick={() => setModalOpen(true)}>
                        <GridIcon/>
                        Show all photos
                    </button>
                )}
            </div>

            {/*<ImageSwiper imageUrls={imageUrls}/>*/}

            {/* ── Photo Grid Modal ── */}
            {modalOpen && (
                <>
                    <div className="pg-modal-backdrop" onClick={closeModal}/>
                    <div className="pg-modal" role="dialog" aria-label="All photos">

                        <div className="pg-modal__header">
                            <h2 className="pg-modal__title">{name} — Photos</h2>
                            <button className="pg-modal__close" onClick={closeModal} aria-label="Close">
                                <CloseIcon/>
                            </button>
                        </div>

                        {/* Anchor link nav */}
                        {tags.length > 1 && (
                            <nav className="pg-modal__anchor-nav">
                                {tags.map(tag => (
                                    <a
                                        key={tag}
                                        href={`#pg-section-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="pg-modal__anchor-link"
                                    >
                                        {tag}
                                    </a>
                                ))}
                            </nav>
                        )}

                        {/* Image sections */}
                        <div className="pg-modal__sections">
                            {tags.length > 0
                                ? tags.map(tag => (
                                    <section
                                        key={tag}
                                        id={`pg-section-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="pg-modal__section"
                                    >
                                        {tags.length > 1 && (
                                            <h3 className="pg-modal__section-title">{tag}</h3>
                                        )}
                                        <div className="pg-modal__grid">
                                            {(groupedImages[tag] ?? []).map((img, i) => {
                                                const globalIndex = imageUrls.indexOf(img);
                                                return (
                                                    <button
                                                        key={i}
                                                        className="pg-modal__item"
                                                        onClick={() => openLightbox(globalIndex)}
                                                        aria-label={`View ${img.tag ?? name}, photo ${i + 1}`}
                                                    >
                                                        <img src={img.url} alt={img.tag ?? name} loading="lazy"/>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </section>
                                ))
                                : (
                                    <div className="pg-modal__grid">
                                        {imageUrls.map((img, i) => (
                                            <button
                                                key={i}
                                                className="pg-modal__item"
                                                onClick={() => openLightbox(i)}
                                                aria-label={`View photo ${i + 1}`}
                                            >
                                                <img src={img.url} alt={name} loading="lazy"/>
                                            </button>
                                        ))}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </>
            )}

            {/* ── Swiper Lightbox ── */}
            {swiperIndex !== null && (
                <>
                    <div className="pg-lightbox-backdrop" onClick={closeLightbox}/>
                    <div className="pg-lightbox" role="dialog" aria-label="Photo viewer">

                        {/* Counter */}
                        <div className="pg-lightbox__counter">
                            {activeSlide + 1} / {imageUrls.length}
                        </div>

                        {/* Close */}
                        <button className="pg-lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
                            <CloseIcon/>
                        </button>

                        <Swiper
                            modules={[Navigation, Keyboard, Pagination]}
                            navigation
                            keyboard={{enabled: true}}
                            pagination={{type: 'fraction', el: '.pg-lightbox__counter'}}
                            initialSlide={swiperIndex}
                            slidesPerView={1}
                            spaceBetween={0}
                            onSlideChange={swiper => setActiveSlide(swiper.activeIndex)}
                            className="pg-lightbox__swiper"
                        >
                            {imageUrls.map((img, i) => (
                                <SwiperSlide key={i} className="pg-lightbox__slide">
                                    <img src={img.url} alt={img.tag ?? name} draggable={false}/>
                                    {img.tag && (
                                        <span className="pg-lightbox__caption">{img.tag}</span>
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>

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