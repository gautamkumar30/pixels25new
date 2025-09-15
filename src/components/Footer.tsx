import React from 'react';
import { Instagram, Linkedin, Twitter, Github, Code2 } from 'lucide-react';

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
                <h3 className="text-xl font-bold">PIXELS 25</h3>
                <p className="text-slate-400 text-sm">CSE Department</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The flagship technical symposium fostering innovation, collaboration, 
              and excellence in computer science and engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-slate-400 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="/brochure/pixels25-brochure.pdf" 
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://instagram.com/pixels25cse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-pink-600 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/pixels25" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/pixels25cse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-blue-400 rounded-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/pixels25cse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              Follow us for updates, behind-the-scenes content, and announcements!
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 mb-2">
            © 2025 PIXELS 25. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm">
            Designed & Developed with ❤️ by Web Team • Department of Computer Science & Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;