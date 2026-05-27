import { CreditCard, ArrowRight, Check, MapPin, Zap } from 'lucide-react';

export default function FuelCardsPage() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1E]">Fuel Cards</h1>
        <p className="text-gray-500 text-sm mt-1">Get exclusive discounts at top gas stations and automate your expenses.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Active Cards or Application */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col items-center text-center">
          <div className="relative w-64 h-40 mb-8 mt-4 group perspective">
            {/* 3D Card Effect mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#006072] to-[#0A0F1E] rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-12 group-hover:-rotate-x-12 overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4">
                <CreditCard className="text-white/80 mb-2" size={24} />
                <p className="text-white/60 text-xs font-mono tracking-widest text-left">SONGA FLEET</p>
                <p className="text-white font-bold tracking-widest text-left mt-1">**** **** **** 1234</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-white font-black italic text-lg tracking-tighter">ORLEN</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-black text-[#0A0F1E] mb-3">Order Your Songa Fleet Card</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-sm">
            Stop collecting paper receipts. Pay for fuel with your Songa card and the expenses will automatically sync with your account for tax deduction.
          </p>

          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A0F1E] hover:bg-gray-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg">
            Apply Now - Free
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Benefits & Partners */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#FF6B35]/10 to-transparent rounded-2xl border border-[#FF6B35]/20 p-6">
            <h3 className="font-black text-[#0A0F1E] text-lg mb-4 flex items-center gap-2">
              <Zap className="text-[#FF6B35]" size={20} />
              Key Benefits
            </h3>
            <ul className="space-y-4">
              {[
                'Discount of 0.15 – 0.20 PLN per liter on premium fuels.',
                '10% off car washes and windshield fluid.',
                'Zero manual OCR scanning—invoices auto-generate to your Songa profile.',
                'Costs are automatically deducted from your wallet balance.',
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Check size={12} className="text-green-500 font-bold" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-black text-[#0A0F1E] text-lg mb-4">Partner Networks</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-white hover:border-red-500/30 transition-all cursor-pointer">
                <span className="font-black italic text-red-600 text-xl tracking-tighter mb-2">ORLEN</span>
                <p className="text-xs text-gray-500 font-medium">1,800+ Stations</p>
              </div>
              <div className="border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center bg-gray-50 hover:bg-white hover:border-green-500/30 transition-all cursor-pointer">
                <span className="font-black text-green-600 text-xl tracking-tighter mb-2">bp</span>
                <p className="text-xs text-gray-500 font-medium">500+ Stations</p>
              </div>
            </div>
            
            <button className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-bold text-gray-500 hover:text-[#FF6B35] transition-colors py-2">
              <MapPin size={14} />
              View Map of Supported Stations
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
