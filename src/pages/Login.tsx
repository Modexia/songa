import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        rodoAccepted: false,
        mandateAccepted: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement actual auth logic
        console.log('Login attempt:', formData);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-6 sm:space-y-8 bg-white dark:bg-black p-5 sm:p-8 rounded-lg shadow-lg border dark:border-gray-800 mx-auto">
                <div>
                    <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                        Sign in to Songa
                    </h2>
                   
                </div>
                <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="full-name" className="sr-only">Full Name</label>
                            <Input
                                id="full-name"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                placeholder="Full Name (for new accounts)"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <Input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label htmlFor="phone" className="sr-only">Phone Number (+48)</label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                placeholder="Phone Number (+48...)"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex items-start">
                            <input
                                id="rodo"
                                name="rodo"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                                checked={formData.rodoAccepted}
                                onChange={(e) => setFormData({ ...formData, rodoAccepted: e.target.checked })}
                            />
                            <label htmlFor="rodo" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                I accept the <a href="#" className="text-brand-orange">GDPR/RODO</a> regulations.
                            </label>
                        </div>
                        <div className="flex items-start">
                            <input
                                id="mandate"
                                name="mandate"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                                checked={formData.mandateAccepted}
                                onChange={(e) => setFormData({ ...formData, mandateAccepted: e.target.checked })}
                            />
                            <label htmlFor="mandate" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                I agree to the <a href="#" className="text-brand-orange">Mandate Contract</a> terms.
                            </label>
                        </div>
                    </div>

                    <div>
                        <Button type="submit" className="w-full">
                            Sign in / Join
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
