import React, { useState } from 'react';
import { companyInfo } from '../data/ottData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building,
  MessageSquare,
  Globe
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'ডিজিটাল ডিস্ট্রিবিউশন ও ওটিটি পার্টনারশিপ',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@ottsol.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `OTT Bangla BD Website Message from ${formData.name}`,
          ...formData
        })
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে! আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'ডিজিটাল ডিস্ট্রিবিউশন ও ওটিটি পার্টনারশিপ',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'দুঃখিত, বার্তা পাঠাতে সমস্যা হয়েছে। অনুগ্রহ করে সরাসরি ফোন বা ইমেইলে যোগাযোগ করুন।'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-bangla pt-24 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800/60 inline-block mb-4">
            যোগাযোগ করুন
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
            আমাদের সাথে যুক্ত হন
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            আপনার কনটেন্ট ডিস্ট্রিবিউশন, অ্যাপ ডেভেলপমেন্ট বা ওটিটি পার্টনারশিপের জন্য যেকোনো প্রশ্ন পাঠাতে নিচের ফর্মটি ব্যবহার করুন।
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Direct Contact Details */}
          <div className="space-y-6">
            
            {/* Address Card */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-600/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-950 text-red-500 border border-red-800/50 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">প্রধান কার্যালয় ঠিকানা</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                {companyInfo.address}
              </p>
              <p className="text-xs text-red-400 font-mono">
                Rupnagar, Mirpur, Dhaka - 1216, Bangladesh
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-600/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-950 text-red-500 border border-red-800/50 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ফোন / হোয়াটসঅ্যাপ</h3>
              <p className="text-slate-300 text-sm mb-1">
                <a href={`tel:${companyInfo.phone}`} className="hover:text-red-400 transition-colors font-bold text-base">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="text-xs text-slate-400">সাপ্তাহিক ৭ দিনই সেবা পাওয়া যাবে</p>
            </div>

            {/* Email Card */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-red-600/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-red-950 text-red-500 border border-red-800/50 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">অফিসিয়াল ইমেইল</h3>
              <p className="text-slate-300 text-sm mb-1">
                <a href={`mailto:${companyInfo.email}`} className="hover:text-red-400 transition-colors font-bold">
                  {companyInfo.email}
                </a>
              </p>
              <p className="text-xs text-slate-400">২৪ ঘণ্টার মধ্যে উত্তর দেওয়া হবে</p>
            </div>

            {/* Hours Card */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">অফিস সময়সূচী</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                সোম - শনিবার: সকাল ১০:০০ টা - সন্ধ্যা ৭:০০ টা<br/>
                রবিবার: সাধারণ অনলাইন সাপোর্ট
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-red-500" />
                মেসেজ পাঠান
              </h2>
              <p className="text-slate-400 text-sm mb-8">
                আপনার তথ্য জমা দিন, আমরা সরাসরি আপনার সাথে যোগাযোগ করব।
              </p>

              {status.submitted && (
                <div className="mb-8 p-5 rounded-xl bg-green-950/80 border border-green-700 text-green-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">সফলতা!</p>
                    <p className="text-xs text-green-300 mt-1">{status.message}</p>
                  </div>
                </div>
              )}

              {status.error && (
                <div className="mb-8 p-5 rounded-xl bg-red-950/80 border border-red-700 text-red-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm">ত্রুটি</p>
                    <p className="text-xs text-red-300 mt-1">{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="যেমন: তানভীর আহমেদ"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      ফোন নম্বর <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="যেমন: 01700000000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      ইমেইল ঠিকানা <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="আপনার ইমেইল"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      বিষয়
                    </label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all"
                    >
                      <option value="ডিজিটাল ডিস্ট্রিবিউশন ও ওটিটি পার্টনারশিপ">ডিজিটাল কনটেন্ট ডিস্ট্রিবিউশন</option>
                      <option value="স্বয়ংক্রিয় বুদ্ধিমত্তা (AI) সমাধান">স্বয়ংক্রিয় বুদ্ধিমত্তা (AI) সলিউশন</option>
                      <option value="ডিজিটাল মার্কেটিং ও প্রমোশন">ডিজিটাল মার্কেটিং ও প্রমোশন</option>
                      <option value="গেমিং ও Web3 ব্লকচেইন">গেমিং ও Web3 ব্লকচেইন</option>
                      <option value="ওটিটি বাংলার SaaS মডেল">ওটিটি বাংলার SaaS মডেল</option>
                      <option value="অন্যান্য জিজ্ঞাসা">অন্যান্য জিজ্ঞাসা</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    আপনার বার্তার বিবরণ <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার কনটেন্ট বা ওটিটি প্রজেক্ট সম্পর্কে বিস্তারিত লিখুন..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-base shadow-xl shadow-red-950/60 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status.submitting ? (
                    <span>মেসেজ পাঠানো হচ্ছে...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>মেসেজ জমা দিন</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
