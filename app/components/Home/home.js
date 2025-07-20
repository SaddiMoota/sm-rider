'use client';

import { Clock, Info } from "lucide-react";
import React, { useState } from "react";
import ClockInOutCard from "./ClockInOutCard";
import { useRouter } from "next/navigation";


const HomeComponent = () => {
  const [ordersAssigned, setOrdersAssigned] = useState(false);
  const router = useRouter();
  // Simulate orders assigned for demo; replace with real logic as needed
  // useEffect(() => { setOrdersAssigned(true); }, []);
  return (
    <div className="flex flex-col gap-7 px-2 pt-6 bg-gradient-to-b from-green-50 to-white min-h-screen">

      {/* Rider Card Modern */}
      <div className="relative bg-white border-2 border-green-100 rounded-lg shadow-lg p-6 flex flex-col items-center gap-3 overflow-hidden">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-400 w-24 h-24 rounded-full blur-2xl opacity-20 z-0" />
        <img
          src="/images/rider-default.png"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow z-10"
        />
        <div className="flex flex-col items-center z-10">
          <div className="text-2xl font-bold text-green-900">Ramesh Moola</div>
          <div className="text-base text-gray-500 font-medium">1490 Rides</div>
        </div>
        <ClockInOutCard />
      </div>

      {/* Orders Info Card or Assigned Message */}
      {!ordersAssigned ? (
        <div className="bg-gradient-to-br from-green-50 to-white rounded-lg shadow-lg p-8 flex flex-col items-center gap-4 max-w-md mx-auto border border-green-100">
          <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-2 shadow-lg">
            <Clock size={36} className="text-white" />
          </div>
          <div className="text-center">
            <div className="text-green-900 text-2xl font-bold mb-1">Orders Open At</div>
            <div className="text-gray-700 text-base font-medium">You can view your assigned orders every day at</div>
            <div className="text-3xl font-extrabold text-green-700 mt-1">11:15 AM</div>
            <div className="text-gray-500 text-sm mt-2">Check back after this time to start your deliveries.</div>
          </div>
          {/* Simulate assignment for demo */}
          <button
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-bold shadow hover:bg-green-700"
            onClick={() => setOrdersAssigned(true)}
          >
            Simulate Assign Orders
          </button>
        </div>
      ) : (
        <div className="bg-green-50 rounded-lg shadow-lg p-8 flex flex-col items-center gap-4 max-w-md mx-auto border border-green-100">
          <div className="text-green-900 text-2xl font-bold mb-2">Orders Assigned!</div>
          <div className="text-gray-700 text-base font-medium mb-2 text-center">You have new orders assigned. Please start your job to begin deliveries.</div>
          <button
            className="px-8 py-3 bg-smgreen-900 text-white rounded-full font-medium shadow hover:bg-green-800 text-lg"
            onClick={() => router.push('/orders/today')}
          >
            View Today's Orders
          </button>
        </div>
      )}

      {/* Illustration Modern */}
      <div className="flex justify-center mt-6">
        <img src="/images/sm-rider.png" alt="Rider" className="w-64 h-auto object-contain" />
      </div>
    </div>
  );
};

export default HomeComponent;
