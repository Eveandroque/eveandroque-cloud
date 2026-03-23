/**
 * src/components/ListingsApp.tsx
 *
 * React island mounted on /listings via a client:load.
 * Drop-in from the Webflow Code Component version — the only change is
 * NuqsAdapter uses the Next.js adapter since Astro's App Router
 * behaves similarly. For vanilla Astro use 'nuqs/adapters/vanilla'.
 */

import React, {useState, useCallback} from 'react';
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

    const {
        filters,
        setFilters,
        toggleArrayFilter,
        setPage,
        clearAll,
        modalFilterCount,
    } = useFilters();

    const {
        listings, total, currentPage, pageSize,
        hasMore, count, isLoading, isFetching, isError, isCountLoading,
    } = useListings(filters, {baseApiUrl, filtersApiUrl});

    const {data: filtersData} = useFiltersApi(filtersApiUrl);

    const handleModalToggle = useCallback(
        (key: keyof FilterState, value: string) => toggleArrayFilter(key, value),
        [toggleArrayFilter]
    );

    return (
        <div className="listings-page">
            <div className="listings-page__search">
                <SearchBar
                    rentalType={filters.rentalTypes[0] ?? null}
                    selectedArea={filters.searchAreas[0] ?? ''}
                    eventMaxCap={filters.eventMaxCap}
                    rentalTypeOptions={filtersData?.rentalTypes ?? []}
                    searchAreaOptions={filtersData?.searchAreas ?? []}
                    onSearch={({rentalType, searchArea, eventMaxCap}) => {
                        setFilters({
                            rentalTypes: rentalType ? [rentalType] : [],
                            searchAreas: searchArea ? [searchArea] : [],
                            eventMaxCap,
                            page: 1,
                        });
                    }}
                />
            </div>

            <div className="listings-page__chips">
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
                    <p className="listings-page__count">
                        {total.toLocaleString()} propert{total !== 1 ? 'ies' : 'y'}
                    </p>
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