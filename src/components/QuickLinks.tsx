import React from "react";
import { Download, MapPin, Phone, Mail, Users, User } from "lucide-react";

const QuickLinks: React.FC = () => {
  const coordinators = [
    {
      name: "Gautam Kumar G",
      role: "Overall Coordinator",
      year: "4th Year CSE",
      phone: "+91 90808 72119",
      email: "2216012@saec.ac.in",
    },
    {
      name: "Balasubramaniya V",
      role: "Overall Coordinator",
      year: "4th Year CSE",
      phone: "+91 90433 87628",
      email: "2216005@saec.ac.in",
    },
  ];

  const facultyCoordinator = {
    name: "Dr. Thilagavathi",
    role: "Faculty In-charge",
    department: "Professor, CSE Department",
    phone: "+91 97895 04545",
    email: "thilagavathin@saec.ac.in",
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Quick Links & Contact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get all the information you need and connect with our coordinators
            for any queries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Resources
              </h3>
              <div className="space-y-4">
                <a
                  href="/posters/symposium-poster.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
                >
                  <Download className="w-6 h-6 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Download Poster
                    </h4>
                    <p className="text-sm text-slate-600">
                      Complete event information and schedule
                    </p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Location
              </h3>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      Department of CSE
                    </h4>
                    <p className="text-slate-600">
                      S.A. Engineering College
                      <br />
                      Poonamallee, Avadi Road Veeraraghavapuram,
                      <br />
                      Thiruverkadu, Tamil Nadu - 600077
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.51782047494!2d80.10860181088027!3d13.066335012740641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261f03d683eef%3A0x435901811125ddfb!2sS.A.%20Engineering%20college!5e0!3m2!1sen!2sin!4v1757957109640!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Faculty Coordinator */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Faculty In-charge
              </h3>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 rounded-lg mr-4">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 text-lg">
                      {facultyCoordinator.name}
                    </h4>
                    <p className="text-blue-700 font-medium mb-2">
                      {facultyCoordinator.department}
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`tel:${facultyCoordinator.phone}`}
                        className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        {facultyCoordinator.phone}
                      </a>
                      <a
                        href={`mailto:${facultyCoordinator.email}`}
                        className="flex items-center text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        {facultyCoordinator.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Coordinators */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Student Coordinators
              </h3>
              <div className="space-y-4">
                {coordinators.map((coordinator, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="p-3 bg-slate-200 rounded-lg mr-4">
                        <Users className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800">
                          {coordinator.name}
                        </h4>
                        <p className="text-slate-600 font-medium">
                          {coordinator.role}
                        </p>
                        <p className="text-sm text-slate-500 mb-3">
                          {coordinator.year}
                        </p>
                        <div className="space-y-1">
                          <a
                            href={`tel:${coordinator.phone}`}
                            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Phone className="w-3 h-3 mr-2" />
                            {coordinator.phone}
                          </a>
                          <a
                            href={`mailto:${coordinator.email}`}
                            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Mail className="w-3 h-3 mr-2" />
                            {coordinator.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
