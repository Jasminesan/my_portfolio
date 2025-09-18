import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/portfolio-homepage', icon: 'Home' },
    { name: 'About', path: '/about', icon: 'User' },
    { name: 'Projects', path: '/projects', icon: 'FolderOpen' },
    { name: 'Skills', path: '/skills', icon: 'Code' },
    { name: 'Contact', path: '/contact', icon: 'Mail' }
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-card border-b border-border' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/portfolio-homepage" 
            className="flex items-center space-x-2 hover:opacity-80 transition-smooth"
            onClick={closeMobileMenu}
          >
            
            <span className="text-xl font-semibold text-foreground">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems?.slice(0, 4)?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu for Additional Items */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                <Icon name="MoreHorizontal" size={16} className="mr-2" />
                More
              </Button>
              
              <div className="absolute right-0 top-full mt-1 w-48 bg-popover border border-border rounded-md shadow-interactive opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth">
                <div className="py-1">
                  {navigationItems?.slice(4)?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm transition-smooth ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-popover-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Resume
            </Button>
            <Button size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMobileMenuToggle}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-smooth overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 border-t border-border' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-6 py-4 bg-background">
            <div className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-smooth ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA Buttons */}
            <div className="mt-6 pt-4 border-t border-border space-y-3">
              <Button variant="outline" fullWidth>
                <Icon name="Download" size={16} className="mr-2" />
                Download Resume
              </Button>
              <Button fullWidth>
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Let's Talk
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;