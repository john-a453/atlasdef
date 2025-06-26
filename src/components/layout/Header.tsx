import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-300 ${
      isActive
        ? isScrolled ? 'text-accent' : 'text-accent'
        : isScrolled ? 'text-text-dark hover:text-secondary' : 'text-white hover:text-accent'
    }`;

  const headerClasses = `fixed w-full z-50 transition-all duration-300 py-4 ${
    isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className={`w-8 h-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
          <span className={`text-xl font-bold font-poppins ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Atlas Defenders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/industries" className={navLinkClasses}>
            Industries
          </NavLink>
          <NavLink to="/partners" className={navLinkClasses}>
            Partners
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <Link 
          to="/contact" 
          className={`hidden md:block btn ${
            isScrolled 
              ? 'btn-primary' 
              : 'bg-white text-primary hover:bg-white/90'
          }`}
        >
          Get a Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'} focus:outline-none`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/industries"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Industries
            </NavLink>
            <NavLink
              to="/partners"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Partners
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="btn btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;