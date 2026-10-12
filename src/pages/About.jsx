import React from 'react';
import { companyInfo, coreSpecialities } from '../data/ottData';
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Globe, 
  Award,
  MapPin,
  Phone,
  Mail,
  Users
} from 'lucide-react';

export default function About({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-bangla pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800/60 inline-block mb-4">
            আমাদের সম্বন্ধে জানুন
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            ওটিটি বাংলা প্রাইভেট লিমিটেড
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            বাংলা ডিজিটাল বিনোদন ও স্ট্রিমিং জগতে এক নতুন দিগন্ত। বিশ্বজুড়ে বাংলা ভাষাভাষী দর্শকদের জন্য সেরা ভিডিও অভিজ্ঞতা ও ডিস্ট্রিবিউশন প্ল্যাটফর্ম।
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        
        {/* Grid Section 1: History & Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              আমাদের গল্প ও লক্ষ্য
            </h2>
            <p className="text-slate-300 leading-relaxed">
              <strong className="text-white font-semibold">ওটিটি বাংলা প্রাইভেট লিমিটেড</strong> হলো বাংলাদেশের ঢাকার মিরপুরে অবস্থিত একটি আধুনিক মিডিয়া টেকনোলজি এবং ডিজিটাল কন্টেন্ট স্ট্রিমিং প্রতিষ্ঠান।
            </p>
            <p className="text-slate-400 leading-relaxed">
              আমরা দেশীয় চলচ্চিত্র, ওয়েব সিরিজ, ড্রামা, মিউজিক এবং স্বতন্ত্র কনটেন্ট ক্রিয়েটরদের কাজকে ডিজিটাল রাইটস সিকিউরিটি ও উচ্চমানের প্রযুক্তির মাধ্যমে বৈশ্বিক মঞ্চে পৌঁছে দিয়ে থাকি।
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-3xl font-bold text-red-500 mb-1">100%</p>
                <p className="text-xs text-slate-400">নিরাপদ ডিস্ট্রিবিউশন</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-3xl font-bold text-red-500 mb-1">24/7</p>
                <p className="text-xs text-slate-400">প্রযুক্তিগত সহযোগিতা</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 border-b border-slate-800 pb-4">
              <Building2 className="w-6 h-6 text-red-500" />
              কোম্পানির অফিশিয়াল তথ্য
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400 text-xs">কোম্পানির নাম</p>
                <p className="text-white font-bold text-base mt-0.5">{companyInfo.name} ({companyInfo.nameEng})</p>
              </div>

              <div>
                <p className="text-slate-400 text-xs flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  প্রধান কার্যালয় (ঢাকা, বাংলাদেশ)
                </p>
                <p className="text-slate-200 mt-1 leading-relaxed">{companyInfo.address}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    ফোন / হোয়াটসঅ্যাপ
                  </p>
                  <p className="text-slate-200 font-semibold mt-0.5">{companyInfo.phone}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-red-500" />
                    অফিসিয়াল ইমেইল
                  </p>
                  <p className="text-slate-200 font-semibold mt-0.5">{companyInfo.email}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Grid Section 2: Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-red-600/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-950 text-red-500 border border-red-800/50 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">আমাদের মিশন (Mission)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              বিশ্বের সকল প্রান্তে ছড়িয়ে থাকা বাংলা ভাষাভাষী দর্শকদের কাছে উচ্চমানের কনটেন্ট পৌঁছে দেওয়া এবং দেশীয় ও আন্তর্জাতিক চলচ্চিত্র নির্মাতাদের ডিজিটাল প্ল্যাটফর্মে টেকসই ব্যবসায়িক মডেল তৈরি করতে সহায়তা করা।
            </p>
          </div>

          <div className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-red-600/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-red-950 text-red-500 border border-red-800/50 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">আমাদের ভিশন (Vision)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              প্রযুক্তির সর্বোচ্চ ব্যবহারে বাংলা ওটিটি ইন্ডাস্ট্রির এক নম্বর ওটিটি ইকোসিস্টেম এবং ডিজিটাল টেকনোলজি হাব হিসেবে নিজেদের প্রতিষ্ঠিত করা, যেখানে স্বয়ংক্রিয় এআই, ডিস্ট্রিবিউশন এবং SaaS মডেল যুক্ত থাকবে।
            </p>
          </div>

        </div>

        {/* Grid Section 3: Why Choose OTT Bangla */}
        <div className="bg-slate-900/40 rounded-3xl p-8 sm:p-12 border border-slate-800/80 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              কেন ওটিটি বাংলা আপনার প্রথম পছন্দ?
            </h2>
            <p className="text-slate-400 text-sm">
              আমরা আপনাকে প্রদান করি আধুনিক মিডিয়া প্রযুক্তির সেরা সুবিধা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <ShieldCheck className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">ডিজিটাল রাইটস (DRM)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                পাইরেসি মুক্ত উচ্চ নিরাপত্তার স্ট্রিমিং অবকাঠামো যা ভিডিও চুরি প্রতিরোধ করে।
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <Globe className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">গ্লোবাল সিডিএন নেটওয়ার্ক</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                আমেরিকা, ইউরোপ, এশিয়া জুড়ে লো-ল্যাটেন্সি প্লেব্যাক ও ফাস্ট বাফারিং সুবিধা।
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <Zap className="w-8 h-8 text-red-500 mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">এআই ভিত্তিক রিকমেন্ডেশন</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                দর্শকপ্রিয়তা অনুযায়ী স্বয়ংক্রিয় ভিডিও ক্যাটালগ ও রিকমেন্ডেশন সিস্টেম।
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-xl shadow-red-950/60 transition-all duration-300"
          >
            আমাদের টিমের সাথে যোগাযোগ করুন
          </button>
        </div>

      </div>
    </div>
  );
}
