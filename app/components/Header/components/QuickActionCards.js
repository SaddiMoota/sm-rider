import React from 'react';
import { useRouter } from 'next/navigation';
import { Home, ShoppingBag, User } from 'lucide-react';


const QuickActionCards = ({ onCardClick }) => {
  const router = useRouter();
  const quickActions = [
    { icon: Home, label: "Home", href: "/home" },
    { icon: User, label: "Today's Orders", href: "/orders/today" },
    { icon: ShoppingBag, label: "My Jobs", href: "/my-jobs" }
  ];

  const handleClick = (href) => {
    if (onCardClick) {
      onCardClick();
      setTimeout(() => {
        router.push(href);
      }, 300); // Adjust delay to match your sidenav close animation
    } else {
      router.push(href);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {quickActions.map((action) => {
        const IconComponent = action.icon;
        return (
          <div 
            key={action.label}
            className="bg-white/90 rounded p-5 flex flex-col items-center text-center gap-2 cursor-pointer transition-all duration-300 shadow-md hover:bg-white hover:-translate-y-0.5 hover:shadow-xl"
            onClick={() => handleClick(action.href)}
          >
            <IconComponent size={24} className="text-smgreen-900" />
            <span className="text-smgreen-900 text-sm font-medium">{action.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default QuickActionCards;
