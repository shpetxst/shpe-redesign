import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Navigate to homepage
    navigate('/');
    
    // Scroll to contact section after a brief delay to ensure page has loaded
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle clicking on the Home link or Logo
  const handleHomeClick = () => {
    // Close mobile menu if open
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      // Already on homepage – just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to homepage first, then scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Programs', 
      href: '#',
      submenu: [
        { name: 'SHPEtinas', href: '/programs/shpetinas' },
        { name: 'Athletics', href: '/programs/athletics' },
        { name: 'Merits', href: '/programs/merits' }
      ]
    },
    { name: 'Officers', href: '/officers' },
    { name: 'Contact', href: '#contact', isContact: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom styling for Officers page
  const isOfficersPage = location.pathname === '/officers';
  const textColor = isOfficersPage 
    ? 'text-gray-800' 
    : (isScrolled ? 'text-gray-800' : 'text-white');
  const bgColor = isOfficersPage 
    ? 'bg-white shadow-md' 
    : (isScrolled ? 'bg-white shadow-md' : 'bg-transparent');

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isOfficersPage ? bgColor : (isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4')
      } ${isOfficersPage ? 'py-2' : ''}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={handleHomeClick}>
          <Logo
            isScrolled={isScrolled || isOfficersPage}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                {/* Dropdown trigger */}
                <button
                  type="button"
                  className={`inline-flex items-center font-medium text-sm transition-colors duration-200 cursor-pointer px-3 py-2 rounded-md ${
                    isOfficersPage || isScrolled
                      ? 'hover:bg-primary-50 hover:text-primary-700'
                      : 'hover:bg-white/20 hover:text-white'
                  } ${textColor}`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>

                {/* Dropdown menu */}
                <div className="absolute left-0 top-full mt-1 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-white rounded-md shadow-lg py-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      to={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
                </>
              ) : item.isContact ? (
                <button 
                  onClick={handleContactClick}
                  className={`font-medium text-sm transition-all duration-200 px-3 py-2 rounded-md ${
                    isOfficersPage || isScrolled 
                      ? 'hover:bg-primary-50 hover:text-primary-700' 
                      : 'hover:bg-white/20 hover:text-white'
                  } ${textColor}`}
                >
                  {item.name}
                </button>
              ) : (
                <Link 
                  to={item.href}
                  onClick={item.name === 'Home' ? handleHomeClick : undefined}
                  className={`font-medium text-sm transition-all duration-200 px-3 py-2 rounded-md ${
                    isOfficersPage || isScrolled 
                      ? 'hover:bg-primary-50 hover:text-primary-700' 
                      : 'hover:bg-white/20 hover:text-white'
                  } ${textColor}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          {/* <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Join Us
          </button> */}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${textColor}`} />
          ) : (
            <Menu className={`h-6 w-6 ${textColor}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.isContact ? (
                  <button
                    onClick={handleContactClick}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={item.name === 'Home' ? handleHomeClick : undefined}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    to={subitem.href}
                    className="block pl-6 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    {subitem.name}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            <div className="pt-2">
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200">
                Join Us
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;