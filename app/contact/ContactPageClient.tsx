'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  MessageSquare,
  PartyPopper
} from 'lucide-react';

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const faqs = [
    {
      q: 'Do you use real fruits or fruit essences?',
      a: 'We use 100% real sun-ripened fruit pulps sourced directly from certified orchards (like Ratnagiri Alphonso mangoes and Mahabaleshwar strawberries). We never use synthetic fruit essences or artificial food colorings.'
    },
    {
      q: 'Are all IcyDelight products 100% vegetarian?',
      a: 'Yes, 100% of our dessert range is strictly vegetarian. We use pure dairy cream and natural plant-based pectin instead of animal gelatins.'
    },
    {
      q: 'Can I book IcyDelight live catering for weddings & birthdays?',
      a: 'Yes! We offer customized live waffle cone stations, gourmet sundae bars, and artisanal ice pop carts with dedicated attendants for private celebrations, corporate events, and weddings.'
    },
    {
      q: 'How do you guarantee cold-chain freshness during transport?',
      a: 'All our logistics vehicles and storage freezers are equipped with IoT temperature loggers that maintain an unbroken -18°C environment from our churning center directly to your local parlour.'
    },
    {
      q: 'What is the shelf life of IcyDelight tubs?',
      a: 'When stored continuously at -18°C or below, our ice creams retain peak flavor and texture for up to 9 months.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Corporate Headquarters</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            IcyDelight Foods Pvt. Ltd., 104 Creamery Avenue, Food Park Tech City, Mumbai 400050, India.
          </p>
        </div>

        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Toll-Free Helpline</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Customer Care: <a href="tel:+9118002094499" className="text-[#FF8A00] font-bold">1800-209-4499</a><br />
            Hours: 9:00 AM – 9:00 PM (Everyday)
          </p>
        </div>

        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Email Support</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            General: <a href="mailto:hello@icydelight.com" className="text-[#FF8A00] font-bold">hello@icydelight.com</a><br />
            Events: <a href="mailto:events@icydelight.com" className="text-[#FF8A00] font-bold">events@icydelight.com</a>
          </p>
        </div>
      </div>

      {/* Main Grid: Contact Form + FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-10 border border-orange-100 shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-16 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="text-2xl font-black text-[#14213D]">Message Sent!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you for reaching out. A sweet concierge from our team will respond within 12 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'General Question', message: '' });
                }}
                className="gradient-orange-btn px-6 py-3 rounded-full text-white text-xs font-bold shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-2xl font-black text-[#14213D]">Drop Us a Line</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Have a suggestion, bulk event order, or flavor request? We&apos;d love to hear from you.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Nair"
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Inquiry Topic</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-bold focus:outline-none focus:border-[#FF8A00]"
                >
                  <option value="General Question">General Inquiry</option>
                  <option value="Party & Wedding Catering">Party, Wedding & Live Catering</option>
                  <option value="Franchise Opportunity">Franchise & Parlour Partnership</option>
                  <option value="Feedback / Quality Concern">Product Feedback / Parlour Review</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our churners make your day sweeter?..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-orange-btn py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="lg:col-span-6 space-y-6">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-orange-100 shadow-xl space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#14213D]">Frequently Asked Questions</h3>
                <p className="text-xs text-gray-500">Quick answers about our ingredients, storage & ordering.</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-orange-100/90 overflow-hidden bg-[#FFF9F2]/50 transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-[#14213D] hover:text-[#FF8A00] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FF8A00]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-orange-100/40 pt-2 animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
