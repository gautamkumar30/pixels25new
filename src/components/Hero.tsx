import React, { useState, useEffect } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set symposium date (September 26, 2025)
    const symposiumDate = new Date("2025-09-26T09:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const difference = symposiumDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-800 mb-4 tracking-tight">
              PIXELS <span className="text-blue-600">25'</span>
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-slate-300 w-16"></div>
              <div className="text-center px-4">
                <p className="text-xl text-slate-600 font-medium">
                  Department of Computer Science & Engineering
                </p>
                <p className="text-lg text-slate-500 font-medium mt-1">
                  S.A.Engineering College
                </p>
              </div>
              <div className="h-px bg-slate-300 w-16"></div>
            </div>
            <p className="text-3xl lg:text-4xl font-bold text-slate-700 mb-8">
              Ignite. Innovate. Inspire.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 mb-8 inline-block">
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="text-lg font-semibold text-slate-800">
                    September 26, 2025
                  </p>
                </div>
              </div>
              <div className="h-px lg:h-12 lg:w-px bg-slate-200 w-32"></div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="text-sm text-slate-500">Venue</p>
                  <p className="text-lg font-semibold text-slate-800">
                    CSE Department
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-slate-600 mb-4">Event starts in:</p>
            <div className="flex justify-center space-x-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 min-w-[80px]"
                >
                  <div className="text-2xl font-bold text-slate-800">
                    {value}
                  </div>
                  <div className="text-sm text-slate-500 capitalize">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToEvents}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
