import SwipableButton from "@/app/orders/today/SwipeToStartJob";
import { Info } from "lucide-react";
import React from "react";

export default function ClockInOutCard() {
  const [clockedIn, setClockedIn] = React.useState(false);
  const [clockedOut, setClockedOut] = React.useState(false);
  const [clockInTime, setClockInTime] = React.useState(null);
  const [clockOutTime, setClockOutTime] = React.useState(null);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const handleClockIn = () => {
    setClockedIn(true);
    setClockedOut(false);
    setClockInTime(new Date());
    setClockOutTime(null);
  };

  const handleClockOut = () => {
    setClockedIn(false);
    setClockedOut(true);
    setClockOutTime(new Date());
    setShowConfirmModal(false);
  };

  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <>
      {!clockedIn && !clockedOut && (
        <>
        <SwipableButton text="Swipe to Clockin" confirmText="Clockedin" onConfirm={() => handleClockIn(true)} className="mt-4"/>
        <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full mt-2 shadow-sm">
            <Info size={22} className="text-yellow-600" />
            <span className="text-yellow-900 text-base font-semibold tracking-wide">Clockin daily by 11 am</span>
        </div>
        </>
      )}
      {clockedIn && !clockedOut && (
        <>
          <button
            className="mt-4 w-full text-lg border-2 px-4 py-3 rounded-full font-medium transition-all shadow active:scale-95 z-10 border-red-600 text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500"
            onClick={() => setShowConfirmModal(true)}
          >
            Clockout
          </button>
          <div className="mt-3 w-full text-center text-green-700 font-semibold bg-green-50 py-2 rounded-lg border border-green-100">Great. Please wait for the orders.</div>
          {/* Confirmation Modal */}
          {showConfirmModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-3">
              <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col">
                <div className="text-xl font-semibold text-red-600 mb-2 leading-normal">Are you sure you want to clock out?</div>
                <div className="test-base text-gray-600 mb-6">You will not be able to clock in again today.</div>
                <div className="flex gap-4 w-full justify-center">
                  <button
                    className="px-4 py-3 flex-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                    onClick={() => setShowConfirmModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-3 flex-1 rounded bg-red-600 hover:bg-red-700 text-white font-medium"
                    onClick={handleClockOut}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      {clockedOut && (
        <div className="mt-4 w-full flex flex-col items-center gap-3 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-lg py-6 px-4 shadow">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-green-900 mb-1">Great job today! 🎉</span>
            <span className="text-base text-gray-700 font-medium mb-2">See you tomorrow.</span>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <div className="flex justify-between items-center bg-white rounded-md px-4 py-2 border border-green-100">
              <span className="ttext-base text-gray-600 font-medium">Orders Delivered Today</span>
              <span className="text-base text-blue-600 font-bold">50</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded-md px-4 py-2 border border-green-100">
              <span className="text-base text-gray-500 font-medium">Clock In</span>
              <span className="text-base text-green-700 font-bold">{formatTime(clockInTime)}</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded-md px-4 py-2 border border-green-100">
              <span className="text-base text-gray-500 font-medium">Clock Out</span>
              <span className="text-base text-red-600 font-bold">{formatTime(clockOutTime)}</span>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
