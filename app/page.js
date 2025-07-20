"use client";

import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen/splashscreen";
import LoginPage from "./login/page";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <LoginPage/>;
}
