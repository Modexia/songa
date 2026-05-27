'use client';

import { useState } from 'react';
import { User, Bell, Shield, Globe, Check, FileText, Lock, PenTool, AlertCircle, Upload, HelpCircle } from 'lucide-react';

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${checked ? 'bg-[#FF6B35]' : 'bg-gray-200'}`}
    >
      <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({ email: true, sms: false, push: true, weekly: true });
  const [saved, setSaved] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [signatureName, setSignatureName] = useState('');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signatureName.trim()) return;
    setIsSigning(true);
    setTimeout(() => {
      setIsSigning(false);
      setIsSigned(true);
    }, 1500);
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'legal', label: 'Legal & Contracts', icon: FileText },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'faq', label: 'FAQ & Support', icon: HelpCircle },
    { id: 'security', label: 'Security', icon: Shield },
  ];

  return (
    <div className="space-y-6 max-w-4xl w-full">
      {/* Page header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1E]">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your account, contracts, and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 border-b border-gray-100">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'bg-[#0A0F1E] text-white'
                : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-[#0A0F1E]'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {/* PROFILE TAB */}
        {activeTab === 'profile' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <User size={18} className="text-[#FF6B35]" />
                </div>
                <div>
                  <h2 className="font-black text-[#0A0F1E]">Personal Information</h2>
                  <p className="text-xs text-gray-400">Update your profile details</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Full Legal Name', type: 'text', value: 'Jan Kowalski' },
                  { label: 'PESEL / Passport', type: 'text', value: '95031204567' },
                  { label: 'Email Address', type: 'email', value: 'jan@example.com' },
                  { label: 'Phone Number', type: 'tel', value: '+48 123 456 789' },
                  { label: 'Residential Address', type: 'text', value: 'ul. Marszałkowska 10/15, 00-062 Warszawa', fullWidth: true },
                  { label: 'NIP (Optional)', type: 'text', value: '', placeholder: 'Enter NIP if applicable' },
                ].map((field) => (
                  <div key={field.label} className={field.fullWidth ? 'sm:col-span-2' : ''}>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={handleSave}
                className={`flex items-center justify-center sm:w-auto w-full gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${saved ? 'bg-green-500 text-white' : 'bg-[#FF6B35] hover:bg-[#e85d2a] text-white hover:shadow-lg hover:shadow-orange-500/25'}`}
              >
                {saved ? <><Check size={16} /> Saved!</> : 'Save Changes'}
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-black text-[#0A0F1E]">Student Status (Under 26)</h3>
                  <p className="text-gray-500 text-sm mt-0.5">Activate for 0% PIT rate & ZUS exemption.</p>
                </div>
                <Toggle checked={isStudent} onChange={setIsStudent} />
              </div>
              {isStudent && (
                <div className="mt-4 p-4 bg-orange-50 border border-[#FF6B35]/30 rounded-xl flex items-start gap-3 animate-fade-in-up">
                  <AlertCircle className="text-[#FF6B35] shrink-0" size={18} mt={0.5} />
                  <div>
                    <p className="text-sm font-semibold text-[#FF6B35]">Upload Student ID (Legitymacja)</p>
                    <p className="text-xs text-[#FF6B35]/80 mt-1">Please upload a valid student ID card to apply these tax exemptions.</p>
                    <button className="mt-3 text-xs font-bold bg-white text-[#FF6B35] px-4 py-2 rounded-lg border border-[#FF6B35]/30 hover:bg-[#FF6B35] hover:text-white transition-colors">
                      Upload ID
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* LEGAL & CONTRACTS TAB */}
        {activeTab === 'legal' && (
          <div className="space-y-6 animate-fade-in">
            {/* Mandatory Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FileText size={18} className="text-blue-500" />
                </div>
                <div>
                  <h2 className="font-black text-[#0A0F1E]">Mandatory Documents</h2>
                  <p className="text-xs text-gray-400">Required for legal gig work</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Driving License', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50' },
                  { name: 'Taxi Driver Certificate', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50' },
                  { name: 'Criminal Record Check', status: 'Action Required', color: 'text-red-500', bg: 'bg-red-50' },
                  { name: 'Profile Photo', status: 'Verified', color: 'text-green-500', bg: 'bg-green-50' },
                ].map((doc) => (
                  <div key={doc.name} className="border border-gray-100 rounded-xl p-4 flex justify-between items-center bg-gray-50 hover:bg-white hover:border-[#FF6B35]/30 transition-colors">
                    <div>
                      <h3 className="font-bold text-[#0A0F1E] text-sm">{doc.name}</h3>
                      <span className={`inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${doc.bg} ${doc.color}`}>
                        {doc.status}
                      </span>
                    </div>
                    {doc.status === 'Action Required' && (
                      <button className="w-8 h-8 rounded-full bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors">
                        <Upload size={14} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Employment Contract (Review & Sign Mockup) */}
            <div className="bg-gradient-to-b from-gray-900 to-[#0A0F1E] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#006072]/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                    <Lock className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="font-black text-xl">Umowa Zlecenie (Mandate Contract)</h2>
                    <p className="text-sm text-white/50">Legally binding employment agreement</p>
                  </div>
                </div>

                {!isSigned ? (
                  <form onSubmit={handleSign} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 sm:p-6 mb-2">
                    <h3 className="font-bold text-white mb-3">Review & Sign Contract</h3>
                    <div className="text-sm text-white/70 space-y-3 mb-6 h-32 overflow-y-auto pr-2 custom-scrollbar">
                      <p>By signing this contract, you agree to the terms of employment with Songa Partners Sp. z o.o. as a billing partner.</p>
                      <p>Songa will process your earnings, calculate taxes (PIT) and ZUS contributions according to Polish law, and charge a flat administrative fee of 30 PLN per active settlement cycle.</p>
                      <p>You confirm that all personal details and uploaded documents are accurate and legally valid.</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Type your full name to sign digitally</label>
                        <input
                          type="text"
                          required
                          value={signatureName}
                          onChange={(e) => setSignatureName(e.target.value)}
                          placeholder="e.g. Jan Kowalski"
                          className="w-full bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6B35] transition-all font-medium"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSigning || !signatureName.trim()}
                        className="w-full flex items-center justify-center gap-2 bg-[#FF6B35] hover:bg-[#e85d2a] disabled:bg-white/10 disabled:text-white/30 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg"
                      >
                        {isSigning ? (
                          'Generating E-Signature...'
                        ) : (
                          <>
                            <PenTool size={18} />
                            Sign Contract
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/20 p-6 sm:p-8 text-center animate-fade-in-up">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/30">
                      <Check size={32} className="text-white font-bold" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">Contract Signed Successfully!</h3>
                    <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
                      Your Umowa Zlecenie is now active. Your digital signature has been securely recorded.
                    </p>
                    <button
                      type="button"
                      className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm border border-white/10 transition-all inline-flex items-center gap-2"
                    >
                      <FileText size={16} />
                      Download PDF Copy
                    </button>
                  </div>
                )}
                
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Lock size={12} />
                    <span>Secured by Autenti API Integration</span>
                  </div>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Bell size={18} className="text-blue-500" />
              </div>
              <div>
                <h2 className="font-black text-[#0A0F1E]">Notifications</h2>
                <p className="text-xs text-gray-400">Choose how you want to be notified</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { key: 'email' as const, label: 'Email notifications', desc: 'Receive updates via email' },
                { key: 'sms' as const, label: 'SMS notifications', desc: 'Text message alerts' },
                { key: 'push' as const, label: 'Push notifications', desc: 'Browser push notifications' },
                { key: 'weekly' as const, label: 'Weekly summary', desc: 'A digest of your week earnings' },
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div>
                    <p className="font-semibold text-[#0A0F1E] text-sm">{item.label}</p>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                  <Toggle checked={notifications[item.key]} onChange={(v) => setNotifications({ ...notifications, [item.key]: v })} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQ TAB */}
        {activeTab === 'faq' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
             <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <HelpCircle size={18} className="text-purple-500" />
              </div>
              <div>
                <h2 className="font-black text-[#0A0F1E]">FAQ & Support</h2>
                <p className="text-xs text-gray-400">Get help with your account</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { q: "How are taxes calculated?", a: "Taxes are automatically calculated based on your earnings and expenses, applying standard PIT rates and ZUS rules." },
                { q: "When do I get paid?", a: "Settlements are processed weekly, usually on Tuesdays. You can also use the Instant Cashout feature for immediate access to settled funds." },
                { q: "How do I upload a fuel receipt?", a: "Go to the Expenses tab and upload a clear photo of your Faktura VAT containing Songa's corporate details." },
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-gray-50">
                  <h4 className="font-bold text-[#0A0F1E] text-sm mb-2">{faq.q}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-bold text-[#0A0F1E] mb-2">Need more help?</p>
              <button className="bg-[#FF6B35] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#e85d2a] transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        )}

        {/* SECURITY TAB */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <Shield size={18} className="text-green-500" />
              </div>
              <div>
                <h2 className="font-black text-[#0A0F1E]">Security</h2>
                <p className="text-xs text-gray-400">Protect your account</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Change Password', desc: 'Update your current password', danger: false },
                { label: 'Enable 2-Factor Auth', desc: 'Add an extra layer of security', danger: false },
                { label: 'Delete Account', desc: 'Permanently remove your account', danger: true },
              ].map((action) => (
                <button
                  key={action.label}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    action.danger
                      ? 'border-red-100 bg-red-50 hover:bg-red-100 text-red-600'
                      : 'border-gray-100 bg-gray-50 hover:bg-gray-100 text-[#0A0F1E]'
                  }`}
                >
                  <div className="text-left">
                    <p className="font-semibold text-sm">{action.label}</p>
                    <p className={`text-xs ${action.danger ? 'text-red-400' : 'text-gray-400'}`}>{action.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
