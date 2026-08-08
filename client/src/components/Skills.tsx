import { Code, Zap, Users } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const skillCategories = [
  {
    icon: Code,
    title: 'Technical Skills',
    skills: [
      'HTML & CSS',
      'JavaScript',
      'Python',
      'Git & GitHub',
      'Arduino Basics',
      'IoT Development',
      'Responsive Design',
    ],
  },
  {
    icon: Zap,
    title: 'Problem Solving',
    skills: [
      'Algorithm Design',
      'System Architecture',
      'Debugging',
      'Optimization',
      'Innovation',
    ],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: [
      'Communication',
      'Team Collaboration',
      'Project Management',
      'Presentation',
      'Adaptability',
    ],
  },
];

export default function Skills() {
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills &amp; Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">A diverse toolkit for modern development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-slate-200 group h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 bg-gradient-to-br from-teal-500 to-slate-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-teal-600 transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills as Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gradient-to-r from-teal-50 to-slate-50 border border-teal-200 text-teal-700 text-sm font-medium rounded-full hover:bg-teal-100 hover:border-teal-400 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Highlight with Animated Counters */}
        <div
          ref={statsRef}
          className="bg-gradient-to-r from-teal-500 to-slate-700 rounded-2xl shadow-xl p-8 md:p-12 text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              {statsVisible && <AnimatedCounter end={3} suffix="+" duration={1500} />}
              <p className="text-teal-100 mt-2">Major Projects</p>
            </div>
            <div>
              {statsVisible && <AnimatedCounter end={7} suffix="+" duration={1500} />}
              <p className="text-teal-100 mt-2">Technical Skills</p>
            </div>
            <div>
              {statsVisible && <AnimatedCounter end={100} suffix="%" duration={1500} />}
              <p className="text-teal-100 mt-2">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
