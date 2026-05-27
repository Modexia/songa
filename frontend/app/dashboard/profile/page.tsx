'use client';

import { useState } from 'react';
import { User, FileText, Upload, CheckCircle, AlertCircle, PenTool, Lock } from 'lucide-react';

export default function ProfilePage() {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1E]">Legal & Profile</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your mandatory compliance documents and contracts.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Personal Data & Student Status */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <User className="text-blue-500" size={20} />
              </div>
              <h2 className="font-black text-[#0A0F1E] text-lg">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Legal Name</label>
                <input type="text" defaultValue="Jan Kowalski" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">PESEL / Passport</label>
                <input type="text" defaultValue="95031204567" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Residential Address</label>
                <input type="text" defaultValue="ul. Marszałkowska 10/15, 00-062 Warszawa" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">NIP (Optional)</label>
                <input type="text" placeholder="Enter NIP if applicable" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" />
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-xl border border-gray-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-[#0A0F1E] text-sm">Student Status (Under 26)</h3>
                <p className="text-gray-500 text-xs mt-0.5">0% PIT rate & ZUS exemption.</p>
              </div>
              <button 
                onClick={() => setIsStudent(!isStudent)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isStudent ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isStudent ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            {isStudent && (
              <div className="mt-3 p-4 bg-orange-50 border border-[#FF6B35]/30 rounded-xl flex items-start gap-3">
                <AlertCircle className="text-[#FF6B35] shrink-0" size={18} mt={0.5} />
                <div>
                  <p className="text-sm font-semibold text-[#FF6B35]">Upload Student ID (Legitymacja)</p>
                  <p className="text-xs text-[#FF6B35]/80 mt-1">Please upload a valid student ID card to apply these tax exemptions.</p>
                  <button className="mt-2 text-xs font-bold bg-white text-[#FF6B35] px-3 py-1.5 rounded-lg border border-[#FF6B35]/30 hover:bg-[#FF6B35] hover:text-white transition-colors">
                    Upload ID
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <FileText className="text-[#FF6B35]" size={20} />
              </div>
              <h2 className="font-black text-[#0A0F1E] text-lg">Mandatory Documents</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Driving License', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50', icon: CheckCircle },
                { name: 'Taxi Driver Certificate', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50', icon: CheckCircle },
                { name: 'Criminal Record Check', status: 'Action Required', color: 'text-red-500', bg: 'bg-red-50', icon: AlertCircle },
                { name: 'Profile Photo', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50', icon: CheckCircle },
              ].map((doc) => (
                <div key={doc.name} className="border border-gray-100 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-[#0A0F1E] text-sm">{doc.name}</h3>
                    <doc.icon size={16} className={doc.color} />
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${doc.bg} ${doc.color}`}>
                      {doc.status}
                    </span>
                    {doc.status === 'Action Required' && (
                      <button className="text-xs font-bold text-[#FF6B35] hover:underline flex items-center gap-1">
                        <Upload size={12} /> Upload
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: E-Signing Contract */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-gray-900 to-[#0A0F1E] rounded-2xl p-6 text-white shadow-xl relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#006072]/30 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                  <Lock className="text-white" size={20} />
                </div>
                <div>
                  <h2 className="font-black text-lg">Umowa Zlecenie</h2>
                  <p className="text-xs text-white/50">Mandate Contract</p>
                </div>
              </div>
              
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                To activate your account and start receiving payouts, you must digitally sign the employment contract via Autenti API.
              </p>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60">Status</span>
                  <span className="font-bold text-orange-400">Awaiting Signature</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/60">Valid From</span>
                  <span className="font-bold">Today</span>
                </div>
              </div>
              
              <button className="w-full flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/20 group">
                <PenTool size={18} className="group-hover:rotate-12 transition-transform" />
                Sign with Autenti
              </button>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/40">
                <Lock size={12} />
                <span>Legally binding e-signature</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
