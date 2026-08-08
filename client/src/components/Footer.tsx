import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-slate-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JP</span>
              </div>
              <span className="font-bold text-lg">Jahanvi Pulani</span>
            </div>
            <p className="text-slate-400 text-sm">
              B.Tech Computer Science Student | Tech Enthusiast | Problem Solver
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#home" className="hover:text-teal-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-teal-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jahanvi-pulani-519292376?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="https://github.com/jahanvipulani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <span className="text-sm font-bold">gh</span>
              </a>
              <a
                href="mailto:jahanvipulani@gmail.com"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
              >
                <span className="text-sm font-bold">✉</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Jahanvi Pulani. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              Made with <Heart size={16} className="text-teal-500" /> and passion
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
