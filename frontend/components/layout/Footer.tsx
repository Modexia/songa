import Link from 'next/link';
import { SongaLogo } from '@/components/ui/SongaLogo';
// Remove Twitter, Instagram, Linkedin from lucide-react
import { ArrowRight } from 'lucide-react';
// Import them from react-icons instead
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const footerLinks = {
  Platform: ['Features', 'Pricing', 'Integrations', 'FAQ'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'GDPR / RODO', 'Cookie Policy'],
};



export function Footer() {
  return (
    <footer className="bg-[#0A0F1E] relative overflow-hidden">
      {/* Decorative mesh background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(#FF6B35 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Teal glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#006072]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Newsletter CTA bar */}
        <div className="bg-gradient-to-r from-[#006072] to-[#004d5b] rounded-2xl p-5 sm:p-8 mb-14 border border-white/10 shadow-2xl">
          <div className="mb-4 text-center sm:text-left">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-1">Stay in the loop</h3>
            <p className="text-teal-200 text-sm">Get updates on new features and platform tips.</p>
          </div>
          <div className="flex gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 px-3 sm:px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#FF6B35] transition-colors"
            />
            <button className="shrink-0 px-4 sm:px-5 py-3 bg-[#FF6B35] hover:bg-[#e85d2a] text-white rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-orange-500/30 flex items-center gap-1.5 whitespace-nowrap">
              Subscribe <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand col */}
          <div className="col-span-2 sm:col-span-1">
            <SongaLogo theme="dark" iconSize={36} className="mb-4" />
            <p className="text-[#64748B] text-sm leading-relaxed">
              Songa helps drivers and couriers manage their gig income with clarity, compliance, and confidence.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6">
              
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#64748B] hover:text-[#FF6B35] transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-xs">
            © {new Date().getFullYear()} Songa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[#64748B] hover:text-white text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
