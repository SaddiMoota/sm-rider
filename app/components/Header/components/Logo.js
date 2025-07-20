import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/home" className="flex items-center">
      <Image
        src="/images/partner-logo-two.png"
        alt="SaddiMoota Logo"
        width={256}
        height={56}
        priority
        className="w-full max-w-36 sm:max-w-44 h-auto"
      />
    </Link>
  );
};

export default Logo;
