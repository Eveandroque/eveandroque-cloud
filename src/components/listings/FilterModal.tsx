import React, {useState, useEffect} from 'react';
import type {FiltersApiResponse, FilterState} from './types';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    filtersData: FiltersApiResponse | undefined;
    activeFilters: FilterState;
    count: number;
    isCountLoading: boolean;
    onToggle: (key: keyof FilterState, value: string) => void;
    onClearAll: () => void;
}

const INITIAL_SHOW = 12; // items shown before "Show all"

// ─── Checkbox Group ────────────────────────────────────────────────────────────

interface CheckboxGroupProps {
    title: string;
    options: { id: string; name: string }[];
    active: string[];
    onToggle: (value: string) => void;
}

function CheckboxGroup({title, options, active, onToggle}: CheckboxGroupProps) {
    const [expanded, setExpanded] = useState(false);
    const visible = expanded ? options : options.slice(0, INITIAL_SHOW);
    const hasMore = options.length > INITIAL_SHOW;

    return (
        <div className="filter-group">
            <h3 className="filter-group__title">{title}</h3>
            <div className="filter-group__grid">
                {visible.map(opt => (
                    <label key={opt.id} className="filter-checkbox">
                        <input
                            type="checkbox"
                            checked={active.includes(opt.name)}
                            onChange={() => onToggle(opt.name)}
                        />
                        <span className="filter-checkbox__box"/>
                        <span className="filter-checkbox__label">{opt.name}</span>
                    </label>
                ))}
            </div>
            {hasMore && (
                <button
                    className="filter-group__show-all"
                    onClick={() => setExpanded(e => !e)}
                >
                    {expanded ? 'Show less ↑' : `Show all ↓`}
                </button>
            )}
        </div>
    );
}

// ─── Modal ─────────────────────────────────────────────────────────────────────

export function FilterModal({
                                isOpen,
                                onClose,
                                filtersData,
                                activeFilters,
                                count,
                                isCountLoading,
                                onToggle,
                                onClearAll,
                            }: FilterModalProps) {
    // Lock body scroll when modal open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, [onClose]);

    if (!isOpen) return null;

    const groups: {
        title: string;
        key: keyof typeof activeFilters;
        opts: { id: string; name: string }[];
    }[] = [
        {title: 'General Filters', key: 'generalFilters', opts: filtersData?.generalFilters ?? []},
        {title: 'Style', key: 'styles', opts: filtersData?.styles ?? []},
        {title: 'Search Area', key: 'searchAreas', opts: filtersData?.searchAreas ?? []},
        {title: 'Scenic Views', key: 'scenicViews', opts: filtersData?.scenicViews ?? []},
        {title: 'Parking', key: 'parkingTypes', opts: filtersData?.parkingTypes ?? []},
        {title: 'Pool & Spa', key: 'poolSpa', opts: filtersData?.poolSpa ?? []},
        {title: 'Outdoor Features', key: 'outdoorFeatures', opts: filtersData?.outdoorFeatures ?? []},
        {title: 'Indoor Features', key: 'indoorFeatures', opts: filtersData?.indoorFeatures ?? []},
        {title: 'Rules', key: 'rules', opts: filtersData?.rules ?? []},
    ];

    return (
        <>
            {/* Backdrop */}
            <div className="modal-backdrop" onClick={onClose}/>

            {/* Panel */}
            <div className="filter-modal" role="dialog" aria-modal="true" aria-label="More filters">

                {/* Header */}
                <div className="filter-modal__header">
                    <h2 className="filter-modal__heading">More Filters</h2>
                    <button className="filter-modal__close" onClick={onClose} aria-label="Close filters">
                        <CloseIcon/>
                    </button>
                </div>

                {/* Scrollable body */}
                <div className="filter-modal__body">
                    {groups.map((group, i) => (
                        <React.Fragment key={group.key}>
                            <CheckboxGroup
                                title={group.title}
                                options={group.opts}
                                active={activeFilters[group.key] as string[]}
                                onToggle={(value) => onToggle(group.key, value)}
                            />
                            {i < groups.length - 1 && <hr className="filter-modal__divider"/>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Footer */}
                <div className="filter-modal__footer">
                    <button className="filter-modal__clear" onClick={onClearAll}>
                        Clear all
                    </button>
                    <button className="filter-modal__apply" onClick={onClose}>
                        {isCountLoading
                            ? 'Loading...'
                            : `Show ${count.toLocaleString()} listing${count !== 1 ? 's' : ''}`
                        }
                        <ArrowIcon/>
                    </button>
                </div>

            </div>
        </>
    );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
    </svg>
);