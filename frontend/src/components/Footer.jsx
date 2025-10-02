import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">{portfolioData.personal.name}</h3>
              <p className="text-gray-400 leading-relaxed">
                Computer Science graduate student passionate about AI, machine learning, and creating 
                innovative solutions that make a difference.
              </p>
              <div className="flex space-x-4">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: 'About', id: 'about' },
                  { label: 'Skills', id: 'skills' },
                  { label: 'Publications', id: 'publications' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p>{portfolioData.personal.location}</p>
                <p>
                  <a 
                    href={`mailto:${portfolioData.personal.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </p>
                <p>
                  <a 
                    href={`tel:${portfolioData.personal.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </p>
              </div>
              <div className="bg-blue-600/10 border border-blue-600/20 rounded-lg p-4 mt-4">
                <p className="text-blue-300 text-sm">
                  💼 Currently seeking new opportunities in AI/ML and research roles.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>{portfolioData.personal.name}. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;