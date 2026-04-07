// src/components/property/PropertyInquiryForm.tsx
// Sidebar inquiry form — submits to POST /api/inquiries
// Additional services are selected from the services section and included in submission

import React, {useState} from 'react';

interface PropertyInquiryFormProps {
    propertyName: string;
    propertySlug: string;
    selectedServices: string[];  // passed from parent when services are clicked
    rentalTypes: string[];
    startingEventRate: number | null;
}

interface FormState {
    name: string;
    email: string;
    phone: string;
    eventType: string;
    checkIn: string;
    checkOut: string;
    guestNumber: string;
    budget: string;
    message: string;
}

const EMPTY_FORM: FormState = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    checkIn: '',
    checkOut: '',
    guestNumber: '',
    budget: '',
    message: '',
};

export function PropertyInquiryForm({
                                        propertyName,
                                        propertySlug,
                                        selectedServices,
                                        rentalTypes,
                                        startingEventRate,
                                    }: PropertyInquiryFormProps) {
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const set = (field: keyof FormState) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setForm(prev => ({...prev, [field]: e.target.value}));

    //const url = 'localhost:3000/api/inquiries';
    //`${import.meta.env.PUBLIC_WORKER_URL}/api/inquiries`

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        console.log('Form submitted:', form);

        try {
            const res = await fetch(
                `${import.meta.env.PUBLIC_WORKER_URL}/api/inquiries`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        ...form,
                        propertyName,
                        propertySlug,
                        additionalServices: selectedServices,
                    }),
                }
            );

            if (!res.ok) throw new Error('Submission failed');
            setStatus('success');
            setForm(EMPTY_FORM);
        } catch (err) {
            setStatus('error');
            setErrorMsg('Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <div className="inquiry-form inquiry-form--success">
                <div className="inquiry-form__success-icon">✓</div>
                <h3>Inquiry sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button className="inquiry-form__reset" onClick={() => setStatus('idle')}>
                    Send another
                </button>
            </div>
        );
    }

    return (
        <div className="inquiry-form">
            <div className="inquiry-form__header">
                <h3 className="inquiry-form__title">{propertyName}</h3>
                {startingEventRate && (
                    <p className="inquiry-form__rate">
                        From <strong>${startingEventRate.toLocaleString()}</strong>
                    </p>
                )}
            </div>

            <form onSubmit={handleSubmit} className="inquiry-form__fields">

                {/* Name row */}
                <div className="inquiry-form__row">
                    <div className="inquiry-form__field">
                        <label>Name*</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={set('name')}
                            required
                        />
                    </div>
                    <div className="inquiry-form__field">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={set('email')}
                            required
                        />
                    </div>
                </div>

                {/* Event Type */}
                <div className="inquiry-form__field">
                    <label>Event Type</label>
                    <select value={form.eventType} onChange={set('eventType')} required>
                        <option value="">Select type</option>
                        {rentalTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Date row */}
                <div className="inquiry-form__row">
                    <div className="inquiry-form__field">
                        <label>Start Date</label>
                        <input
                            type="date"
                            value={form.checkIn}
                            onChange={set('checkIn')}
                        />
                    </div>
                    <div className="inquiry-form__field">
                        <label>End date</label>
                        <input
                            type="date"
                            placeholder="dd/mm/yy"
                            value={form.checkOut}
                            onChange={set('checkOut')}
                        />
                    </div>


                    <div className="inquiry-form__field">
                        <label>Guests</label>
                        <input
                            type="number"
                            placeholder="# of guests"
                            min={1}
                            value={form.guestNumber}
                            onChange={set('guestNumber')}
                        />
                    </div>
                    {/* Budget */}
                    <div className="inquiry-form__field">
                        <label>Budget</label>
                        <input
                            type="text"
                            placeholder="Your budget"
                            value={form.budget}
                            onChange={set('budget')}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="inquiry-form__field">
                    <label>Message</label>
                    <textarea
                        rows={3}
                        placeholder="Tell us about your event..."
                        value={form.message}
                        onChange={set('message')}
                    />
                </div>

                {/* Selected additional services — read-only display */}
                {selectedServices.length > 0 && (
                    <div className="inquiry-form__services">
                        <label>Additional Services Added</label>
                        <div className="inquiry-form__services-list">
                            {selectedServices.map(s => (
                                <span key={s} className="inquiry-form__service-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                )}

                {errorMsg && <p className="inquiry-form__error">{errorMsg}</p>}

                <button
                    type="submit"
                    className="inquiry-form__submit"
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Sending...' : 'Inquire Now'}
                </button>

            </form>
        </div>
    );
}