import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { events } from "../data/events";

const EventsOverview: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Event Lineup
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dive into our carefully curated events designed to challenge your
            skills, spark creativity, and showcase your technical expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {event.name}
                    </h3>
                    <p className="text-sm text-slate-500">{event.category}</p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {event.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    <span className="font-medium">{event.duration}</span> •{" "}
                    <span>{event.teamSize}</span>
                  </div>
                  <Link
                    to={`/event/${event.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    Know More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Registration CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Showcase Your Skills?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Join hundreds of talented participants from across the region.
              Register now and be part of this incredible technical journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/event/ideathon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                Register for an event
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-800 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsOverview;
