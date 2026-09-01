import React, {useState, useRef, useEffect} from 'react';
import type {FilterOption} from './types';

interface SearchValues {
    rentalType: string | null;
    searchAreas: string[];
    eventMaxCap: number | null;
}

interface SearchBarProps {
    rentalType: string | null;
    selectedAreas: string[];
    eventMaxCap: number | null;
    rentalTypeOptions: FilterOption[];
    searchAreaOptions: FilterOption[];
    onSearch: (values: SearchValues) => void;
    // onRentalTypeChange: (types: string[]) => void;
    // onAreaChange: (city: string) => void;
    // onEventChange: (n: number | null) => void;

}

export function SearchBar({
                              rentalType,
                              selectedAreas,
                              eventMaxCap,
                              rentalTypeOptions,
                              searchAreaOptions,
                              onSearch,
                              // onRentalTypeChange,
                              // onAreaChange,
                              // onEventChange,

                          }: SearchBarProps) {


    //Draft state
    const [draftType, setDraftType] = useState<string | null>(rentalType);
    const [draftAreas, setDraftAreas] = useState<string[]>(selectedAreas);
    const [draftCap, setDraftCap] = useState<number | null>(eventMaxCap);
    const [areaInput, setAreaInput] = useState<string>('');

    // dropdown open state
    const [typeOpen, setTypeOpen] = useState(false);
    const [locationOpen, setLocationOpen] = useState(false);
    const [guestOpen, setGuestOpen] = useState(false);
    //  const [locationInput, setLocationInput] = useState(selectedArea);

    const typeRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const guestRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDraftType(rentalType);
    }, [rentalType]);

    useEffect(() => {
        setDraftAreas(selectedAreas);
    }, [selectedAreas]);

    useEffect(() => {
        setDraftCap(eventMaxCap);
    }, [eventMaxCap]);

    // Close dropdowns on the outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!typeRef.current?.contains(e.target as Node)) setTypeOpen(false);
            if (!locationRef.current?.contains(e.target as Node)) setLocationOpen(false);
            if (!guestRef.current?.contains(e.target as Node)) setGuestOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const filteredAreas = searchAreaOptions.filter(a =>
        a.name.toLowerCase().includes(areaInput.toLowerCase())
    );

    const toggleDraftArea = (areaName: string) => {
        setDraftAreas(current =>
            current.includes(areaName)
                ? current.filter(name => name !== areaName)
                : [...current, areaName]
        );
    };

    //Commit to Search click
    const handleSearch = () => {
        setTypeOpen(false);
        setLocationOpen(false);
        setGuestOpen(false);
        onSearch({rentalType: draftType, searchAreas: draftAreas, eventMaxCap: draftCap});
    }

    //labels
    const typeLabel = draftType ?? 'Event / Film Type';
    const locationLabel = draftAreas.length === 0
        ? 'Location'
        : draftAreas.length === 1
            ? draftAreas[0]
            : `${draftAreas.length} locations`;
    const guestLabel = draftCap ? `${draftCap}+ guests` : 'Guest / Crew Count';

    const selectedAreasKey = selectedAreas.join('|');
    const draftAreasKey = draftAreas.join('|');

    const isDirty = draftType !== rentalType || draftAreasKey !== selectedAreasKey || draftCap !== eventMaxCap;

    return (
        <div className="search-bar">

            {/* ── Event Type ── */}
            <div className="search-bar__field" ref={typeRef}>
                <button
                    className={`search-bar__trigger${draftType ? ' has-value' : ''}`}
                    onClick={() => {
                        setTypeOpen(o => !o);
                        setLocationOpen(false);
                        setGuestOpen(false);
                    }}
                >
                    <FilterIcon/>
                    <span>{typeLabel}</span>
                </button>
                {typeOpen && (
                    <div className="search-bar__dropdown">
                        <p className="search-bar__dropdown-label">Event Type</p>
                        {draftType && (
                            <button
                                className="search-bar__type-clear search-bar__location-option--clear"
                                onClick={() => setDraftType(null)}
                            >
                                Clear Event type
                            </button>
                        )}
                        <div className="search-bar__type-grid">
                            {rentalTypeOptions.map(opt => (
                                <label key={opt.id} className="filter-checkbox search-bar__checkbox-row">
                                    <input
                                        type="checkbox"
                                        checked={draftType === opt.name}
                                        onChange={() => setDraftType(draftType === opt.name ? null : opt.name)}
                                    />
                                    <span className="filter-checkbox__box"/>
                                    <span className="filter-checkbox__label">{opt.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="search-bar__divider"/>

            {/* ── Location ── */}
            <div className="search-bar__field" ref={locationRef}>
                <button
                    className={`search-bar__trigger${selectedAreas.length > 0 ? ' has-value' : ''}`}
                    onClick={() => {
                        setLocationOpen(o => !o);
                        setTypeOpen(false);
                        setGuestOpen(false);
                    }}
                >
                    <LocationIcon/>
                    <span>{locationLabel}</span>
                </button>
                {locationOpen && (
                    <div className="search-bar__dropdown search-bar__dropdown--location">
                        <input
                            className="search-bar__location-input"
                            type="text"
                            placeholder="Search locations..."
                            value={areaInput}
                            onChange={e => setAreaInput(e.target.value)}
                            autoFocus
                        />
                        <div className="search-bar__location-list">
                            {draftAreas.length > 0 && (
                                <button
                                    className="search-bar__location-option search-bar__location-option--clear"
                                    onClick={() => {
                                        setDraftAreas([]);
                                        setAreaInput('');
                                        // setLocationOpen(false);
                                    }}
                                >
                                    Clear locations
                                </button>
                            )}
                            {filteredAreas.slice(0, 20).map(area => {
                                const isSelected = draftAreas.includes(area.name);

                                return (
                                    <label
                                        key={area.id}
                                        className={`search-bar__location-option${isSelected ? ' is-selected' : ''} filter-checkbox`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => toggleDraftArea(area.name)}
                                        />
                                        <span className="filter-checkbox__box"></span>
                                        <span>{area.name}</span>
                                    </label>
                                );
                            })}
                            {filteredAreas.length === 0 && (
                                <p className="search-bar__location-empty">No locations found</p>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="search-bar__divider"/>

            {/* ── Group Size ── */}
            <div className="search-bar__field" ref={guestRef}>
                <button
                    className={`search-bar__trigger${eventMaxCap ? ' has-value' : ''}`}
                    onClick={() => {
                        setGuestOpen(o => !o);
                        setTypeOpen(false);
                        setLocationOpen(false);
                    }}
                >
                    <GuestIcon/>
                    <span>{guestLabel}</span>
                </button>
                {guestOpen && (
                    <div className="search-bar__dropdown search-bar__dropdown--guests">
                        <p className="search-bar__dropdown-label">Minimum guest capacity</p>
                        <input
                            className="search-bar__guest-input"
                            type="number"
                            min={1}
                            placeholder="e.g. 150"
                            value={draftCap ?? ''}
                            onChange={e => setDraftCap(e.target.value ? Number(e.target.value) : null)}
                            autoFocus
                        />
                        {draftCap && (
                            <button
                                className="search-bar__guest-clear"
                                onClick={() => {
                                    setDraftCap(null);
                                    setGuestOpen(false);
                                }}
                            >
                                Clear
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/*<input*/}
            {/*    className="search-bar__keyword-input"*/}
            {/*    type="text"*/}
            {/*    placeholder="Search by keyword..."*/}
            {/*    value={draftQ}*/}
            {/*    onChange={e => setDraftQ(e.target.value)}*/}
            {/*/>*/}

            {/* ── Search button ── */}
            <button className="search-bar__submit" onClick={handleSearch}>
                Search
                <SearchIcon/>
            </button>
        </div>
    );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const FilterIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const LocationIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 2C5.79 2 4 3.79 4 6c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor"
              strokeWidth="1.3"/>
    </svg>
);

const GuestIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 13c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="11" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M13 13c0-1.66-1.12-3.07-2.67-3.48" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
);

const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);