import React from 'react';

const MobileNavigation = ({ onLinkClick }) => {
  const navItems = [
    // { href: "/my-account", label: "My Account" },
    { href: "/signout", label: "Signout", isSignout: true }
  ];

  return (
    <nav className="px-5 pb-10 mt-5">
      <ul className="flex flex-col">
        {navItems.map((item) => (
          <li key={item.href}>
            <a 
              href={item.href} 
              className={`block text-base font-medium py-4 border-b border-smgreen-900/10 transition-all duration-300 hover:text-smgreen-700 hover:pl-2.5 ${
                item.isSignout 
                  ? 'text-red-600 border-b-0 mt-2.5 hover:text-red-700' 
                  : 'text-smgreen-900'
              }`}
              onClick={onLinkClick}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavigation;
