import {useCallback} from 'react';
import {
    useQueryStates,
    parseAsArrayOf,
    parseAsString,
    parseAsInteger,
} from 'nuqs';
import type {FilterState} from '../types';

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useFilters() {
    const [filters, setFilters] = useQueryStates(
        {
            // Search bar
            rentalTypes: parseAsArrayOf(parseAsString).withDefault([]),
            city: parseAsString.withDefault(''),
            eventMaxCap: parseAsInteger,

            // Modal groups
            generalFilters: parseAsArrayOf(parseAsString).withDefault([]),
            styles: parseAsArrayOf(parseAsString).withDefault([]),
            searchAreas: parseAsArrayOf(parseAsString).withDefault([]),
            scenicViews: parseAsArrayOf(parseAsString).withDefault([]),
            parkingTypes: parseAsArrayOf(parseAsString).withDefault([]),
            poolSpa: parseAsArrayOf(parseAsString).withDefault([]),
            outdoorFeatures: parseAsArrayOf(parseAsString).withDefault([]),
            indoorFeatures: parseAsArrayOf(parseAsString).withDefault([]),
            rules: parseAsArrayOf(parseAsString).withDefault([]),

            // Pagination
            page: parseAsInteger.withDefault(1),
        },
        {
            // pushState so the back button restores the previous filter state
            history: 'push',
        }
    );

    // ── Setters ──────────────────────────────────────────────────────────────────

    // Toggle a value in any array filter group — resets page to 1
    const toggleArrayFilter = useCallback((
        key: keyof FilterState,
        value: string
    ) => {
        setFilters(prev => {
            const current = (prev[key] as string[]) ?? [];
            const next = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            return {[key]: next, page: 1};
        });
    }, [setFilters]);

    const toggleRentalType = useCallback((name: string) => {
        toggleArrayFilter('rentalTypes', name);
    }, [toggleArrayFilter]);

    const setCity = useCallback((city: string) => {
        setFilters({city, page: 1});
    }, [setFilters]);

    const setEventMaxCap = useCallback((eventMaxCap: number | null) => {
        setFilters({eventMaxCap: eventMaxCap, page: 1});
    }, [setFilters]);

    const setPage = useCallback((page: number) => {
        setFilters({page});
    }, [setFilters]);

    const clearAll = useCallback(() => {
        setFilters({
            rentalTypes: [],
            city: '',
            eventMaxCap: null,
            generalFilters: [],
            styles: [],
            searchAreas: [],
            scenicViews: [],
            parkingTypes: [],
            poolSpa: [],
            outdoorFeatures: [],
            indoorFeatures: [],
            rules: [],
            page: 1,
        });
    }, [setFilters]);

    // ── Derived ──────────────────────────────────────────────────────────────────

    const modalFilterCount =
        filters.generalFilters.length +
        filters.styles.length +
        filters.searchAreas.length +
        filters.scenicViews.length +
        filters.parkingTypes.length +
        filters.poolSpa.length +
        filters.outdoorFeatures.length +
        filters.indoorFeatures.length +
        filters.rules.length;

    const hasActiveFilters =
        modalFilterCount > 0 ||
        filters.rentalTypes.length > 0 ||
        !!filters.city ||
        filters.eventMaxCap !== null;

    return {
        filters,
        setFilters,
        toggleArrayFilter,
        toggleRentalType,
        setCity,
        setEventMaxCap,
        setPage,
        clearAll,
        modalFilterCount,
        hasActiveFilters,
    };
}

// ─── URL query string builder (used by useListings) ───────────────────────────
// nuqs owns the page URL — this builds the API request URL separately

export function buildQueryString(filters: FilterState): string {
    const p = new URLSearchParams();

    const setArr = (key: string, arr: string[]) => {
        if (arr.length) p.set(key, arr.join(','));
    };

    setArr('rentalTypes', filters.rentalTypes);
    if (filters.eventMaxCap) p.set('eventMaxCap', String(filters.eventMaxCap));
    setArr('generalFilters', filters.generalFilters);
    setArr('styles', filters.styles);
    setArr('searchAreas', filters.searchAreas);
    setArr('scenicViews', filters.scenicViews);
    setArr('parkingTypes', filters.parkingTypes);
    setArr('poolSpa', filters.poolSpa);
    setArr('outdoorFeatures', filters.outdoorFeatures);
    setArr('indoorFeatures', filters.indoorFeatures);
    setArr('rules', filters.rules);
    if (filters.page > 1) p.set('page', String(filters.page));

    return p.toString();
}