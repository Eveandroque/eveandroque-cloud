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
    pageSize: number;
    hasMore: boolean;
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
    try {
        const slugs = new Set<string>();
        let page = 1;
        let hasMore = true;
        const maxPages = 50;

        while (hasMore && page <= maxPages) {
            const res = await fetch(`${WORKER_URL}/api/listings?page=${page}&pageSize=100`);
            if (!res.ok) {
                // If query param format fails, try base endpoint once
                if (page === 1) {
                    const fallbackRes = await fetch(`${WORKER_URL}/api/listings`);
                    if (fallbackRes.ok) {
                        const fallbackData = await fallbackRes.json();
                        const list: Property[] = Array.isArray(fallbackData)
                            ? fallbackData
                            : (fallbackData?.listings ?? []);
                        return list.map(p => p.slug).filter(Boolean);
                    }
                }
                break;
            }

            const data: ListingsResponse | Property[] = await res.json();
            const list: Property[] = Array.isArray(data) ? data : (data?.listings ?? []);

            let addedCount = 0;
            for (const item of list) {
                if (item?.slug && !slugs.has(item.slug)) {
                    slugs.add(item.slug);
                    addedCount++;
                }
            }

            if (Array.isArray(data) || !data?.hasMore || addedCount === 0) {
                hasMore = false;
            } else {
                page++;
            }
        }

        return Array.from(slugs);
    } catch {
        return [];
    }
}

export async function getFavProperties(propertyIds: string[]): Promise<PropertyDetail[]> {
    const res = await fetch(`${WORKER_URL}/api/listings/property/${propertyIds.join(',')}`);

    if (!res.ok) return [];
    return res.json();
}