import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Lightbulb, Target, Zap } from 'lucide-react';

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useIntersectionObserver();

  const highlights = [
    {
      icon: Lightbulb,
      title: 'Innovative Thinker',
      description: 'I approach problems creatively, seeking novel solutions through technology and design.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering quality results and continuous improvement in every project.',
    },
    {
      icon: Zap,
      title: 'Quick Learner',
      description: 'Passionate about mastering new technologies and staying ahead of industry trends.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
        </div>

        <div
          ref={contentRef}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 border border-slate-200"
        >
          <p className={`text-lg text-slate-700 leading-relaxed transition-all duration-700 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I'm a B.Tech Computer Science student passionate about turning ideas into intelligent solutions. From building smart IoT systems to crafting polished web experiences, I love tackling real-world problems with clean code and creative thinking. I'm a continuous learner who values collaboration, user-centered design, and making a meaningful impact through technology.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${300 + (index * 100)}ms` }}
              >
                <div className="bg-gradient-to-br from-teal-50 to-slate-50 rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-teal-500 to-slate-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
