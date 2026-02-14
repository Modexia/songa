import { Button } from '../components/ui/Button';
import { User, Bell, Shield, Globe } from 'lucide-react';

export default function Settings() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">Settings</h1>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
            </div>

            {/* Settings Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Personal Information */}
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <User className="w-5 h-5 text-logisco-orange mr-2 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Personal Information</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                            <input type="text" className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-base" defaultValue="Jan Kowalski" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input type="email" className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-base" defaultValue="jan@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                            <input type="tel" className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-base" defaultValue="+48 123 456 789" />
                        </div>
                        <Button className="w-full">Save Changes</Button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <Bell className="w-5 h-5 text-logisco-orange mr-2 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Notifications</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                        {[
                            { label: 'Email notifications', checked: true },
                            { label: 'SMS notifications', checked: false },
                            { label: 'Push notifications', checked: true },
                            { label: 'Weekly summary', checked: true }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                                <span className="text-sm text-gray-700 dark:text-gray-300">{item.label}</span>
                                <input type="checkbox" defaultChecked={item.checked} className="w-5 h-5 text-logisco-orange" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <Shield className="w-5 h-5 text-logisco-orange mr-2 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Security</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                        <Button variant="outline" className="w-full">Change Password</Button>
                        <Button variant="outline" className="w-full">Enable Two-Factor Authentication</Button>
                        <Button variant="outline" className="w-full text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/10">Delete Account</Button>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white dark:bg-black p-4 sm:p-6 rounded-xl shadow-sm border dark:border-gray-800">
                    <div className="flex items-center mb-3 sm:mb-4">
                        <Globe className="w-5 h-5 text-logisco-orange mr-2 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Preferences</h3>
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
                            <select className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-base">
                                <option>English</option>
                                <option selected>Polski</option>
                                <option>Українська</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label>
                            <select className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-base">
                                <option selected>PLN (złoty)</option>
                                <option>EUR (Euro)</option>
                                <option>USD (Dollar)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
