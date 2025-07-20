"use client";

import React, { useState, useEffect } from 'react';
import { 
  Logo, 
  LoginButton, 
  HamburgerButton, 
  MobileMenu,
} from './components';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          setIsScrolled(scrollTop > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[1000] h-[75px] md:h-[80px] transition-all duration-300 ${
        isScrolled 
          ? 'bg-smgreen-900 shadow-xl' 
          : 'bg-smgreen-900 shadow-lg'
      }`}>
        <div className="max-w-6xl mx-auto px-5 md:px-4 gap-3 flex items-center justify-between h-full">
          {/* Logo Section */}
          <Logo />

          {/* Right Section (HamburgerButton always visible for mobile menu on all views) */}
          <div className="flex items-center gap-3 sm:gap-5">
            <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Menu always enabled, even on desktop */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
