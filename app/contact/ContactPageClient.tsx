'use client';

import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  User, 
  Phone, 
  Mail, 
  HelpCircle, 
  ChevronDown,
  MessageCircle
} from 'lucide-react';

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const messageLines = [
      '🍨 *New Inquiry - IcyDelight Ice Cream*',
      '',
      `👤 *Name:* ${formData.name}`,
      `📧 *Email:* ${formData.email}`,
      `📞 *Phone:* ${formData.phone || 'Not provided'}`,
      `🏷️ *Topic:* ${formData.subject}`,
      '',
      `💬 *Message:*`,
      formData.message
    ];

    const encodedMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/919923784543?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const faqs = [
    {
      q: 'Do you use real fruits or fruit essences?',
      a: 'We use 100% real sun-ripened fruit pulps sourced directly from certified orchards (like Ratnagiri Alphonso mangoes and Mahabaleshwar strawberries). We never use synthetic fruit essences or artificial food colorings.'
    },
    {
      q: 'Are all IcyDelight products 100% vegetarian?',
      a: 'Yes, 100% of our dessert range is strictly vegetarian. We use pure dairy cream and natural plant-based ingredients.'
    },
    {
      q: 'Can I book IcyDelight catering for weddings & birthdays?',
      a: 'Yes! We offer customized live waffle cone counters, gourmet sundae bars, and artisanal ice pop carts with dedicated attendants for private celebrations, corporate events, and weddings.'
    },
    {
      q: 'How do you guarantee cold-chain freshness during transport?',
      a: 'All our logistics vehicles and storage freezers maintain an unbroken -18°C environment from our churn center directly to your local parlour or doorstep.'
    },
    {
      q: 'What is the shelf life of IcyDelight treats?',
      a: 'When stored continuously at -18°C or below, our ice creams retain peak flavor and fresh texture for up to 9 months.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {/* Contact Person */}
        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF8A00] flex items-center justify-center">
            <User className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Contact Person</h3>
          <p className="text-base font-bold text-[#FF8A00]">Ansar Maner</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            IcyDelight Artisanal Ice Creams & Gourmet Treats
          </p>
        </div>

        {/* Phone / Mobile */}
        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Call / WhatsApp</h3>
          <div className="space-y-1 text-sm text-gray-700 font-bold">
            <div>
              <a 
                href="https://wa.me/919923784543?text=Hello%20Ansar,%20I%20would%20like%20to%20know%20more%20about%20IcyDelight%20Ice%20Creams" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>+91 99237 84543</span>
              </a>
            </div>
            <div>
              <a 
                href="tel:+919970533423" 
                className="hover:text-[#FF8A00] transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 99705 33423</span>
              </a>
            </div>
          </div>
          <p className="text-[11px] text-gray-400">Available: Mon – Sun (9:00 AM – 9:00 PM)</p>
        </div>

        {/* Email */}
        <div className="bg-white rounded-[28px] p-7 border border-orange-100 shadow-sm space-y-3 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
            <Mail className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-black text-[#14213D]">Email Support</h3>
          <div className="text-sm font-bold text-gray-700">
            <a href="mailto:ansaricecream30@gmail.com" className="hover:text-[#FF8A00] transition-colors break-all block">
              ansaricecream30@gmail.com
            </a>
          </div>
          <p className="text-[11px] text-gray-400">We reply to inquiries within 12 hours</p>
        </div>
      </div>

      {/* Main Grid: Contact Form + FAQ Accordion */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-6 bg-white rounded-[32px] p-6 sm:p-10 border border-orange-100 shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
              </div>
              <h3 className="text-2xl font-black text-[#14213D]">WhatsApp Opened!</h3>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Your message has been formatted and opened in WhatsApp with **Ansar Maner (+91 99237 84543)**. Simply press send in WhatsApp!
              </p>
              
              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919923784543?text=${encodeURIComponent(
                    `🍨 *New Inquiry - IcyDelight*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Topic:* ${formData.subject}\n*Message:* ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Re-open WhatsApp</span>
                </a>
                
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-[#14213D] text-xs font-bold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold mb-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct WhatsApp Connect</span>
                </div>
                <h3 className="text-2xl font-black text-[#14213D]">Drop Us a Line</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Have a suggestion, party catering request, or flavor query? Send us a direct message.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
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
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99237 84543"
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
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Party & Wedding Catering">Party, Wedding & Live Catering</option>
                  <option value="Bulk Product Order">Bulk Product Orders</option>
                  <option value="Product Feedback">Product Feedback / Review</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we make your occasion or day sweeter?..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F2] border border-orange-100 text-[#14213D] text-sm font-medium focus:outline-none focus:border-[#FF8A00]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-orange-btn py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? (
                  <span>Opening WhatsApp...</span>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message via WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
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
