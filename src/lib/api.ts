/**
 * src/lib/api.ts
 *
 * Thin wrapper around your Cloudflare Worker endpoints.
 * All secrets (Airtable tokens, etc.) live in the Worker — this file
 * only knows the public Worker base URL.
 */
import type {PropertyImage} from "../components/propertyDetails/types.ts";

const WORKER_URL = import.meta.env.PUBLIC_WORKER_URL as string;

// ─── Types (shared with React components) ─────────────────────────────────────

export interface Property {
    id: string;
    slug: string;
    name: string;
    city: string;
    thumbnail: string;
    bedrooms: number;
    bathrooms: number;
    maxGuests: number;
}

export interface PropertyDetail {
    id: string;
    slug: string;
    name: string;
    address: string;
    city: string;
    description: string;
    descriptionELH?: string;
    thumbnail: string;
    images: PropertyImage[];
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSqft: number;
    maxGuests: number | null;
    eventMaxCap: number | null;
    filmMaxCap: number | null;
    style: string[];
    rentalTypes: string[];
    scenicViews: string[];
    featuredAmenities: string[];
    outdoorFeatures: string[];
    indoorFeatures: string[];
    poolSpa: string[];
    parkingTypes: string[];
    rules: string[];
    searchAreas: string[];
    generalFilters: string[];
    startingFilmRate: number | null;
    startingEventRate: number | null;
    startingNightlyRate: number | null;
    startingMonthlyRate: number | null;
    cleaningFee: number | null;
    petFee: number | null;
    securityDepositNightly: number | null;
    booksFarOut: string | null;
    noticeNeeded: string | null;
    overnight: string | null;
    lateNight: string | null;
    parties: string | null;
    weddings: boolean;
    maxPets: number | null;
    minStay: number | null;
    maxStay: number | null;
    handicapAccessible: string | null;
    gatedCommunity: string | null;
}

// export interface PropertyDetail extends Property {
//     description?: string;
//     address?: string;
//     gallery?: { url: string; filename: string }[];
//     amenities?: string[];
// }

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

export interface FilterOption {
    id: string;
    name: string;
    order?: number;
}

export interface ListingsResponse {
    listings: Property[];
    total: number;
    page: number;
    perPage: number;
}

export interface CountResponse {
    total: number;
    filters: Record<string, string[]>;
}

// ─── API calls ────────────────────────────────────────────────────────────────

export async function getFilters(): Promise<FiltersApiResponse> {
    const res = await fetch(`${WORKER_URL}/api/filters`);
    if (!res.ok) throw new Error('Failed to fetch filters');
    return res.json();
}

export async function getListings(qs: string): Promise<ListingsResponse> {
    const url = `${WORKER_URL}/api/listings/cards${qs ? `?${qs}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch listings');
    return res.json();
}

export async function getListingsCount(qs: string): Promise<CountResponse> {
    const url = `${WORKER_URL}/api/listings/count${qs ? `?${qs}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch count');
    return res.json();
}


export async function getProperty(slug: string): Promise<PropertyDetail | null> {
    const res = await fetch(`${WORKER_URL}/api/listings/${slug}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('Failed to fetch property');
    return res.json();
}

export async function getAllSlugs(): Promise<string[]> {
    const res = await fetch(`${WORKER_URL}/api/listings`);
    if (!res.ok) return [];
    const data: Property[] = await res.json();
    return data.map(p => p.slug).filter(Boolean);
}