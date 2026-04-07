// src/components/property/PropertyMap.tsx
// Mapbox GL JS map — geocodes the address string and drops a pin

import React, {useEffect, useRef} from 'react';
import {useQuery} from "@tanstack/react-query";

interface PropertyMapProps {
    address: string;
    mapboxToken: string;
}

// ─── Geocode fetcher ──────────────────────────────────────────────────────────

async function geocodeAddress(address: string, token: string): Promise<[number, number]> {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}&limit=1`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Geocoding failed');
    const data = await res.json();
    // @ts-ignore
    const coords = data.features?.[0]?.center as [number, number] | undefined;
    if (!coords) throw new Error('Address not found');
    return coords;
}

export function PropertyMap({address, mapboxToken}: PropertyMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null);

    // React Query handles geocoding — caches a result, no useEffect needed
    const {data: coords, isLoading, isError} = useQuery<[number, number]>({
        queryKey: ['geocode', address],
        queryFn: () => geocodeAddress(address, mapboxToken),
        staleTime: Infinity, // address won't change for a given property
        retry: 1,
    });

    // Mount map only once coords are available
    useEffect(() => {
        if (!coords || !mapRef.current || mapInstance.current) return;

        const initMap = async () => {
            const {default: mapboxgl} = await import('mapbox-gl');
            mapboxgl.accessToken = mapboxToken;

            const map = new mapboxgl.Map({
                container: mapRef.current!,
                style: 'mapbox://styles/mapbox/light-v11',
                center: coords,
                zoom: 12,
                interactive: false,
            });

            map.on('load', () => {
                // Add the approximate location as a GeoJSON point source
                map.addSource('location-radius', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {type: 'Point', coordinates: coords},
                        properties: {},
                    },
                });

                // Filled circle
                map.addLayer({
                    id: 'location-radius-fill',
                    type: 'circle',
                    source: 'location-radius',
                    paint: {
                        'circle-radius': {
                            stops: [
                                [10, 40],
                                [13, 120],
                                [15, 260],
                            ],
                            base: 2,
                        },
                        'circle-color': '#888888',
                        'circle-opacity': 0.15,
                    },
                });

                // Stroke ring
                map.addLayer({
                    id: 'location-radius-stroke',
                    type: 'circle',
                    source: 'location-radius',
                    paint: {
                        'circle-radius': {
                            stops: [
                                [10, 40],
                                [13, 120],
                                [15, 260],
                            ],
                            base: 2,
                        },
                        'circle-color': 'transparent',
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#666666',
                        'circle-stroke-opacity': 0.5,
                    },
                });
            });

            mapInstance.current = map;
        };

        initMap();

        return () => {
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, [coords, mapboxToken]);

    if (isError) {
        return (
            <div className="property-map property-map--error">
                <p>Map unavailable for this address.</p>
            </div>
        );
    }

    return (
        <div className="property-map">
            <div ref={mapRef} className="property-map__canvas"/>
        </div>
    );
}