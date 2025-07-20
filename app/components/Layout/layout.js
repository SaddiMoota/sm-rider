'use client';

import React from 'react';
import Header from '../Header/header';

const Layout = ({ children, className = '' }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className={`flex-1 flex flex-col mt-[75px] min-h-[calc(100vh-75px)] md:mt-[80px] md:min-h-[calc(100vh-80px)] bg-white ${className}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
