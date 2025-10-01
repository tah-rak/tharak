import React from 'react';
import { Code2, Cloud, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: portfolioData.skills.languages.concat(portfolioData.skills.frameworks),
      color: "blue"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: portfolioData.skills.cloud,
      color: "purple"
    },
    {
      title: "Databases",
      icon: Database,
      skills: portfolioData.skills.databases,
      color: "green"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: portfolioData.skills.tools,
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      border: "border-blue-200",
      tagBg: "bg-blue-100",
      tagText: "text-blue-700",
      tagHover: "hover:bg-blue-200"
    },
    purple: {
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      border: "border-purple-200",
      tagBg: "bg-purple-100",
      tagText: "text-purple-700",
      tagHover: "hover:bg-purple-200"
    },
    green: {
      bg: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-200",
      tagBg: "bg-green-100",
      tagText: "text-green-700",
      tagHover: "hover:bg-green-200"
    },
    orange: {
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      border: "border-orange-200",
      tagBg: "bg-orange-100",
      tagText: "text-orange-700",
      tagHover: "hover:bg-orange-200"
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable, innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const IconComponent = category.icon;
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 ${colors.iconBg} rounded-lg`}>
                    <IconComponent className={`w-6 h-6 ${colors.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-2 ${colors.tagBg} ${colors.tagText} rounded-lg text-sm font-medium ${colors.tagHover} transition-colors cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Machine Learning", "Deep Learning", "Natural Language Processing", 
                "Computer Vision", "MLOps", "Data Engineering", "Research & Development",
                "Statistical Analysis", "Predictive Modeling", "Algorithm Optimization"
              ].map((expertise, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;