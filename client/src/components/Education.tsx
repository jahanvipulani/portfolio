import { GraduationCap, Award } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech – Computer Science & Engineering',
    institution: 'Currently Pursuing',
    year: '2025 – Present',
    result: 'In Progress',
    icon: GraduationCap,
    accent: 'from-teal-500 to-slate-600',
    badge: 'Ongoing',
    badgeColor: 'bg-teal-100 text-teal-700 border border-teal-300',
  },
  {
    id: 2,
    degree: 'Class XII (Senior Secondary)',
    institution: 'Shreeram Model School',
    year: '2025',
    result: '83%',
    icon: Award,
    accent: 'from-slate-500 to-slate-700',
    badge: '83%',
    badgeColor: 'bg-slate-100 text-slate-700 border border-slate-300',
  },
  {
    id: 3,
    degree: 'Class X (Secondary)',
    institution: 'Grand Columbus International School',
    year: '2021',
    result: '91%',
    icon: Award,
    accent: 'from-teal-600 to-teal-800',
    badge: '91%',
    badgeColor: 'bg-teal-100 text-teal-700 border border-teal-300',
  },
];

export default function Education() {
  const { ref: containerRef, isVisible } = useIntersectionObserver();

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">My academic journey</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-400 to-slate-400 transform md:-translate-x-px hidden md:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  } md:flex-row`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-teal-400 shadow-lg items-center justify-center z-10">
                    <Icon size={20} className="text-teal-600" />
                  </div>

                  {/* Card - alternating sides on md+ */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:ml-0 md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 overflow-hidden group">
                      {/* Colored top bar */}
                      <div className={`h-2 bg-gradient-to-r ${item.accent}`} />
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="p-3 bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl border border-teal-100 md:hidden">
                            <Icon size={22} className="text-teal-600" />
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.badgeColor} ml-auto`}>
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors leading-snug">
                          {item.degree}
                        </h3>
                        <p className="text-teal-600 font-semibold text-sm mb-1">{item.institution}</p>
                        <p className="text-slate-400 text-xs">{item.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
