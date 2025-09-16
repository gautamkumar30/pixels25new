import React from "react";
import { Code2, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PIXELS 25'</h3>
                <p className="text-slate-400 text-sm">
                  CSE Department, S.A. Engineering College
                </p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The flagship technical symposium fostering innovation,
              collaboration, and excellence in computer science and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/posters/symposium-poster.png"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Download Poster
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-500" />
                <a
                  href="mailto:pixels@saec.ac.in"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  pixels@saec.ac.in
                </a>
              </div>
              <p className="text-slate-400 text-sm">
                For inquiries and registration assistance
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 mb-2">
            © 2025 PIXELS 25'. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed & Developed with ❤️ by Web Team • Department of Computer
            Science & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
