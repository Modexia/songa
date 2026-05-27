'use client';

import { useState } from 'react';
import { FileText, Plus, UploadCloud, CheckCircle, Clock, XCircle, Info } from 'lucide-react';
import Link from 'next/link';

const recentExpenses = [
  { id: 'INV-1092', vendor: 'Orlen S.A.', amount: '250.00 PLN', vat: '23%', date: 'Feb 10, 2026', status: 'Approved', icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50' },
  { id: 'INV-1091', vendor: 'BP Station', amount: '180.50 PLN', vat: '23%', date: 'Feb 8, 2026', status: 'Pending OCR', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-50' },
  { id: 'INV-1085', vendor: 'Auto Repair Pro', amount: '850.00 PLN', vat: '23%', date: 'Feb 2, 2026', status: 'Rejected', icon: XCircle, color: 'text-red-500', bg: 'bg-red-50' },
];

export default function ExpensesPage() {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="space-y-6 max-w-[1400px]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1E]">Expenses & OCR</h1>
          <p className="text-gray-500 text-sm mt-1">Upload fuel and maintenance invoices to reduce your taxable income.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/30 w-full sm:w-auto justify-center shrink-0">
          <UploadCloud size={18} />
          Scan Invoice (OCR)
        </button>
      </div>

      {/* Corporate Details Alert */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
          <Info size={24} className="text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[#0A0F1E] text-lg mb-2">Crucial Legal Rule</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-2xl">
            For the invoice to be tax-deductible, it <strong className="text-[#0A0F1E]">MUST be issued to Songa's corporate details</strong> (not your personal name). Please provide the following details to the cashier at the gas station:
          </p>
          <div className="bg-white rounded-xl p-4 border border-blue-100/50 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Company Name</p>
              <p className="font-bold text-[#0A0F1E]">Songa Partners Sp. z o.o.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">NIP (Tax ID)</p>
              <p className="font-bold text-[#0A0F1E]">PL 5213894021</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Address</p>
              <p className="font-bold text-[#0A0F1E]">ul. Złota 44, 00-120 Warszawa</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Zone */}
      <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#FF6B35]/50 transition-colors p-8 sm:p-12 text-center cursor-pointer group">
        <div className="w-16 h-16 bg-gray-50 rounded-2xl mx-auto flex items-center justify-center mb-4 group-hover:bg-orange-50 transition-colors">
          <UploadCloud size={28} className="text-gray-400 group-hover:text-[#FF6B35]" />
        </div>
        <h3 className="text-lg font-bold text-[#0A0F1E] mb-2">Drag & drop or click to upload</h3>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          Upload a clear photo of your Faktura VAT. Our OCR engine will automatically extract the NIP, amounts, and VAT rate.
        </p>
      </div>

      {/* Recent Expenses List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-black text-[#0A0F1E] text-lg mb-6">Recent Scans</h2>
        <div className="space-y-3">
          {recentExpenses.map((expense) => (
            <div key={expense.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow gap-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${expense.bg}`}>
                  <FileText className={expense.color} size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A0F1E]">{expense.vendor}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <span>{expense.id}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{expense.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1">
                <span className="font-black text-[#0A0F1E] text-lg">{expense.amount}</span>
                <div className="flex items-center gap-1.5">
                  <expense.icon size={14} className={expense.color} />
                  <span className={`text-xs font-bold ${expense.color}`}>{expense.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
