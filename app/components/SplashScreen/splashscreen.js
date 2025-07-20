import React from "react";
import Image from "next/image";

const SplashScreen = () => {
  return (
    <div className="relative min-h-screen bg-smgreen-900 flex flex-col items-center justify-center p-5">
      <Image
        src="/images/partner-logo-two.png"
        alt="Splash Screen Logo"
        width={390}
        height={92}
        priority
        className="w-full h-auto max-w-[300] lg:max-w-sm mt-[-24px]"
      />
      
      {/* Spinner Loader */}
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-smyellow-500 mt-8"></div>
      
      <div className="fixed bottom-0 w-full p-3 bg-smyellow-500"></div>
    </div>
  );
};

export default SplashScreen;
