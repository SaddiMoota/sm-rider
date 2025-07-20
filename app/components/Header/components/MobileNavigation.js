import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const MobileNavigation = ({ onLinkClick }) => {
  const router = useRouter();
  const [showSignoutModal, setShowSignoutModal] = useState(false);
  const navItems = [
    { href: "/my-account", label: "My Account" },
    { href: "/signout", label: "Signout", isSignout: true }
  ];

  const handleSignoutClick = (e) => {
    e.preventDefault();
    setShowSignoutModal(true);
  };

  const handleConfirmSignout = () => {
    setShowSignoutModal(false);
    if (onLinkClick) onLinkClick();
    router.push('/');
  };

  return (
    <>
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
                onClick={item.isSignout ? handleSignoutClick : onLinkClick}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {showSignoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center">
      <div className="text-xl font-semibold text-red-600 mb-2 leading-normal">Are you sure you want to sign out?</div>
      <div className="test-base text-gray-600 mb-6">You will be logged out of your account.</div>
            <div className="flex gap-4 w-full justify-center">
              <button
                className="px-4 py-3 flex-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                onClick={() => setShowSignoutModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-3 flex-1 rounded bg-red-600 hover:bg-red-700 text-white font-medium"
                onClick={handleConfirmSignout}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
