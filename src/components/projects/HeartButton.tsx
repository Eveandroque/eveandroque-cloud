// src/components/projects/HeartButton.tsx
// Triggers the AddToProjectModal on click

import React from 'react';
import {useAuthStore} from '../../stores/authStore';
import {useProjectsStore} from '../../stores/projectsStore';
import {useProjectModalStore} from '../../stores/projectModalStore';
import './Projects.css';

interface HeartButtonProps {
    propertyId: string;
    propertyThumbnail?: string;
    variant?: 'card' | 'detail';
}

export function HeartButton({propertyId, propertyThumbnail, variant = 'card'}: HeartButtonProps) {
    const user = useAuthStore((s) => s.user);
    const openAuthModal = useAuthStore((s) => s.openAuthModal);
    const isInAnyProject = useProjectsStore((s) => s.isInAnyProject(propertyId));
    const openProjectModal = useProjectModalStore((s) => s.open);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!user) {
            openAuthModal();
            return;
        }
        openProjectModal(propertyId, propertyThumbnail);
    };

    return (
        <button
            className={`heart-btn heart-btn--${variant}${isInAnyProject ? ' is-active' : ''}`}
            onClick={handleClick}
            aria-label={isInAnyProject ? 'Saved to a project' : 'Save to project'}
        >
            <svg
                className="heart-btn__icon"
                width={variant === 'detail' ? '22' : '18'}
                height={variant === 'detail' ? '22' : '18'}
                viewBox="0 0 24 24"
                fill={isInAnyProject ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
        </button>
    );
}