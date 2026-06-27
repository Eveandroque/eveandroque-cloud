import React, {useState, useRef, useEffect} from 'react';
import {useAuthStore} from '../../stores/authStore';
import './UserMenu.css';

export function UserMenu() {
    const {user, isLoading, openAuthModal, signOut} = useAuthStore();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    if (isLoading) return null;

    if (!user) {
        return (
            <button className="user-menu__login" onClick={openAuthModal}>
                Sign in
            </button>
        );
    }

    const initial = (user.email ?? 'U')[0].toUpperCase();

    return (
        <div className="user-menu__wrapper">
            <div className="user-menu" ref={menuRef}>
                <button
                    className="user-menu__avatar"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="User menu"
                >
                    <span>menu</span>
                    <UserMenuIcon/>

                </button>

                {menuOpen && (
                    <div className="user-menu__dropdown">
                        <div className="user-menu__email">{user.email}</div>
                        <a
                            href="/listings/projects"
                            className="user-menu__item"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FolderIcon/> My Projects
                        </a>
                        <button
                            className="user-menu__item user-menu__item--danger"
                            onClick={() => {
                                signOut();
                                setMenuOpen(false);
                            }}
                        >
                            <LogoutIcon/> Sign out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const FolderIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
    </svg>
);

const LogoutIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/>
    </svg>
);

const UserMenuIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"/>
    </svg>
)