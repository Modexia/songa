import { Button } from '../components/ui/Button';
import { ArrowDownLeft, ArrowUpRight, Banknote, CreditCard } from 'lucide-react';

const cashlessTransactions = [
    { id: 1, date: 'Feb 12, 2026', description: 'Uber card payout', amount: '+420.00', type: 'in' },
    { id: 2, date: 'Feb 11, 2026', description: 'Bolt app tip', amount: '+85.50', type: 'in' },
    { id: 3, date: 'Feb 10, 2026', description: 'Glovo card delivery', amount: '+156.00', type: 'in' },
    { id: 4, date: 'Feb 9, 2026', description: 'Uber card payout', amount: '+320.00', type: 'in' },
    { id: 5, date: 'Feb 8, 2026', description: 'Bolt app tip', amount: '+95.00', type: 'in' },
];

export default function Wallet() {
    return (
        <div className="space-y-4 sm:space-y-6">
            {/* Wallet Header Section */}
            <div className="relative bg-gradient-to-r from-logisco-teal-dark to-logisco-teal rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-3xl bg-white/5"></div>
                <div className="flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="min-w-0">
                            <h1 className="text-2xl sm:text-3xl font-extrabold mb-1 sm:mb-2">Your Wallet</h1>
                            <p className="text-blue-100 text-sm sm:text-base md:text-lg">Manage your earnings and withdrawals</p>
                        </div>
                        <Button className="bg-logisco-orange hover:bg-orange-600 px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg backdrop-blur-sm w-full sm:w-auto shrink-0">
                            Withdraw
                        </Button>
                    </div>

                    {/* Balance Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium text-blue-100">Cashless Balance</h3>
                                <CreditCard className="w-5 h-5 text-logisco-orange shrink-0" />
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold">2,450.00 PLN</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-sm font-medium text-blue-100">Cash Balance</h3>
                                <Banknote className="w-5 h-5 text-logisco-orange shrink-0" />
                            </div>
                            <p className="text-2xl sm:text-3xl font-bold">1,320.00 PLN</p>
                        </div>
                    </div>

                    <p className="text-blue-200 text-sm">Next payout: Friday, Feb 21, 2026</p>
                </div>
            </div>

            {/* Latest Cashless Transactions */}
            <div className="bg-white dark:bg-black rounded-xl shadow-sm border dark:border-gray-800 p-4 sm:p-6 min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Latest Cashless Transactions</h2>
                <div className="space-y-0">
                    {cashlessTransactions.map((t) => (
                        <div
                            key={t.id}
                            className="flex items-center justify-between gap-3 py-3 sm:py-4 border-b dark:border-gray-800 last:border-0 min-w-0"
                        >
                            <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${t.type === 'in' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                    {t.type === 'in' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">{t.description}</p>
                                    <p className="text-xs text-gray-500">{t.date}</p>
                                </div>
                            </div>
                            <span className={`font-bold text-sm sm:text-base shrink-0 ${t.type === 'in' ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}`}>
                                {t.amount} PLN
                            </span>
                        </div>
                    ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                    View all transactions
                </Button>
            </div>
        </div>
    );
}
