import React from 'react';
import { companyInfo, coreSpecialities } from '../data/ottData';
import { 
  Tv, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Heart, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Share2
} from 'lucide-react';
import logo from '../assets/ottbangla_logo.png';

export default function Footer({ setCurrentPage, setSelectedSpeciality }) {
  const handleNav = (pageId, specId = null) => {
    setCurrentPage(pageId);
    if (specId) {
      setSelectedSpeciality(specId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-300 border-t border-red-900/40 relative overflow-hidden">
      {/* Glow ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => handleNav('home')}
            >
              <img 
                src={logo} 
                alt={companyInfo.nameEng} 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyInfo.name} হলো বাংলাদেশের শীর্ষস্থানীয় ওয়েব ও মোবাইল ভিত্তিক স্মার্ট ওটিটি স্ট্রিমিং এবং ডিজিটাল কনটেন্ট ডিস্ট্রিবিউশন প্ল্যাটফর্ম।
            </p>
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700/50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700/50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700/50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Linkedin"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-700/50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Specialities */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2 border-b border-red-900/40 pb-2">
              <Zap className="w-4 h-4 text-red-500" />
              আমাদের বিশেষত্বসমূহ
            </h3>
            <ul className="space-y-2.5 text-sm">
              {coreSpecialities.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNav('services', item.id)}
                    className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group text-left w-full"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-red-500 transition-transform group-hover:translate-x-1" />
                    <span>{item.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2 border-b border-red-900/40 pb-2">
              <Globe className="w-4 h-4 text-red-500" />
              দ্রুত নেভিগেশন
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 transition-transform group-hover:translate-x-1" />
                  হোম পেজ (Home)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 transition-transform group-hover:translate-x-1" />
                  আমাদের সম্বন্ধে (About Us)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 transition-transform group-hover:translate-x-1" />
                  সকল সার্ভিসসমূহ (Services)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-red-400 transition-colors flex items-center gap-2 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 transition-transform group-hover:translate-x-1" />
                  যোগাযোগ করুন (Contact Us)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Address & Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 flex items-center gap-2 border-b border-red-900/40 pb-2">
              <MapPin className="w-4 h-4 text-red-500" />
              অফিস ঠিকানা ও যোগাযোগ
            </h3>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  {companyInfo.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-slate-300 hover:text-red-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyInfo.nameEng}. সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-2">
            <span>নির্মিত</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>বাংলার ওটিটি ও ডিজিটাল স্ট্রিমিং বিপ্লবের জন্য।</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
