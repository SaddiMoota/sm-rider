import React from "react";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-transparent border border-smyellow-500 text-smyellow-500 px-4 py-2 rounded font-medium text-sm uppercase tracking-wide transition-all duration-300 hover:bg-smyellow-500 hover:text-smgreen-900 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-smyellow-500/30 sm:px-5 sm:py-2 sm:text-base cursor-pointer"
    >
      Login
    </button>
  );
};

export default LoginButton;
