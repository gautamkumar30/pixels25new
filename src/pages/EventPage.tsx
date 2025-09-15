import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Users, Clock, Phone, Mail } from 'lucide-react';
import { events } from '../data/events';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventPage: React.FC = () => {
  const { eventId } = useParams();
  const event = events.find(e => e.id === eventId);

  if (!event) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800">Event Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Back Navigation */}
      <div className="container mx-auto px-6 pt-24 pb-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Event Banner */}
      <section className="container mx-auto px-6 pb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 lg:p-12">
          <div className="flex items-center mb-6">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              {event.icon}
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2">
                {event.name}
              </h1>
              <p className="text-lg text-slate-600">{event.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">About This Event</h2>
              <p className="text-slate-600 leading-relaxed">{event.description}</p>
            </div>

            {/* Rules & Regulations */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Rules & Regulations</h2>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms & Conditions */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Terms & Conditions</h2>
              <ul className="space-y-2">
                {event.terms.map((term, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Flow */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Event Timeline</h2>
              <div className="space-y-4">
                {event.timeline.map((phase, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{phase.phase}</h3>
                      <p className="text-slate-600">{phase.description}</p>
                      {phase.duration && (
                        <p className="text-sm text-slate-500 mt-1">Duration: {phase.duration}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-slate-500 mr-3" />
                  <span className="text-sm text-slate-600">{event.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-slate-500 mr-3" />
                  <span className="text-sm text-slate-600">{event.teamSize}</span>
                </div>
              </div>
            </div>

            {/* Prizes */}
            {event.prizes && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                  Prizes
                </h3>
                <div className="space-y-2">
                  {event.prizes.map((prize, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-medium text-slate-800">{prize.position}: </span>
                      <span className="text-slate-600">{prize.reward}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Registration */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
              <h3 className="font-bold mb-4">Ready to Participate?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Register before the deadline to secure your spot!
              </p>
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors"
              >
                Register Now
              </a>
            </div>

            {/* Coordinators */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-800 mb-4">Event Coordinators</h3>
              <div className="space-y-4">
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="border-b border-slate-100 pb-3 last:border-b-0">
                    <h4 className="font-medium text-slate-800">{coordinator.name}</h4>
                    <p className="text-sm text-slate-500">{coordinator.year}</p>
                    <div className="flex items-center mt-2 space-x-3">
                      <a 
                        href={`tel:${coordinator.phone}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        {coordinator.phone}
                      </a>
                      {coordinator.email && (
                        <a 
                          href={`mailto:${coordinator.email}`}
                          className="flex items-center text-blue-600 hover:text-blue-700 text-sm"
                        >
                          <Mail className="w-3 h-3 mr-1" />
                          Email
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventPage;