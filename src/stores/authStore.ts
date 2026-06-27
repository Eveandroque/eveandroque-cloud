import {create} from 'zustand';
import type {User, Session} from '@supabase/supabase-js'
import {supabase} from '../lib/supabase'

interface AuthState {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    authModalOpen: boolean;

    setSession: (session: Session | null) => void;
    openAuthModal: () => void;
    closeAuthModal: () => void;
    signInWithMagicLink: (email: string) => Promise<{ error: string | null }>;
    verifyOtp: (email: string, token: string) => Promise<boolean>
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    session: null,
    isLoading: true,
    authModalOpen: false,

    setSession: (session) =>
        set({session, user: session?.user ?? null, isLoading: false}),

    openAuthModal: () => set({authModalOpen: true}),
    closeAuthModal: () => set({authModalOpen: false}),

    signInWithMagicLink: async (email) => {
        const {error} = await supabase.auth.signInWithOtp({
            email,
            options: {emailRedirectTo: window.location.origin + '/listings'},
        });
        return {error: error?.message ?? null};
    },

    verifyOtp: async (email: string, token: string): Promise<boolean> => {
        try {
            const {data, error} = await supabase.auth.verifyOtp({
                email,
                token,
                type: 'email',
            })

            if (error) {
                console.error('Error verifying OTP:', error)
                return false
            }

            if (data.session) {
                set({session: data.session, user: data.session.user, isLoading: false});
                return true
            }
            return false
        } catch (error) {
            console.error('Error verifying OTP:', error)
            return false
        }
    },

    signInWithGoogle: async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {redirectTo: window.location.origin + '/listings'},
        });
    },

    signOut: async () => {
        await supabase.auth.signOut();
        set({user: null, session: null});
    },
}));