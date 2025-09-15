import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">PIXELS 25</h1>
              <p className="text-sm text-slate-500">CSE Department</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-slate-800 transition-colors"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Events
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-600 hover:text-slate-800 transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-left"
              >
                Register Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;