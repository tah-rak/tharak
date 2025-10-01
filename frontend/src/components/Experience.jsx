import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building impactful solutions through research, development, and innovation
          </p>
        </div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-blue-200 -z-10"></div>
              )}
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 ml-0 lg:ml-4">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                        <p className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Summary */}
        <div className="mt-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Career Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">4+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">70%</div>
                <div className="text-gray-600">Reduction in Inference Defects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">40%</div>
                <div className="text-gray-600">Improvement in Throughput</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;