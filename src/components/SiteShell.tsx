// src/components/SiteShell.tsx
// Single React root that contains DevLinkProvider + Header + Footer + slot content.
// This ensures Devlink interactions (IX2 engine) are available to Header/Footer.

import React from 'react';
import {DevLinkProvider} from '../../devlink/DevLinkProvider.js';
import {Header} from '../../devlink/Header';
import {Footer} from '../../devlink/Footer';

interface SiteShellProps {
    children: React.ReactNode;
}

export function SiteShell({children}: SiteShellProps) {
    return (
        <DevLinkProvider>
            <Header/>
            {children}
            <Footer/>
        </DevLinkProvider>
    );
}