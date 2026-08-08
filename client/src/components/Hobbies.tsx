import { Heart, BookOpen, Plane } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const hobbies = [
  { id: 1, name: 'Travelling', icon: Plane, description: 'Exploring new places and cultures', details: 'I love discovering new destinations, experiencing different cultures, and meeting people from around the world. Travel broadens my perspective and fuels my creativity.' },
  { id: 2, name: 'Reading', icon: BookOpen, description: 'Diving into books and knowledge', details: 'From tech blogs to fiction, I enjoy reading to expand my knowledge and imagination. Books are my escape and my source of inspiration.' },
];

export default function Hobbies() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { ref: containerRef, isVisible } = useIntersectionObserver();

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hobbies & Interests</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">What I love doing outside of coding</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            const isExpanded = expandedId === hobby.id;

            return (
              <div
                key={hobby.id}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : hobby.id)}
                  className="w-full text-left"
                >
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-slate-200 group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-gradient-to-br from-teal-500 to-slate-600 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                          {hobby.name}
                        </h3>
                        <p className="text-slate-600 text-lg">
                          {hobby.description}
                        </p>
                      </div>
                      <div className={`text-teal-500 transition-transform duration-300 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-slate-600 leading-relaxed">
                          {hobby.details}
                        </p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-slate-50 rounded-2xl p-8 border border-teal-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <div className="flex gap-4">
            <Heart className="text-teal-500 flex-shrink-0" size={28} />
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Why These Hobbies?</h4>
              <p className="text-slate-700">
                Travelling broadens my perspective and exposes me to different cultures and ideas, which fuels my creativity in problem-solving. Reading keeps me informed about the latest trends, technologies, and diverse viewpoints that inspire my work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
