"use client";

import Layout from "@/app/components/Layout/layout";
import React, { useState, useRef } from "react";
import { Search, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

// Dummy data for today's orders
const DROP_LOCATION = "3A, Raheja Mindspace";
const DROP_LOCATION_MAP_URL = "https://maps.google.com/?q=3A, Raheja Mindspace";
const orders = [
  { id: 1, orderNumber: "SM-080725-002", name: "David Sandy", delivered: false },
  { id: 2, orderNumber: "SM-080725-003", name: "Prem Sagar Krishna", delivered: false },
  { id: 3, orderNumber: "SM-080725-004", name: "Sowjanya D", delivered: false },
  { id: 4, orderNumber: "SM-080725-005", name: "Anil Kumar", delivered: false },
  { id: 5, orderNumber: "SM-080725-006", name: "Priya Sharma", delivered: false },
  { id: 6, orderNumber: "SM-080725-007", name: "Rahul Verma", delivered: false },
  { id: 7, orderNumber: "SM-080725-008", name: "Sneha Reddy", delivered: false },
  { id: 8, orderNumber: "SM-080725-009", name: "Vikram Singh", delivered: false },
];




import CongratsBottomSheet from "./CongratsBottomSheet";
import DeliveredSwitch from "./DeliveredSwitch";
import SwipableButton from "./SwipeToStartJob";




const TodayOrdersPage = () => {
  const [search, setSearch] = useState("");
  const [orderList, setOrderList] = useState(orders.map(o => ({ ...o, deliveredTime: null })));
  const [showCongrats, setShowCongrats] = useState(false);
  const [jobClosed, setJobClosed] = useState(false);
  const [jobStarted, setJobStarted] = useState(false);
  const [showSwipeButton, setShowSwipeButton] = useState(true);
  const [showReadyModal, setShowReadyModal] = useState(false);
  const [readyConfirmed, setReadyConfirmed] = useState(false);
  const [showReadyButton, setShowReadyButton] = useState(true);


  const handleDeliveredConfirm = (id) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setOrderList((prev) => {
      const updated = prev.map((order) =>
        order.id === id ? { ...order, delivered: true, deliveredTime: time } : order
      );
      // If all delivered after this update, show congrats
      if (updated.every(o => o.delivered)) {
        setTimeout(() => setShowCongrats(true), 400); // slight delay for better UX
      }
      return updated;
    });
  };

  const filteredOrders = orderList.filter(
    (order) =>
      order.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      order.name.toLowerCase().includes(search.toLowerCase())
  );

  // const today = new Date().toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "long",
  //   year: "numeric",
  // });

  return (
    <Layout>
    <div className="flex flex-col gap-5 px-4 py-6">
      <div className="text-2xl font-bold text-green-900">Today's Orders</div>
      <div className="flex items-center justify-between">
        <div className="text-base text-gray-700 font-medium">Total Orders: <span className="text-blue-600 text-lg">{orderList.length}</span></div>
        <div className="text-base text-gray-700 font-medium">Delivered: <span className="text-smgreen-600 text-lg">{orderList.length}</span></div>
      </div>
        {showSwipeButton && (
          <SwipableButton
            text="Swipe to start job"
            confirmText="Job Started"
            onConfirm={() => {
              setJobStarted(true);
              setTimeout(() => setShowSwipeButton(false), 800);
            }}
          />
        )}
        {!showSwipeButton && !jobClosed && (
          <>
            {showReadyButton && (
              <button
                className="w-full mt-2 text-lg border-2 px-4 py-3 rounded-full font-medium transition-all shadow active:scale-95 z-10 border-blue-600 text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 cursor-pointer"
                onClick={() => setShowReadyModal(true)}
              >
                Ready to deliver
              </button>
            )}
            {showReadyModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3">
                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col">
                  <div className="text-lg font-semibold text-blue-700 mb-2">Are you at the location for delivery of the orders?</div>
                  <div className="text-base text-gray-600 mb-5">Please confirm you are ready to deliver.</div>
                  <div className="flex gap-4 w-full justify-center">
                    <button
                      className="px-4 py-3 flex-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium cursor-pointer"
                      onClick={() => setShowReadyModal(false)}
                    >
                      No
                    </button>
                    <button
                      className="px-4 py-3 flex-1 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium cursor-pointer"
                      onClick={() => {
                        setShowReadyModal(false);
                        setReadyConfirmed(true);
                        setTimeout(() => setShowReadyButton(false), 800);
                      }}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

      {/* Drop Location Info Card */}
      <div className={`flex flex-col gap-5 ${readyConfirmed ? "" : "blur-xs pointer-events-none"}`}>
      <Link href={DROP_LOCATION_MAP_URL} target="_blank" rel="noopener noreferrer" title="Open location in maps" className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 shadow-sm">
        <MapPin size={28} className="text-green-700"  />
        <div className="flex flex-col">
          <span className="text-sm text-gray-500 font-medium">Drop Location</span>
          <span
            className="text-green-800 hover:text-green-900 font-semibold underline underline-offset-2 flex items-center gap-1 transition-colors"
          >
            {DROP_LOCATION}
            <span className="sr-only">Open in Maps</span>
          </span>
        </div>
      </Link>
      <div className="relative w-full">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={22} />
        </span>
        <input
          type="text"
          placeholder="Search by order number or name..."
          className="h-14 border border-gray-400 rounded-lg pl-12 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900 font-medium placeholder:text-gray-500 focus:border-smgreen-500 transition-colors"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
        <table className="bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-green-100 text-green-900">
              <th className="py-4 px-3 text-sm font-medium text-left">Sl.No</th>
              <th className="py-4 px-3 text-sm font-medium text-left">Order No & Name</th>
              <th className="py-4 px-3 text-sm font-medium text-center">Delivered?</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">No orders found.</td>
              </tr>
            ) : (
              filteredOrders.map((order, idx) => (
                <tr key={order.id} className="border-b border-gray-200 last:border-b-0">
                  <td className="py-4 px-3 align-middle text-gray-900 text-sm font-medium">{idx + 1}</td>
                  <td className="py-4 px-3 align-middle">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-700 font-normal">{order.orderNumber}</div>
                      <div className="text-sm text-gray-900 font-medium">{order.name}</div>
                    </div>
                  </td>
                  <td className="py-4 px-3 align-middle text-center">
                    <DeliveredSwitch
                      delivered={order.delivered}
                      deliveredTime={order.deliveredTime}
                      onConfirm={() => handleDeliveredConfirm(order.id)}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
    <CongratsBottomSheet
      open={showCongrats && !jobClosed}
      totalOrders={orderList.length}
      onClose={() => setShowCongrats(false)}
      onConfirm={() => { setJobClosed(true); setShowCongrats(false); }}
    />
    </div>
    {/* Optionally, you can show a message or redirect if jobClosed is true */}
    </div>
    </Layout>
  );
};

export default TodayOrdersPage;
