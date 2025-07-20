import React from "react";

export default function ClockInOutCard() {
  const [clockedIn, setClockedIn] = React.useState(false);
  const [clockedOut, setClockedOut] = React.useState(false);
  const [clockInTime, setClockInTime] = React.useState(null);
  const [clockOutTime, setClockOutTime] = React.useState(null);

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
  };

  const formatTime = (date) => {
    if (!date) return '';
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
  };

  return (
    <>
      {!clockedIn && !clockedOut && (
        <button
          className="mt-4 w-full text-lg border-2 px-4 py-3 rounded-lg font-medium transition-all shadow active:scale-95 z-10 border-smgreen-600 text-white bg-gradient-to-r from-smgreen-600 to-smgreen-400 hover:from-smgreen-700 hover:to-smgreen-500"
          onClick={handleClockIn}
        >
          Clockin
        </button>
      )}
      {clockedIn && !clockedOut && (
        <>
          <button
            className="mt-4 w-full text-lg border-2 px-4 py-3 rounded-lg font-medium transition-all shadow active:scale-95 z-10 border-red-600 text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500"
            onClick={handleClockOut}
          >
            Clockout
          </button>
          <div className="mt-3 w-full text-center text-green-700 font-semibold bg-green-50 py-2 rounded-lg border border-green-100">Great. Please wait for the orders.</div>
        </>
      )}
      {clockedOut && (
        <div className="mt-4 w-full flex flex-col items-center gap-3 bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-lg p-6 shadow">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-green-900 mb-1">Great job today! 🎉</span>
            <span className="text-base text-gray-700 font-medium mb-2">See you tomorrow.</span>
          </div>
          <div className="flex flex-col gap-2 w-full max-w-xs">
            <div className="flex justify-between items-center bg-white rounded-md px-4 py-2 border border-green-100">
              <span className="text-gray-500 font-medium">Clock In</span>
              <span className="text-green-700 font-bold">{formatTime(clockInTime)}</span>
            </div>
            <div className="flex justify-between items-center bg-white rounded-md px-4 py-2 border border-green-100">
              <span className="text-gray-500 font-medium">Clock Out</span>
              <span className="text-red-600 font-bold">{formatTime(clockOutTime)}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
