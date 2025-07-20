import { AlignJustify } from 'lucide-react';
import React from 'react';

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button 
      className="bg-none border-none cursor-pointer p-1"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <AlignJustify size={24} className='text-smyellow-500' />
    </button>
  );
};

export default HamburgerButton;
