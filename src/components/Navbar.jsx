import React, { useState } from 'react';
import logo from '../assets/ottbangla_logo.png';
import { companyInfo } from '../data/ottData';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, setSelectedSpeciality }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'হোম' },
    { id: 'about', label: 'আমাদের সম্বন্ধে জানুন' },
    { 
      id: 'services', 
      label: 'আমাদের বিশেষত্ব',
      hasDropdown: true,
      items: [
        { id: 'distribution', label: 'ডিজিটাল কনটেন্ট ডিস্ট্রিবিউশন' },
        { id: 'ai', label: 'স্বয়ংক্রিয় বুদ্ধিমত্তা (AI)' },
        { id: 'marketing', label: 'ডিজিটাল মার্কেটিং' },
        { id: 'gaming', label: 'গেমিং, ব্লকচেইন এবং ই-কমার্স' },
        { id: 'saas', label: 'ওটিটি বাংলার – SaaS Model' }
      ]
    },
    { id: 'contact', label: 'যোগাযোগ করুন' }
  ];

  const handleNavClick = (pageId, specId = null) => {
    setCurrentPage(pageId);
    if (specId && setSelectedSpeciality) {
      setSelectedSpeciality(specId);
    }
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a10]/95 backdrop-blur-md border-b border-red-900/30 shadow-2xl">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-red-950 via-[#140b12] to-red-950 text-slate-300 py-1.5 px-4 text-xs font-medium border-b border-red-800/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-red-400">
              <Phone size={13} />
              <a href={`tel:${companyInfo.phone}`} className="hover:underline font-bold text-white">{companyInfo.phone}</a>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Mail size={13} className="text-red-400" />
              <a href={`mailto:${companyInfo.email}`} className="hover:underline text-slate-200">{companyInfo.email}</a>
            </span>
          </div>
          <span className="text-[11px] font-semibold text-amber-400 hidden sm:block">
            🎬 বাংলা কনটেন্ট স্ট্রিমিং ও প্রফেশনাল ওটিটি সলিউশন
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-950 p-0.5 shadow-lg shadow-red-600/20 group-hover:scale-105 transition">
              <div className="w-full h-full bg-[#0a0a10] rounded-[14px] flex items-center justify-center p-1 border border-red-500/30">
                <img src={logo} alt="OTT Bangla BD" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div>
              <span className="font-heading font-black text-xl text-white tracking-tight group-hover:text-red-500 transition">
                OTT <span className="text-red-600">BANGLA</span> BD
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block -mt-1">
                ডিজিটাল কনটেন্ট ডিস্ট্রিবিউশন
              </span>
            </div>
          </div>

          {/* Desktop Navigation Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.id} className="relative group">
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                        currentPage === 'services'
                          ? 'bg-red-600/20 text-red-400 border border-red-500/40'
                          : 'text-slate-300 hover:text-white hover:bg-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className="group-hover:rotate-180 transition duration-300" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-64 bg-[#12121c] border border-red-900/40 rounded-2xl shadow-2xl p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-200 z-50 space-y-1">
                      {item.items.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick('services', sub.id)}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-red-600/20 hover:border-red-500/30 border border-transparent transition"
                        >
                          • {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    isActive
                      ? 'bg-red-600/20 text-red-400 border border-red-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-black px-5 py-2.5 rounded-xl text-xs transition shadow-lg shadow-red-600/25 flex items-center gap-2"
            >
              <Sparkles size={14} />
              <span>যোগাযোগ করুন</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-red-900/40 text-red-400"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101018] border-b border-red-900/40 px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.id} className="space-y-1">
                  <div 
                    onClick={() => handleNavClick('services')}
                    className="px-4 py-2 text-xs font-black text-red-400 uppercase tracking-wider cursor-pointer"
                  >
                    {item.label}
                  </div>
                  {item.items.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => handleNavClick('services', sub.id)}
                      className="w-full text-left pl-6 pr-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-900"
                    >
                      • {sub.label}
                    </button>
                  ))}
                </div>
              );
            }

            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-bold text-xs transition ${
                  isActive
                    ? 'bg-red-600 text-white'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-xl text-xs text-center flex items-center justify-center gap-2"
            >
              যোগাযোগ করুন <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
