// src/components/property/types.ts

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

export interface PropertyImage {
    name: string;
    url?: string;
    tag?: string;
}

// Fixed additional services offered for all properties
export interface AdditionalService {
    id: string;
    name: string;
    description: string;
    icon: string;
}

export const ADDITIONAL_SERVICES: AdditionalService[] = [
    {
        id: 'Valet',
        name: 'Valet',
        description: 'Luxury parking service that are familier with our listings',
        icon: 'team',
    },
    {
        id: 'Catering/Craft Services',
        name: 'Catering/Craft Services',
        description: 'We offer luxury catering for events as well as craft services for production teams',
        icon: 'staging',
    },
    {
        id: 'photography',
        name: 'Photography & Videography',
        description: 'Professional photo and video coverage of your event.',
        icon: 'photography',
    },
    {
        id: 'wellness',
        name: 'Wellness & Spa',
        description: 'On-site wellness services including massage and spa treatments.',
        icon: 'wellness',
    },
    {
        id: 'layout',
        name: 'Layout Planning',
        description: 'Expert layout design to maximise your event space.',
        icon: 'layout',
    },
    {
        id: 'permits',
        name: 'Location Permits',
        description: 'Full permit acquisition and management for film and events.',
        icon: 'permits',
    },
];