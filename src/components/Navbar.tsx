import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isAboutPage = location.pathname === '/about';
  const isServicesPage = location.pathname === '/services';
  const isGalleryPage = location.pathname === '/gallery';
  const isBookNowPage = location.pathname === '/book-now';
  
  // Check if the current page should have gray navbar
  const isGrayNavbar = isAboutPage || isServicesPage || isGalleryPage || isBookNowPage;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/book-now' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isContactPage 
        ? scrolled 
          ? 'bg-gray-300/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-gray-400 py-4'
        : isGrayNavbar
          ? scrolled
            ? 'bg-gray-300/90 backdrop-blur-md shadow-md py-2'
            : 'bg-gray-400 py-4'
          : scrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
            : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-serif font-bold ${
                isContactPage || isGrayNavbar
                  ? 'text-white'
                  : scrolled 
                    ? 'text-salon-dark' 
                    : 'text-white'
              }`}>
                NOURISH<span className="text-salon-pink">MEDSPA</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isContactPage || isGrayNavbar
                  ? 'text-white hover:text-salon-pink'
                  : scrolled 
                    ? 'text-salon-dark hover:text-salon-pink' 
                    : 'text-white hover:text-salon-pink'
              } focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-salon-pink ${
                  isActive(link.path) 
                    ? 'text-salon-pink relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-salon-pink' 
                    : isContactPage || isGrayNavbar
                      ? 'text-white'
                      : scrolled 
                        ? 'text-salon-dark' 
                        : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl rounded-b-xl animate-fade-in">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-base font-medium rounded-md ${
                  isActive(link.path) 
                    ? 'text-salon-pink bg-salon-light' 
                    : 'text-salon-dark hover:text-salon-pink hover:bg-salon-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
