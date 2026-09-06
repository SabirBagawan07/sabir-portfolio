import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MapPin, ExternalLink, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    setSubmitting(true);
    setFormStatus(null);

    try {
      // Real submission via Web3Forms API
      const accessKey = personal.web3formsKey || "YOUR_WEB3FORMS_ACCESS_KEY";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact Inquiry from ${formData.name}`,
          from_name: "Sabir Portfolio Website"
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully to Sabir. You will receive a response shortly.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback or setup notice if access key needs activation
        if (accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
          // Open mailto fallback directly or inform user
          const mailtoUrl = `mailto:${personal.socials.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
          window.location.href = mailtoUrl;

          setFormStatus({
            type: 'success',
            message: 'Your email application has been opened with your message ready to send directly to Sabir! (To enable background form delivery without opening your email app, enter your free Web3Forms key in portfolioData.js).'
          });
        } else {
          setFormStatus({
            type: 'error',
            message: result.message || 'Failed to send message. Please try again or email Sabir directly.'
          });
        }
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      
      // Automatic Mailto Fallback on network issues
      const mailtoUrl = `mailto:${personal.socials.email}?subject=${encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setFormStatus({
        type: 'success',
        message: 'Your default email client was launched to send your message directly to Sabir!'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDirectEmailClick = () => {
    const mailtoUrl = `mailto:${personal.socials.email}?subject=${encodeURIComponent('Inquiry regarding Data Analyst / Python opportunities')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            I’m currently looking for opportunities where I can apply my Python, SQL and data analytics skills, learn from experienced teams and contribute to real-world projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Contact Details
              </h3>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-850 hover:bg-slate-800 border border-slate-800 hover:border-teal-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors">
                      {personal.socials.email}
                    </div>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-850 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      sabir-bagawan-4b841b3b9
                    </div>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-dark-850 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">GitHub Projects</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                      github.com/SabirBagawan07
                    </div>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-dark-850 border border-slate-800">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-bold text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Send Me a Message
                </h3>
                <button
                  type="button"
                  onClick={handleDirectEmailClick}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1 bg-teal-500/10 px-3 py-1.5 rounded-lg border border-teal-500/20 transition-all"
                >
                  <span>Direct Email</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project, or opportunity..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm resize-none"
                  />
                </div>

                {/* Form Notification Message */}
                {formStatus && (
                  <div className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-3 ${
                    formStatus.type === 'success'
                      ? 'bg-teal-500/15 border border-teal-500/40 text-teal-300'
                      : 'bg-red-500/15 border border-red-500/40 text-red-300'
                  }`}>
                    {formStatus.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    )}
                    <span className="leading-relaxed">{formStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 shadow-lg shadow-teal-500/20 transition-all disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
