
"use client";

import React, { useState } from "react";
import Layout from "../components/Layout/layout";
import DocumentLibrary from "../components/MyAccount/DocumentLibrary";
import BankDetails from "../components/MyAccount/BankDetails";
import { X } from "lucide-react";

export default function MyAccountPage() {
  const [modalDoc, setModalDoc] = useState(null);
  const documents = [
    { name: "Aadhar Card", src: "/images/aadhar-card.png" },
    { name: "Driving License", src: "/images/driving-license.png" },
    { name: "Vehicle RC", src: "/images/vehicle-rc.png" },
    { name: "Vehicle Photo", src: "/images/vehicle-photo.png" },
  ];
  return (
    <Layout>
    <div className="bg-white px-4 py-6 font-smsans">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          src="/images/rider-default.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-green-200 shadow"
        />
        <div className="text-2xl font-bold text-smgreen-900">Ramesh Moola</div>
        <div className="text-base text-gray-500 font-medium">+91 98765 43210</div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center bg-green-50 rounded-lg p-4 border border-green-100">
          <span className="text-xl font-bold text-smgreen-900">1490</span>
          <span className="text-xs text-gray-500 font-medium mt-1">Total Rides</span>
        </div>
        <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4 border border-blue-100">
          <span className="text-xl font-bold text-blue-900">1420</span>
          <span className="text-xs text-gray-500 font-medium mt-1">On-Time</span>
        </div>
        <div className="flex flex-col items-center bg-red-50 rounded-lg p-4 border border-red-100">
          <span className="text-xl font-bold text-red-900">70</span>
          <span className="text-xs text-gray-500 font-medium mt-1">Late</span>
        </div>
      </div>

      {/* Document Library */}
      <DocumentLibrary documents={documents} onDocClick={setModalDoc} />

      {/* Bank Account Details */}
      <BankDetails />
      {/* Modal for document view */}
      {modalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2">
          <div className="bg-white rounded-xl shadow-lg py-6 px-4 max-w-lg w-full relative flex flex-col items-center">
            <button
              className="absolute top-5 right-5 text-gray-700 bg-gray-200 p-1 rounded-full hover:text-gray-700 text-xl font-bold"
              onClick={() => setModalDoc(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="mb-4 text-lg font-bold text-green-900 text-center">{modalDoc.name}</div>
            <img
              src={modalDoc.src}
              alt={modalDoc.name}
              className="w-full h-72 object-contain rounded border border-gray-100 bg-gray-50"
            />
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
}
