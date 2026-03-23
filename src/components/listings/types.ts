// ─── Filter State ─────────────────────────────────────────────────────────────

export interface FilterState {
    // Search bar
    rentalTypes: string[];    // category chips → ?rentalTypes=Film,Event
    eventMaxCap: number | null; // group size → ?maxGuests=50
    // Modal groups (all by name)
    generalFilters: string[];
    styles: string[];
    searchAreas: string[];
    scenicViews: string[];
    parkingTypes: string[];
    poolSpa: string[];
    outdoorFeatures: string[];
    indoorFeatures: string[];
    rules: string[];

    // Pagination
    page: number;
}

export const EMPTY_FILTERS: FilterState = {
    rentalTypes: [],
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
};

// ─── API Types ─────────────────────────────────────────────────────────────────

export interface FilterOption {
    id: string;
    name: string;
    order?: number;
}

export interface FiltersApiResponse {
    rentalTypes: FilterOption[];
    generalFilters: FilterOption[];
    searchAreas: FilterOption[];
    scenicViews: FilterOption[];
    parkingTypes: FilterOption[];
    styles: FilterOption[];
    poolSpa: FilterOption[];
    outdoorFeatures: FilterOption[];
    indoorFeatures: FilterOption[];
    rules: FilterOption[];
}

export interface Property {
    id: string;
    slug: string;
    name: string;
    city: string;
    thumbnail: string;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number | null;
}

export interface ListingsApiResponse {
    listings: Property[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

export interface CountApiResponse {
    total: number;
    filters: Record<string, string[]>;
}