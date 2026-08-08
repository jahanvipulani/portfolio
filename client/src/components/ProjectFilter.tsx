import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Parking System',
    description: 'An intelligent parking management system that uses sensors and real-time data to help drivers find available parking spaces quickly. Reduces traffic congestion, fuel waste, and parking stress through mobile app integration.',
    technologies: ['IoT', 'Arduino', 'Mobile App', 'Real-time Data'],
    highlights: ['Sensor Integration', 'Real-time Updates', 'User-friendly Interface'],
    category: 'IoT',
    githubUrl: 'https://github.com/jahanvipulani',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and TypeScript. Features smooth navigation, interactive elements, and a clean design that showcases projects and skills effectively.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    highlights: ['Smooth Navigation', 'Mobile Responsive', 'Modern UI'],
    category: 'Web',
    githubUrl: 'https://github.com/jahanvipulani',
    demoUrl: 'https://jahanvipulani.github.io',
  },
  {
    id: 3,
    title: 'Serenity Journal',
    description: 'A digital mood and experience journal application that allows users to log daily entries, record their feelings, document life events, and add personal remarks. Helps track mental well-being and emotional patterns over time.',
    technologies: ['Web App', 'Database', 'User Authentication', 'Data Analytics'],
    highlights: ['Mood Tracking', 'Data Insights', 'Privacy-focused'],
    category: 'Web',
    githubUrl: 'https://github.com/jahanvipulani',
    demoUrl: 'https://serenity-journal-gamma.vercel.app/',
  },
];

export function ProjectFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              (selectedCategory === null && category === 'All') || selectedCategory === category
                ? 'bg-teal-500 text-white shadow-lg'
                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-200">
              {/* Project Header with Gradient */}
              <div className="h-32 bg-gradient-to-br from-teal-500 via-teal-400 to-slate-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Key Features
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {project.highlights.map(highlight => (
                      <li key={highlight} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  ) : (
                    <button disabled className="flex-1 px-4 py-2 bg-teal-200 text-teal-400 font-medium rounded-lg flex items-center justify-center gap-2 text-sm cursor-not-allowed">
                      <Github size={16} />
                      Code
                    </button>
                  )}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  ) : (
                    <button disabled className="flex-1 px-4 py-2 bg-slate-100 text-slate-400 font-medium rounded-lg flex items-center justify-center gap-2 text-sm cursor-not-allowed">
                      <ExternalLink size={16} />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
