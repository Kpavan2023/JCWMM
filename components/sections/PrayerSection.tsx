'use client';

import { useState } from 'react';
import { Heart, Lock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionReveal from '@/components/shared/SectionReveal';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  request: string;
}

export default function PrayerSection() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    request: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear validation message when user starts typing
    if (validationError) {
      setValidationError('');
    }

    // Clear database error when user edits the form
    if (status === 'error') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setValidationError('');
    setStatus('idle');

    // Validate required fields
    if (!form.name.trim() && !form.request.trim()) {
      setValidationError(
        'Please enter your full name and prayer request.'
      );
      return;
    }

    if (!form.name.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!form.request.trim()) {
      setValidationError('Please enter your prayer request.');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('prayer_requests').insert([
        {
          name: form.name.trim(),
          email: form.email.trim() || null,
          phone: form.phone.trim() || null,
          request: form.request.trim(),
        },
      ]);

      if (error) {
        console.error('Prayer request submission error:', error);
        setStatus('error');
        return;
      }

      setStatus('success');

      setForm({
        name: '',
        email: '',
        phone: '',
        request: '',
      });
    } catch (error) {
      console.error('Unexpected prayer request error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="prayer"
      className="py-24 bg-royal-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 stars-bg opacity-20" />

      <div
        className="absolute bottom-0 left-0 right-0 h-64 opacity-20"
        style={{
          background:
            'linear-gradient(0deg, rgba(210, 197, 79, 0.77) 0%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left content */}
          <SectionReveal delay={100}>
            <div className="text-white">

              <span className="inline-block px-4 py-1.5 rounded-full jcwmm-yellow-heading text-xs font-semibold font-inter uppercase tracking-wider border border-gold-800/40 mb-6">
                Prayer
              </span>

              <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-6 leading-tight">
                We Believe in the{' '}
                <span className="jcwmm-yellow-heading">
                  Power of Prayer
                </span>
              </h2>

              <p className="font-inter text-royal-300 text-lg leading-relaxed mb-8">
                Share your heart with us. Our dedicated prayer team will pray
                over every request with love, faith, and confidentiality.
              </p>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <Lock className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />

                <p className="font-inter text-royal-300 text-sm italic">
                  "Every prayer request is treated with love, care, and
                  confidentiality. Your personal information will never be
                  shared."
                </p>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  {
                    label: 'Submitted Requests',
                    value: '2,500+',
                  },
                  {
                    label: 'Prayer Warriors',
                    value: '50+',
                  },
                  {
                    label: 'Testimonies of Answered Prayers',
                    value: '800+',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <div className="font-poppins font-bold text-2xl text-gold-400">
                        {stat.value}
                      </div>

                      <div className="font-inter text-royal-400 text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl blue-gradient flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>

                <h3 className="font-poppins font-bold text-xl text-royal-900">
                  Submit Prayer Request
                </h3>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center py-12 text-center">

                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>

                  <h4 className="font-poppins font-bold text-xl text-royal-900 mb-2">
                    Prayer Received!
                  </h4>

                  <p className="font-inter text-gray-600 mb-6">
                    Our prayer team will intercede on your behalf. God bless
                    you!
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setValidationError('');
                    }}
                    className="px-6 py-2.5 rounded-xl blue-gradient text-white font-poppins font-semibold text-sm"
                  >
                    Submit Another
                  </button>

                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-inter font-medium text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent bg-gray-50 transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-inter font-medium text-gray-700 mb-1.5"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"  
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent bg-gray-50 transition"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-inter font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 ... (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent bg-gray-50 transition"
                    />
                  </div>

                  {/* Prayer Request */}
                  <div>
                    <label
                      htmlFor="request"
                      className="block text-sm font-inter font-medium text-gray-700 mb-1.5"
                    >
                      Prayer Request{' '}
                      <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="request"
                      name="request"
                      required
                      rows={5}
                      value={form.request}
                      onChange={handleChange}
                      placeholder="Share what you'd like us to pray for..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-inter focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-transparent bg-gray-50 resize-none transition"
                    />
                  </div>

                  {/* Validation Error */}
                  {validationError && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 font-inter"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />

                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Submission Error */}
                  {status === 'error' && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 font-inter"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />

                      <span>
                        We couldn't submit your prayer request. Please try
                        again.
                      </span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl blue-gradient text-white font-poppins font-semibold text-base hover:opacity-90 transition-all hover:scale-[1.01] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        Submit Prayer Request
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  );
}