import React from 'react';
import type {FilterOption} from './types';

const CHIPS_VISIBLE = 8;

interface CategoryChipsProps {
    options: FilterOption[];
    activeFilter: string | null;
    modalCount: number;
    onSelect: (name: string | null) => void;
    onMoreFilters: () => void;
}

export function CategoryChips({
                                  options,
                                  activeFilter,
                                  modalCount,
                                  onSelect,
                                  onMoreFilters,
                              }: CategoryChipsProps) {
    const visible = options.slice(0, CHIPS_VISIBLE);

    return (
        <div className="category-chips">
            <div className="category-chips__list">

                {/* ── All Properties reset button — always first ── */}
                <button
                    className={`category-chip category-chip--all${activeFilter === null ? ' is-active' : ''}`}
                    onClick={() => onSelect(null)}
                >
                    All Properties
                </button>

                {visible.map(opt => (
                    <button
                        key={opt.id}
                        className={`category-chip${activeFilter === opt.name ? ' is-active' : ''}`}
                        onClick={() => onSelect(opt.name)}
                    >
                        {opt.name}
                    </button>
                ))}
            </div>

            <button className="category-chips__more" onClick={onMoreFilters}>
                <FiltersIcon/>
                More filters
                {modalCount > 0 && (
                    <span className="category-chips__badge">{modalCount}</span>
                )}
            </button>
        </div>
    );
}

const FiltersIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M1.5 3.5h11M3.5 7h7M5.5 10.5h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
);