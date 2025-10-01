import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about leveraging technology to solve complex problems and drive innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a dedicated Computer Science graduate student at the University of South Florida, 
                with a passion for Machine Learning, Artificial Intelligence, and Data Science. My 
                academic journey has been complemented by hands-on research experience across multiple 
                domains including healthcare informatics, epidemiological modeling, and natural language processing.
              </p>
              <p>
                Throughout my career, I've had the privilege of working on cutting-edge projects that 
                bridge the gap between theoretical knowledge and practical applications. From developing 
                production-grade ML microservices to conducting research on LLM fine-tuning and evaluation, 
                I'm constantly exploring new ways to harness the power of AI for meaningful impact.
              </p>
              <p>
                When I'm not coding or researching, I enjoy leading teams, organizing events, and 
                contributing to the academic community through publications and open-source projects.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            
            {portfolioData.education.map((edu) => (
              <div key={edu.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="font-semibold">
                        GPA: {edu.gpa}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-blue-300 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;