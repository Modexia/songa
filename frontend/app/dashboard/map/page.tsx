import { MapPin, TrendingUp, AlertTriangle, Search } from 'lucide-react';

export default function HeatmapsPage() {
  return (
    <div className="space-y-6 max-w-[1400px] h-[calc(100vh-120px)] flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A0F1E]">Real-Time Heatmaps</h1>
          <p className="text-gray-500 text-sm mt-1">Discover active surge pricing and multipliers across all platforms.</p>
        </div>
        
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 w-full sm:w-64 shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input type="text" placeholder="Search zone (e.g. Śródmieście)" className="bg-transparent text-sm outline-none text-[#0A0F1E] w-full" />
        </div>
      </div>

      <div className="flex-1 bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden flex flex-col">
        {/* Map placeholder - In a real app, integrate Leaflet, Google Maps, or Mapbox here */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('https://maps.wikimedia.org/osm-intl/13/4652/2676.png')] opacity-80 mix-blend-multiply bg-cover bg-center" />
          
          {/* Simulated heat zones */}
          <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-red-500/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-orange-500/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Floating Overlay Controls */}
        <div className="relative z-10 p-4 sm:p-6 flex-1 flex flex-col pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            {['All', 'Uber', 'Bolt', 'Glovo'].map((filter, i) => (
              <button 
                key={filter}
                className={`px-4 py-2 rounded-xl text-sm font-bold shadow-sm transition-colors ${i === 0 ? 'bg-[#0A0F1E] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4 pointer-events-auto">
            {/* Surge Alert Card */}
            <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 w-full sm:w-72">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={18} className="text-red-500" />
                <h3 className="font-bold text-[#0A0F1E]">High Demand Zone</h3>
              </div>
              <div className="flex justify-between items-center bg-red-50 rounded-xl p-3 border border-red-100 mb-2">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Uber</p>
                  <p className="font-bold text-[#0A0F1E] text-sm">Śródmieście</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-red-600">x2.5</p>
                  <p className="text-[10px] text-gray-500">Multiplier</p>
                </div>
              </div>
              <div className="flex justify-between items-center bg-orange-50 rounded-xl p-3 border border-orange-100">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Bolt</p>
                  <p className="font-bold text-[#0A0F1E] text-sm">Wola</p>
                </div>
                <div className="text-right">
                  <p className="font-black text-orange-600">x1.8</p>
                  <p className="text-[10px] text-gray-500">Multiplier</p>
                </div>
              </div>
            </div>

            {/* Trends Card */}
            <div className="bg-[#0A0F1E]/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-800 w-full sm:w-64">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp size={18} className="text-[#FF6B35]" />
                <h3 className="font-bold text-white">Upcoming Trends</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70 font-medium">17:00 - 19:00</span>
                    <span className="text-[#FF6B35] font-bold">Very High</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-red-500 w-[90%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white/70 font-medium">19:00 - 21:00</span>
                    <span className="text-orange-400 font-bold">Moderate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-300 to-orange-400 w-[60%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
