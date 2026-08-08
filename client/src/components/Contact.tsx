import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jahanvipulani@gmail.com',
    href: 'mailto:jahanvipulani@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9311217044',
    href: 'tel:+919311217044',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Jahanvi Pulani',
    href: 'https://www.linkedin.com/in/jahanvi-pulani-519292376?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Jahanvi Pulani',
    href: 'https://github.com/jahanvipulani',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { ref: formRef, isVisible: formVisible } = useIntersectionObserver();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">Let's connect and discuss opportunities</p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-slate-200 flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-teal-500 to-slate-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      {method.label}
                    </p>
                    <p className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                      {method.value}
                    </p>
                  </div>
                  <div className="text-teal-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <MessageSquare size={20} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form */}
        <div
          ref={formRef}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Me a Message</h3>
          
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-green-900">Message sent successfully!</p>
                <p className="text-sm text-green-700">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-semibold text-red-900">Error</p>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-slate-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-slate-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to collaborate?</h3>
          <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology and innovation, I'd love to hear from you. Let's create something amazing together!
          </p>
          <a
            href="mailto:jahanvipulani@gmail.com"
            className="inline-block px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
