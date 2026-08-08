import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-16 pb-20 flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/manus-storage/hero-background_ee8acdf2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-slate-700/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="inline-block">
            <div className="pulse-ring">
              <img
                src="/jahanvi.jpeg"
                alt="Jahanvi Pulani"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-2xl object-cover float"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4">
            Jahanvi Pulani
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-2">
            B.Tech Computer Science Student
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Turning ideas into intelligent solutions through technology, innovation, and creative problem-solving
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border-2 border-teal-500"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-700 hover:text-teal-600 transition-colors p-2 hover:bg-white/20 rounded-full"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
