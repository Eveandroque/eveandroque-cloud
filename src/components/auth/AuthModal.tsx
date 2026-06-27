import React, {useState} from 'react';
import {useAuthStore} from '../../stores/authStore';
import './AuthModal.css';

export function AuthModal() {
    const {authModalOpen, closeAuthModal, signInWithMagicLink, signInWithGoogle, verifyOtp} = useAuthStore();
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [sent, setSent] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);

    if (!authModalOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;
        setIsSubmitting(true);
        setError(null);
        const result = await signInWithMagicLink(email.trim());
        setIsSubmitting(false);
        if (result.error) setError(result.error);
        else setSent(true);
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otp.trim()) return;
        setIsVerifying(true);
        setError(null);
        const success = await verifyOtp(email.trim(), otp.trim());
        setIsVerifying(false);
        if (!success) {
            setError('Invalid or expired code. Please try again.');
        } else {
            handleClose();
        }
    };

    const handleClose = () => {
        closeAuthModal();
        setTimeout(() => {
            setEmail('');
            setSent(false);
            setError(null);
        }, 200);
    };

    return (
        <>
            <div className="auth-backdrop" onClick={handleClose}/>
            <div className="auth-modal" role="dialog" aria-modal="true">
                <div className="auth-modal__header">
                    <div className="auth_modal__titlewrap">
                        <div className="auth-modal__logo">
                            <HeartIcon/>
                        </div>
                        {/*<div>*/}
                        {/*    <h2 className="auth-modal__title">Save your favourite properties</h2>*/}
                        {/*    <p className="auth-modal__subtitle">We'll send a one-time code to your email. <br/>No*/}
                        {/*        password needed.</p>*/}
                        {/*</div>*/}
                    </div>
                    <button className="auth-modal__close" onClick={handleClose} aria-label="Close">
                        <CloseIcon/>
                    </button>
                </div>
                <div className="auth-modal__body">
                    {sent ? (
                        <div className="auth-modal__success">
                            <div className="auth-modal__success-icon">✉️</div>
                            <h3>Check your email</h3>
                            <p style={{marginBottom: '20px'}}>Magic link sent to <strong>{email}</strong>. Click it to
                                sign in.</p>
                            <form onSubmit={handleVerifyOtp}>
                                <input
                                    id="verify-otp"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="\d*"
                                    className="auth-modal__input"
                                    placeholder="123456"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    autoFocus
                                    required
                                />
                                {error && <p className="auth-modal__error">{error}</p>}
                                <button type="submit" className="auth-modal__submit"
                                        disabled={isVerifying || !otp.trim()}>
                                    {isVerifying ? 'Verifying…' : 'Verify code'}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <div className="auth-modal__content">
                                <div>
                                    <h2 className="auth-modal__title">Save your favourite properties</h2>
                                    <p className="auth-modal__subtitle">We'll send a one-time code to your email. <br/>No
                                        password needed.</p>
                                </div>
                                {/*<button className="auth-modal__google" onClick={signInWithGoogle}>*/}
                                {/*    <GoogleIcon/> Continue with Google*/}
                                {/*</button>*/}
                                {/*<div className="auth-modal__divider"><span>or</span></div>*/}
                                <form onSubmit={handleSubmit}>
                                    <label className="auth-modal__label" htmlFor="auth-email">Email address</label>
                                    <input
                                        id="auth-email"
                                        type="email"
                                        className="auth-modal__input"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                        required
                                    />
                                    {error && <p className="auth-modal__error">{error}</p>}
                                    <button type="submit" className="auth-modal__submit"
                                            disabled={isSubmitting || !email.trim()}>
                                        {isSubmitting ? 'Sending…' : 'Send code'}
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>

        </>
    );
}

const CloseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const HeartIcon = () => (
    <svg
        className="heart-btn__icon"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill='currentColor'
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    </svg>
);

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
            d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
            fill="#4285F4"/>
        <path
            d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
            fill="#34A853"/>
        <path
            d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
            fill="#FBBC05"/>
        <path
            d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
            fill="#EA4335"/>
    </svg>
);