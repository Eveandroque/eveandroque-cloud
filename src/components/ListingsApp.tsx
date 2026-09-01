/**
 * src/components/ListingsApp.tsx
 *
 * React island mounted on /listings via a client:load.
 * Drop-in from the Webflow Code Component version — the only change is
 * NuqsAdapter uses the Next.js adapter since Astro's App Router
 * behaves similarly. For vanilla Astro use 'nuqs/adapters/vanilla'.
 */

import React, {useState, useCallback, useEffect, useRef} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {NuqsAdapter} from 'nuqs/adapters/react';

import {useFilters} from './listings/hooks/useFilters';
import {useListings, useFiltersApi} from './listings/hooks/useListings';
import {SearchBar} from './listings/SearchBar';
import {CategoryChips} from './listings/CategoryChips';
import {FilterModal} from './listings/FilterModal';
import {ListingsGrid} from './listings/ListingsGrid';
import type {FilterState} from './listings/types';

import './listings/ListingsPage.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
            retry: 2,
            refetchOnWindowFocus: false,
        },
    },
});

interface ListingsAppProps {
    baseApiUrl: string;
    filtersApiUrl: string;
}

function ListingsInner({baseApiUrl, filtersApiUrl}: ListingsAppProps) {
    const [modalOpen, setModalOpen] = useState(false);

    const [propertySearch, setPropertySearch] = useState('');

    const listingsTopRef = useRef<HTMLDivElement>(null);
    const previousPageRef = useRef<number | null>(null);

    const {
        filters,
        setFilters,
        toggleArrayFilter,
        setPage,
        clearAll,
        hasActiveFilters,
        modalFilterCount,
    } = useFilters();

    useEffect(() => {
        setPropertySearch(filters.q);
    }, [filters.q]);

    const {
        listings, total, currentPage, pageSize,
        hasMore, count, isLoading, isFetching, isError, isCountLoading,
    } = useListings(filters, {baseApiUrl, filtersApiUrl});

    useEffect(() => {
        if (previousPageRef.current === null) {
            previousPageRef.current = currentPage;
            return;
        }

        if (previousPageRef.current === currentPage) return;

        previousPageRef.current = currentPage;

        const activeElement = document.activeElement;
        if (activeElement instanceof HTMLElement) {
            activeElement.blur();
        }

        window.requestAnimationFrame(() => {
            const targetTop = listingsTopRef.current
                ? listingsTopRef.current.getBoundingClientRect().top + window.scrollY - 110
                : 0;

            window.scrollTo({
                top: Math.max(targetTop, 0),
                behavior: 'auto',
            });
        });
    }, [currentPage]);

    const {data: filtersData} = useFiltersApi(filtersApiUrl);

    const handleModalToggle = useCallback(
        (key: keyof FilterState, value: string) => toggleArrayFilter(key, value),
        [toggleArrayFilter]
    );

    const handlePropertySearchSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFilters({
            q: propertySearch.trim(),
            page: 1,
        });
    }, [propertySearch, setFilters]);

    const handlePropertySearchClear = useCallback(() => {
        setPropertySearch('');
        setFilters({
            q: '',
            page: 1,
        });
        // setPropertySearchOpen(false);
    }, [setFilters]);

    return (
        <div className="listings-page">
            <div className="listings-page__search">
                <SearchBar
                    rentalType={filters.rentalTypes[0] ?? null}
                    selectedAreas={filters.searchAreas}
                    eventMaxCap={filters.eventMaxCap}
                    rentalTypeOptions={filtersData?.rentalTypes ?? []}
                    searchAreaOptions={filtersData?.searchAreas ?? []}
                    onSearch={({rentalType, searchAreas, eventMaxCap,}) => {
                        setFilters({
                            rentalTypes: rentalType ? [rentalType] : [],
                            searchAreas,
                            eventMaxCap,
                            page: 1,
                        });
                    }}
                />
            </div>

            {/*Horizontal line with */}
            {/*<div className="listings-page__horizontal-line"></div>*/}

            <div className="listings-page__chips">
                <p className="listing_paragraph">Quick filters</p>
                <CategoryChips
                    options={filtersData?.generalFilters ?? []}
                    activeFilter={filters.generalFilters[0] ?? null}
                    modalCount={modalFilterCount}
                    onSelect={(name) => setFilters({
                        generalFilters: name ? [name] : [],
                        page: 1,
                    })}
                    onMoreFilters={() => setModalOpen(true)}
                />
            </div>

            {!isLoading && (
                <div className="listings-page__meta">
                    <div className="listings-page__meta-left">
                        <p className="listings-page__count">
                            {total.toLocaleString()} propert{total !== 1 ? 'ies' : 'y'}
                        </p>
                        {hasActiveFilters && (
                            <button className="listings-page__clear-all" onClick={clearAll}>
                                <ClearIcon/>
                                Clear all filters
                            </button>
                        )}
                    </div>

                    <form className="property-lookup" onSubmit={handlePropertySearchSubmit}>
                        <input
                            className="property-lookup__input"
                            type="search"
                            placeholder="Search property name or keyword"
                            value={propertySearch}
                            onChange={(event) => setPropertySearch(event.target.value)}
                            autoFocus
                        />
                        {filters.q && (
                            <button
                                className="property-lookup__clear"
                                type="button"
                                aria-label="Clear property search"
                                onClick={handlePropertySearchClear}
                            >
                                <ClearIcon/>
                            </button>
                        )}

                        <button
                            className="property-lookup__submit"
                            type='submit'
                            aria-label="Search specific property"
                            // onClick={() => {
                            //     if (!propertySearchOpen) setPropertySearchOpen(true);
                            // }}
                        >
                            <SearchIcon/>
                        </button>
                    </form>

                </div>
            )}

            <ListingsGrid
                listings={listings}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                total={total}
                page={currentPage}
                pageSize={pageSize}
                hasMore={hasMore}
                onPageChange={setPage}/>

            <FilterModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                filtersData={filtersData}
                activeFilters={filters}
                count={count}
                isCountLoading={isCountLoading}
                onToggle={handleModalToggle}
                onClearAll={() => {
                    clearAll();
                    setModalOpen(false);
                }}
            />
        </div>
    );
}

export default function ListingsApp(props: ListingsAppProps) {
    return (
        <NuqsAdapter>
            <QueryClientProvider client={queryClient}>
                <ListingsInner {...props} />
            </QueryClientProvider>
        </NuqsAdapter>
    );
}

const ClearIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const SearchIcon = () => (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);