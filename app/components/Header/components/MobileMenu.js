import React from 'react';
import { X } from 'lucide-react';
import Logo from './Logo';
import MobileNavigation from './MobileNavigation';
import Link from 'next/link';
import QuickActionCards from './QuickActionCards';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed top-0 right-0 bottom-0 bg-gradient-to-b from-smyellow-500 to-smyellow-600 transition-transform duration-400 ease-out z-[1001]
      w-full max-w-full sm:max-w-sm
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      ml-auto flex flex-col
    `}>
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 border-b border-black/10 flex-shrink-0">
        <Logo isMobile={true} />
        <button 
          className="bg-none border-none text-smgreen-900 cursor-pointer p-1 rounded-full transition-colors duration-300 bg-smgreen-900/10 hover:bg-smgreen-900/20"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
          {/* Quick Action Cards */}
          <QuickActionCards onCardClick={onClose} />
        {/* Mobile Navigation Menu */}
        <MobileNavigation onLinkClick={onClose} />
      </div>

      {/* Footer */}
      <div className="mt-4 px-4 pb-3 pt-3 border-t border-white/30 flex flex-col gap-1 relative bg-transparent flex-shrink-0">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm md:text-base font-medium text-black">www.saddimoota.com</Link>
          <img src="/images/saddimoota-brand-icon.png" alt="SaddiMoota" className="h-12 w-auto object-contain ml-2" />
        </div>
        <hr className="border-white/40 my-2" />
        <div className="flex items-center gap-4">
          <a href="https://instagram.com/saddimoota" target="_blank" rel="noopener noreferrer" className="text-smgreen-900 hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" stroke="#0b622f" strokeWidth="2"/><circle cx="12" cy="12" r="5" stroke="#0b622f" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="#0b622f"/></svg></a>
          <a href="https://youtube.com/@saddimoota" target="_blank" rel="noopener noreferrer" className="text-smgreen-900 hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" stroke="#0b622f" strokeWidth="2"/><polygon points="10,8 16,12 10,16" fill="#0b622f"/></svg></a>
          <a href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer" className="text-smgreen-900 hover:scale-110 transition-transform"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" stroke="#0b622f" strokeWidth="2"/><path d="M16.5 14.5c-.4-.2-2.3-1.1-2.6-1.2-.3-.1-.5-.2-.7.2-.2.3-.8 1.2-1 1.4-.2.2-.4.2-.8 0-.4-.2-1.5-.6-2.8-1.9-1-1-1.7-2.2-1.9-2.6-.2-.4 0-.6.2-.8.2-.2.3-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.7-1.7-1-2.3-.2-.4-.5-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.7 2.7 4.1 3.7.6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" fill="#0b622f"/></svg></a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
