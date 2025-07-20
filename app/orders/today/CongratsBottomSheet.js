import React from "react";
import { useRouter } from "next/navigation";

export default function CongratsBottomSheet({ open, totalOrders, onClose, onConfirm }) {
  const router = useRouter();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
      <div className="bg-white rounded-t-2xl w-full max-w-md mx-auto p-8 pb-10 shadow-lg animate-slideup relative">
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
            <span className="text-3xl">🎉</span>
          </div>
          <span className="text-xl font-bold text-green-900 mb-1 text-center">Congratulations!</span>
          <span className="text-gray-700 text-base mb-2 text-center">
            You have received <b>{totalOrders}</b> orders and delivered <b>{totalOrders}</b> orders today.
          </span>
          <span className="text-green-700 text-base font-semibold mb-4 text-center">Are you sure you want to close the job?</span>
          <span className="text-lg font-bold text-green-900 mb-2">Close Today's Job?</span>
          <button
            className="w-full py-3 mt-2 rounded-lg bg-smgreen-900 text-white font-medium text-base shadow hover:bg-smgreen-800 transition"
            onClick={() => {
              if (onConfirm) onConfirm();
              router.push("/home");
            }}
          >
            Yes, Close Today's Job
          </button>
          <button
            className="w-full py-3 mt-2 rounded-lg bg-gray-100 text-gray-700 font-medium text-base border border-gray-200 hover:bg-gray-200 transition"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
