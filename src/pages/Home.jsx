import React from 'react';
import { companyInfo, coreSpecialities } from '../data/ottData';
import { 
  Tv, 
  Cpu, 
  TrendingUp, 
  Gamepad2, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Smartphone,
  Monitor,
  Laptop
} from 'lucide-react';

const iconMap = {
  Tv: Tv,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Gamepad2: Gamepad2,
  Cloud: Cloud
};

export default function Home({ setCurrentPage, setSelectedSpeciality }) {
  const handleSpecialityClick = (specId) => {
    setSelectedSpeciality(specId);
    setCurrentPage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-bangla">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black pt-28 pb-16">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-800/50 text-red-400 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-red-950/40">
            <Sparkles className="w-4 h-4 text-red-400" />
            <span>{companyInfo.name}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto mb-6">
            ডিজিটাল কনটেন্ট ডিস্ট্রিবিউশন ও <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-amber-400">ওটিটি সমাধান</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            ওটিটি বাংলা বিশ্বজুড়ে বাংলা কনটেন্ট নির্মাতাদের নিজস্ব প্ল্যাটফর্মে উচ্চমানের স্ট্রিমিং ও ডিস্ট্রিবিউশন নিশ্চিত করে।
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <button
              onClick={() => {
                setCurrentPage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-base shadow-xl shadow-red-900/40 hover:shadow-red-700/50 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>আমাদের সকল সার্ভিস</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-red-500/50 font-bold text-base transition-all duration-300 flex items-center gap-3"
            >
              <span>যোগাযোগ করুন</span>
            </button>
          </div>

        </div>
      </section>

      {/* 5 Core Specialities Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-red-500 text-sm font-bold tracking-widest uppercase mb-2">আমাদের মূল সেবা</h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              ওটিটি বাংলার ৫টি প্রধান বিশেষত্ব
            </h3>
            <p className="text-slate-400 text-base leading-relaxed">
              আমরা ডিজিটাল মিডিয়া এবং স্ট্রিমিং ইন্ডাস্ট্রিতে প্রযুক্তির সমন্বয়ে সেরা সমাধান প্রদান করছি।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSpecialities.map((item) => {
              const IconComp = iconMap[item.icon] || Tv;
              return (
                <div 
                  key={item.id}
                  onClick={() => handleSpecialityClick(item.id)}
                  className="group bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-red-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/30 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-red-950/80 border border-red-800/60 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-md shadow-red-950/50">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-red-400 border border-slate-700">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.features.slice(0, 2).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-red-500 group-hover:text-red-400">
                    <span>বিস্তারিত জানুন</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}

            {/* B2B Contact Box */}
            <div className="bg-gradient-to-br from-red-950/70 via-slate-900 to-slate-950 p-8 rounded-2xl border border-red-800/50 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Cloud className="w-32 h-32 text-red-500" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white mb-4">
                  কাস্টম ওটিটি সলিউশন
                </span>
                <h4 className="text-2xl font-extrabold mb-3">আপনার নিজের ব্র্যান্ডেড OTT অ্যাপ চান?</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  আমাদের প্রস্তুতকৃত SaaS মডেলের মাধ্যমে স্মার্ট টিভি, অ্যান্ড্রয়েড এবং আইওএস অ্যাপস মাত্র কয়েক দিনে লাইভ করুন।
                </p>
              </div>
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-red-950/60"
              >
                এখনই প্রস্তাবনা নিন
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Multi-Device Support Section */}
      <section className="py-20 bg-slate-900/60 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="px-4 py-1.5 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800/60 inline-block">
                মাল্টি-ডিভাইস স্ট্রিমিং
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                সব ধরণের স্মার্ট ডিভাইসে নিরবচ্ছিন্ন স্ট্রিমিং অভিজ্ঞতা
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                আমাদের অ্যাডভান্সড এনকোডিং টেকনোলজি এবং সিডিএন আর্কিটেকচার যেকোনো ইন্টারনেট স্পিডে সেরা কোয়ালিটি ভিডিও নিশ্চিত করে।
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-red-950 text-red-500 border border-red-800/40">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">স্মার্ট টিভি (Smart TV Apps)</h4>
                    <p className="text-xs text-slate-400">Android TV, Apple TV, Amazon Fire TV, Samsung Tizen OS, LG WebOS সাপোর্ট।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-red-950 text-red-500 border border-red-800/40">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">মোবাইল অ্যাপস (Android & iOS)</h4>
                    <p className="text-xs text-slate-400">অফলাইন ডাউনলোড, কাস্টম ওয়াচলিস্ট ও ফাস্ট লোডিং প্লেয়ার।</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-red-950 text-red-500 border border-red-800/40">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">ওয়েব প্লেয়ার (Web Portal)</h4>
                    <p className="text-xs text-slate-400">সকল আধুনিক ওয়েব ব্রাউজারে HTML5 DRM সাপোর্ট ব্যাকড প্লেব্যাক।</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Overview Box */}
            <div className="relative">
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-black p-8 border border-slate-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">OTT BANGLA PLATFORM</span>
                </div>

                <div className="space-y-6">
                  <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm">গ্লোবাল ডিস্ট্রিবিউশন পাইপলাইন</p>
                      <p className="text-xs text-slate-400">কম ল্যাটেন্সিতে স্ট্রিমিং টেকনোলজি</p>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-green-950 text-green-400 border border-green-800/50 text-xs font-semibold">
                      সক্রিয়
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                      <p className="text-slate-400 text-xs">ভিডিও এনকোডিং</p>
                      <p className="text-white font-bold text-lg mt-1">H.265 / AV1</p>
                    </div>
                    <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                      <p className="text-slate-400 text-xs">সিকিউরিটি</p>
                      <p className="text-white font-bold text-lg mt-1">DRM Protection</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-red-950 via-slate-950 to-red-950 border-t border-red-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            আপনার কন্টেন্ট বা ওটিটি সার্ভিস নিয়ে কথা বলুন
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-8">
            আমাদের টিমের সাথে কথা বলুন এবং জেনে নিন কীভাবে ওটিটি বাংলা আপনার ডিজিটাল ডিস্ট্রিবিউশন ও স্ট্রিমিংকে সহজ করবে।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-xl shadow-red-950/60 transition-all duration-300"
            >
              আজই আমাদের সাথে যোগাযোগ করুন
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
