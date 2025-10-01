import React from 'react';
import { BookOpen, ExternalLink, Calendar } from 'lucide-react';
import { portfolioData } from '../mock';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Research contributions in machine learning, AI, and computer security
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {portfolioData.publications.map((publication) => (
            <div key={publication.id} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {publication.title}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold mb-1">
                      {publication.conference || publication.journal}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {publication.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {publication.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-blue-300 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Publication Button */}
                  <div className="flex justify-end">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:shadow-lg transition-all transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read Publication
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Collaboration</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on research projects or discussing my publications? 
              I'm always open to academic discussions and potential research partnerships.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;