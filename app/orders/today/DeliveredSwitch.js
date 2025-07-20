import React, { useState } from "react";
import styles from "./DeliveredSwitch.module.css";

export default function DeliveredSwitch({ delivered, deliveredTime, onConfirm }) {
  const [showSheet, setShowSheet] = useState(false);
  if (delivered && deliveredTime) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-green-700 font-semibold text-xs">Delivered</span>
        <span className="text-xs text-gray-500 mt-1">{deliveredTime}</span>
      </div>
    );
  }
  return (
    <>
      <div className="flex items-center justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={false}
            onChange={() => setShowSheet(true)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer transition-all"></div>
          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white border border-gray-300 rounded-full shadow transform transition-all"></div>
        </label>
        <span className="ml-2 text-sm font-medium text-gray-400">No</span>
      </div>
      {showSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div
            className={`bg-white rounded-t-2xl w-full max-w-md mx-auto p-6 pb-8 shadow-lg relative ${styles['animate-slow-slideup']}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mb-2" />
              <span className="text-lg font-bold text-green-900 mb-1">Confirm Delivery</span>
              <span className="text-gray-700 text-sm mb-4 text-center">Are you sure you want to mark this order as delivered?</span>
              <button
                className="w-full py-3 mt-2 rounded-lg bg-smgreen-900 text-white font-medium text-base shadow hover:bg-smgreen-800 transition"
                onClick={() => { onConfirm(); setShowSheet(false); }}
              >
                Yes, I Delivered
              </button>
              <button
                className="w-full py-3 mt-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-base border border-gray-200 hover:bg-gray-200 transition"
                onClick={() => setShowSheet(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
