// src/components/SiteShell.tsx
// Single React root that contains DevLinkProvider + Header + Footer + slot content.
// This ensures Devlink interactions (IX2 engine) are available to Header/Footer.

import React from 'react';
import {DevLinkProvider} from '../../devlink/DevLinkProvider.jsx';
import {Header} from '../../devlink/Header';
import {Footer} from '../../devlink/Footer';
import {AuthListener} from './auth/AuthListener';
import {AuthModal} from './auth/AuthModal';
import {UserMenu} from './auth/UserMenu';
import {AddToProjectModal} from './projects/AddToProjectModal';

interface SiteShellProps {
    children: React.ReactNode;
}

export function SiteShell({children}: SiteShellProps) {
    return (
        <DevLinkProvider>
            <Header/>
            <UserMenu/>
            {children}
            <Footer/>
            {/* Global listeners & modals — render nothing until needed */}
            <AuthListener/>
            <AuthModal/>
            <AddToProjectModal/>
        </DevLinkProvider>
    );
}