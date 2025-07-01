import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Programs', 
      href: '#',
      submenu: [
        { name: 'SHPEtinas', href: '#shpetinas' },
        { name: 'Athletics', href: '#athletics' },
        { name: 'Merits', href: '#merits' }
      ]
    },
    { name: 'Officers', href: '#officers' },
    { name: 'Contact', href: '#contact' }
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo color={isScrolled ? '#76232F' : 'white'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <a 
                href={item.href}
                className={`font-medium text-sm group-hover:text-primary-600 transition-colors ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <div className="flex items-center">
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </div>
              </a>
              
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subitem) => (
                    <a
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                    >
                      {subitem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Join Us
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                >
                  {item.name}
                </a>
                {item.submenu && item.submenu.map((subitem) => (
                  <a
                    key={subitem.name}
                    href={subitem.href}
                    className="block pl-6 px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-md"
                  >
                    {subitem.name}
                  </a>
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