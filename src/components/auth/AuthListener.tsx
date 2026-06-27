// src/components/auth/AuthListener.tsx
// Invisible — syncs Supabase session → Zustand stores. Renders nothing.

import {useEffect} from 'react';
import {supabase} from '../../lib/supabase';
import {useAuthStore} from '../../stores/authStore';
import {useProjectsStore} from '../../stores/projectsStore';

export function AuthListener() {
    const setSession = useAuthStore((s) => s.setSession);
    const loadProjects = useProjectsStore((s) => s.loadProjects);
    const clearProjects = useProjectsStore((s) => s.clear);

    useEffect(() => {
        supabase.auth.getSession().then(({data: {session}}) => {
            setSession(session);
            if (session?.user) loadProjects(session.user.id);
        });

        const {data: {subscription}} = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
                if (session?.user) {
                    loadProjects(session.user.id);
                } else {
                    clearProjects();
                }
            }
        );

        return () => subscription.unsubscribe();
    }, [setSession, loadProjects, clearProjects]);

    return null;
}