import { FileText, Plus } from 'lucide-react';
import Link from 'next/link';

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-[#0A0F1E]">Invoices & Receipts</h1>
          <p className="text-gray-400 text-sm mt-1">Manage and view all your receipts</p>
        </div>
        <button className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/30">
          <Plus size={18} />
          Upload Receipt
        </button>
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#FF6B35]/20 to-[#006072]/20 flex items-center justify-center mb-6">
          <FileText size={36} className="text-[#FF6B35]" />
        </div>
        <h2 className="text-2xl font-black text-[#0A0F1E] mb-3">No Invoices Yet</h2>
        <p className="text-gray-400 text-base max-w-sm mb-8 leading-relaxed">
          Upload your first receipt or connect a platform to automatically import your earnings records.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/30">
            <Plus size={18} />
            Upload Receipt
          </button>
          <Link href="/dashboard">
            <button className="flex items-center gap-2 border-2 border-gray-100 text-gray-500 hover:border-[#FF6B35] hover:text-[#FF6B35] px-6 py-3 rounded-xl font-bold text-sm transition-all">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
