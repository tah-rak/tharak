import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Publications', id: 'publications' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
          >
            {portfolioData.personal.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-all"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;