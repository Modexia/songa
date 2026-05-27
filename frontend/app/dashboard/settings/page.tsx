'use client';

import { useState } from 'react';
import { User, Bell, Shield, Globe, ChevronRight, Check } from 'lucide-react';

const sections = [
  { id: 'profile', icon: User, label: 'Personal Information', color: 'bg-orange-50 text-[#FF6B35]' },
  { id: 'notifications', icon: Bell, label: 'Notifications', color: 'bg-blue-50 text-blue-500' },
  { id: 'security', icon: Shield, label: 'Security', color: 'bg-green-50 text-green-500' },
  { id: 'preferences', icon: Globe, label: 'Preferences', color: 'bg-purple-50 text-purple-500' },
];

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
  const [notifications, setNotifications] = useState({
    email: true, sms: false, push: true, weekly: true,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-black text-[#0A0F1E]">Settings</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your account and preferences</p>
      </div>

      {/* Personal Information */}
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
        <div className="space-y-4">
          {[
            { label: 'Full Name', type: 'text', value: 'Jan Kowalski' },
            { label: 'Email Address', type: 'email', value: 'jan@example.com' },
            { label: 'Phone Number', type: 'tel', value: '+48 123 456 789' },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{field.label}</label>
              <input
                type={field.type}
                defaultValue={field.value}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium"
              />
            </div>
          ))}
          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${saved ? 'bg-green-500 text-white' : 'bg-[#FF6B35] hover:bg-[#e85d2a] text-white hover:shadow-lg hover:shadow-orange-500/25'}`}
          >
            {saved ? <><Check size={16} /> Saved!</> : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
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
              <Toggle
                checked={notifications[item.key]}
                onChange={(v) => setNotifications({ ...notifications, [item.key]: v })}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
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
              <ChevronRight size={18} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
            <Globe size={18} className="text-purple-500" />
          </div>
          <div>
            <h2 className="font-black text-[#0A0F1E]">Preferences</h2>
            <p className="text-xs text-gray-400">Language, currency and region</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { label: 'Language', options: ['English', 'Polski', 'Українська'], defaultIndex: 1 },
            { label: 'Currency', options: ['PLN (złoty)', 'EUR (Euro)', 'USD (Dollar)'], defaultIndex: 0 },
          ].map((field) => (
            <div key={field.label}>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{field.label}</label>
              <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-[#0A0F1E] focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all text-sm font-medium appearance-none cursor-pointer">
                {field.options.map((opt, i) => (
                  <option key={opt} selected={i === field.defaultIndex}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
