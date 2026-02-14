import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Wallet from './pages/Wallet';
import Settings from './pages/Settings';
import Invoices from './pages/Invoices';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Login />} />

                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="receipts" element={<Invoices />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="settlements" element={<div className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">Settlements module coming soon...</div>} />
                    <Route path="account" element={<div className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">Account settings coming soon...</div>} />
                    <Route path="notifications" element={<div className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">Notifications center coming soon...</div>} />
                    <Route path="faq" element={<div className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">FAQ and Help Center coming soon...</div>} />
                    <Route path="*" element={<div className="p-4 sm:p-6 text-gray-500 dark:text-gray-400 text-sm sm:text-base">Feature coming soon...</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
