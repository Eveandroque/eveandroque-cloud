import {useQuery} from '@tanstack/react-query';
import type {FilterState, FiltersApiResponse, ListingsApiResponse, CountApiResponse} from '../types';
import {buildQueryString} from './useFilters';

// ─── Config ───────────────────────────────────────────────────────────────────

interface UseListingsConfig {
    baseApiUrl: string;  // e.g. https://your-worker.workers.dev
    filtersApiUrl: string;  // e.g. https://your-worker.workers.dev/api/filters
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

async function fetchListings(baseUrl: string, filters: FilterState): Promise<ListingsApiResponse> {
    const qs = buildQueryString(filters);
    const url = `${baseUrl}/api/listings/cards${qs ? `?${qs}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch listings');
    return res.json();
}

async function fetchCount(baseUrl: string, filters: FilterState): Promise<CountApiResponse> {
    // Count uses the same params but different endpoint — exclude page
    const {page: _page, ...countFilters} = filters;
    const qs = buildQueryString({...countFilters, page: 1});
    const url = `${baseUrl}/api/listings/count${qs ? `?${qs}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch count');
    return res.json();
}

async function fetchFilters(url: string): Promise<FiltersApiResponse> {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch filters');
    return res.json();
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useListings(filters: FilterState, config: UseListingsConfig) {
    // Stable query key — serialise filters so React Query re-fetches on any change
    const qs = buildQueryString(filters);

    const listingsQuery = useQuery<ListingsApiResponse>({
        queryKey: ['listings', qs],
        queryFn: () => fetchListings(config.baseApiUrl, filters),
        // Keep previous page results visible while the new page loads
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 5,
    });

    // Count fires in parallel — shares the same filter params minus page
    const {page: _page, ...countFilters} = filters;
    const countQs = buildQueryString({...countFilters, page: 1});

    const countQuery = useQuery<CountApiResponse>({
        queryKey: ['listings-count', countQs],
        queryFn: () => fetchCount(config.baseApiUrl, filters),
        staleTime: 1000 * 60 * 5,
    });

    return {
        listings: listingsQuery.data?.listings ?? [],
        total: listingsQuery.data?.total ?? 0,
        currentPage: listingsQuery.data?.page ?? 1,
        pageSize: listingsQuery.data?.pageSize ?? 12,
        hasMore: listingsQuery.data?.hasMore ?? false,
        count: countQuery.data?.total ?? 0,
        isLoading: listingsQuery.isLoading,
        isFetching: listingsQuery.isFetching,
        isError: listingsQuery.isError,
        isCountLoading: countQuery.isLoading,
    };
}

export function useFiltersApi(filtersApiUrl: string) {
    return useQuery<FiltersApiResponse>({
        queryKey: ['filters-api'],
        queryFn: () => fetchFilters(filtersApiUrl),
        staleTime: Infinity, // filter options don't change during a session
    });
}