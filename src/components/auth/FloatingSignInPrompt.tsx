// src/components/auth/FloatingSignInPrompt.tsx

import React from 'react';
import {useAuthStore} from '../../stores/authStore';
import './FloatingSignInPrompt.css';

export function FloatingSignInPrompt() {
    const {user, isLoading, openAuthModal} = useAuthStore();

    if (isLoading || user) return null;

    return (
        <div className="floating-signin">
            <button
                className="floating-signin__button"
                onClick={openAuthModal}
                type="button"
                aria-label="Sign in to save properties"
            >
                <span className="floating-signin__icon" aria-hidden="true">
                    <UserIcon/>
                </span>
                <span className="floating-signin__text">
                    Sign in to save properties
                </span>
            </button>
        </div>
    );
}

const UserIcon = () => (
    <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="15.5"
            cy="9.5"
            r="5.25"
            stroke="currentColor"
            strokeWidth="2"
        />
        <path
            d="M5.5 27C6.45 21.95 10.25 18.75 15.5 18.75C20.75 18.75 24.55 21.95 25.5 27"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);