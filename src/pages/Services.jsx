import React from 'react';
import { coreSpecialities } from '../data/ottData';
import { 
  Tv, 
  Cpu, 
  TrendingUp, 
  Gamepad2, 
  Cloud, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Zap,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Tv: Tv,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Gamepad2: Gamepad2,
  Cloud: Cloud
};

export default function Services({ selectedSpeciality, setSelectedSpeciality, setCurrentPage }) {
  const activeSpec = coreSpecialities.find(s => s.id === selectedSpeciality) || coreSpecialities[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-bangla pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800/60 inline-block mb-4">
            আমাদের সেবাসমূহ
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            ওটিটি বাংলা - ৫টি বিশেষত্ব
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            স্মার্ট ভিডিও স্ট্রিমিং, আর্টিফিশিয়াল ইন্টেলিজেন্স, ডিজিটাল মার্কেটিং, Web3 ইনোভেশন এবং SaaS মডেলে সেরা ওটিটি টেকনোলজি সলিউশন।
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Navigation Tabs for 5 Specialities */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {coreSpecialities.map((item) => {
            const IconComp = iconMap[item.icon] || Tv;
            const isSelected = item.id === activeSpec.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedSpeciality(item.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-950/60'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Speciality Spotlight Showcase */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-red-950 text-red-400 border border-red-800/60 inline-block mb-4">
                {activeSpec.badge}
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {activeSpec.title}
              </h2>
              <p className="text-red-400 text-xs sm:text-sm font-mono mb-6">
                {activeSpec.titleEng}
              </p>

              <p className="text-slate-300 text-base leading-relaxed mb-8">
                {activeSpec.fullDesc}
              </p>

              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-500" />
                মূল সুবিধাসমূহ:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {activeSpec.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-xl shadow-red-950/60 transition-all duration-300 flex items-center gap-3"
              >
                <span>এই সার্ভিসটি নেওয়ার জন্য কথা বলুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Visual Box */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-red-950 border border-red-800 flex items-center justify-center text-red-500 mb-6 shadow-xl shadow-red-950/80">
                {React.createElement(iconMap[activeSpec.icon] || Tv, { className: 'w-10 h-10' })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{activeSpec.titleEng}</h3>
              <p className="text-xs text-slate-400 max-w-sm mb-6 leading-relaxed">
                উচ্চমানের প্রযুক্তি এবং বিশ্বস্ত পারফরম্যান্সের সাথে আপনার কন্টেন্ট বা ওটিটি ব্যবসাকে নিয়ে যান পরবর্তী ধাপে।
              </p>
              <div className="w-full pt-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
                <span>সার্ভিস টাইপ: ওটিটি সলিউশন</span>
                <span>স্ট্যাটাস: সক্রিয়</span>
              </div>
            </div>

          </div>
        </div>

        {/* List of All 5 Services Card Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl font-extrabold text-white mb-6 border-b border-slate-800 pb-3">
            সকল বিশেষত্বের ওভারভিউ
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreSpecialities.map((item) => {
              const IconComp = iconMap[item.icon] || Tv;
              return (
                <div 
                  key={item.id}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    item.id === activeSpec.id 
                      ? 'bg-slate-900 border-red-600 shadow-lg shadow-red-950/30' 
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-950 text-red-500 border border-red-800/40 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base leading-tight">{item.title}</h4>
                      <p className="text-xs text-red-400 font-mono">{item.titleEng}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>

                  <button
                    onClick={() => {
                      setSelectedSpeciality(item.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1"
                  >
                    <span>ডিটেইল দেখুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
