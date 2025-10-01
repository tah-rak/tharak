import React from 'react';
import { Trophy, Users, Award, Star } from 'lucide-react';
import { portfolioData } from '../mock';

const Achievements = () => {
  const getIcon = (index) => {
    const icons = [Trophy, Award, Star];
    const IconComponent = icons[index % icons.length];
    return IconComponent;
  };

  const getColorClasses = (index) => {
    const colors = [
      {
        bg: "bg-yellow-50",
        iconBg: "bg-yellow-100",
        iconColor: "text-yellow-600",
        border: "border-yellow-200"
      },
      {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100", 
        iconColor: "text-purple-600",
        border: "border-purple-200"
      },
      {
        bg: "bg-green-50",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        border: "border-green-200"
      }
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for leadership, innovation, and academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.achievements.map((achievement, index) => {
            const IconComponent = getIcon(index);
            const colors = getColorClasses(index);
            
            return (
              <div 
                key={achievement.id} 
                className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 ${colors.iconBg} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${colors.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-sm text-gray-600 border border-gray-200">
                    <Users className="w-4 h-4" />
                    <span>{achievement.organization}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership & Recognition</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="inline-flex p-3 bg-yellow-100 rounded-full mb-2">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <div className="text-gray-600">Hackathon Wins</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="inline-flex p-3 bg-purple-100 rounded-full mb-2">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-gray-600">Team Members Led</div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-2">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1</div>
                <div className="text-gray-600">Editorial Leadership Role</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Create Something Amazing Together</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Looking for someone who combines technical expertise with leadership experience? 
              I'd love to discuss how we can collaborate on your next project.
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;