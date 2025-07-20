import React from "react";

export default function BankDetails() {
  return (
    <div className="mb-2">
      <div className="text-lg font-bold text-gray-900 mb-2">Bank Account Details</div>
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex flex-col gap-1">
        <span className="text-base font-semibold text-blue-900">Ramesh Moola</span>
        <span className="text-sm text-gray-700">ICICI Bank</span>
        <span className="text-sm text-gray-700">Account Number: <span className="font-bold">50010029200291289</span></span>
        <span className="text-sm text-gray-700">IFSC: <span className="font-bold">ICIC0000869</span></span>
        <span className="text-sm text-gray-700">Branch: Hitec City</span>
      </div>
    </div>
  );
}
