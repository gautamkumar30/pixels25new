import React from 'react';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Technical Excellence",
      description: "Showcasing cutting-edge programming and development skills"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-600" />,
      title: "Collaborative Spirit",
      description: "Building networks and fostering teamwork among tech enthusiasts"
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Competitive Edge",
      description: "Challenging competitions that push the boundaries of innovation"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-green-600" />,
      title: "Creative Solutions",
      description: "Encouraging innovative thinking and problem-solving approaches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            About PIXELS 25
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              PIXELS 25 is the flagship technical symposium of the Department of Computer Science & Engineering, 
              designed to ignite creativity, foster innovation, and inspire the next generation of tech leaders. 
              Our symposium brings together brilliant minds from across institutions to showcase their technical 
              prowess and innovative thinking.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              The CSE Department is renowned for its commitment to academic excellence and cutting-edge research. 
              With state-of-the-art facilities and expert faculty, we continue to nurture tomorrow's technology pioneers.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-white rounded-lg shadow-sm mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-slate-800 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-300">Expected Participants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5</div>
              <div className="text-slate-300">Exciting Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-slate-300">Prize Money</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;