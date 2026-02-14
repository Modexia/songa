import { useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';

export default function Invoices() {
    const { pathname } = useLocation();
    const isInDashboard = pathname.startsWith('/dashboard');

    const content = (
        <div className="flex items-center justify-center min-h-[400px]">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Coming soon</p>
        </div>
    );

    if (isInDashboard) {
        return (
            <div className="flex flex-col min-h-full">
                {content}
            </div>
        );
    }

    return <Layout>{content}</Layout>;
}