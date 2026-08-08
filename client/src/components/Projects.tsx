import { ProjectFilter } from './ProjectFilter';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-slate-700 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 text-lg">Showcasing my work in technology and innovation</p>
        </div>

        <ProjectFilter />
      </div>
    </section>
  );
}
