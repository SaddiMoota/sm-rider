"use client";

import React, { useState } from "react";
import Layout from "../components/Layout/layout";

const days = ["Today", "19 July", "18 July", "17 July", "16 July"];

const ordersData = [
  {
    location: "Raheja Mindspace",
    address:
      "Building 3A, 3rd Floor\nHuda Techno Enclave, Hitec City, Hyderabad, Telangana 500081",
    image: "/images/locations/building-1.jpg",
    orders: [
      { id: "SM-080725-002", name: "David Sandy", time: "01:10pm" },
      { id: "SM-080725-003", name: "Prem Sagar Krishna", time: "01:15pm" },
      { id: "SM-080725-004", name: "Sowjanya D", time: "01:12pm" },
      { id: "SM-080725-005", name: "Deepthi S", time: "01:14pm" },
      { id: "SM-080725-006", name: "Rajendra Prasad", time: "01:16pm" },
    ],
  },
];

export default function MyJobsPage() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <Layout>
      <div className="flex flex-col gap-5 px-4 py-6">
        <div className="text-2xl font-bold text-green-900">My Jobs</div>
        <div className="flex gap-2 pb-2 overflow-x-auto">
          {days.map((label, idx) => (
            <button
              key={label}
              className={
                selectedDay === idx
                  ? "bg-smyellow-50 border-2 border-smyellow-500 text-smgreen-900 font-semibold rounded-md px-4 py-2 transition"
                  : "bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 transition hover:border-smyellow-500"
              }
              onClick={() => setSelectedDay(idx)}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <div className="flex justify-between items-stretch mb-1">
            <span className="font-semibold text-base mb-1 text-gray-900">
              Delivered At  
            </span>
            <span className="font-semibold text-base mb-1 text-gray-900">
              #30 Orders  
            </span>
          </div>
          <div className="flex justify-between items-stretch p-4 rounded bg-gray-100">
            <div>
              <div className="font-semibold text-base mb-1 text-gray-900">
                {ordersData[0].location}
              </div>
              <div className="text-sm text-gray-600 whitespace-pre-line">
                {ordersData[0].address}
              </div>
            </div>
            <img
              src={ordersData[0].image}
              alt="location"
              className="w-[90px] h-auto object-cover rounded-md ml-3"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-0 overflow-hidden">
          <table className="bg-white rounded-lg shadow w-full">
            <thead>
              <tr className="bg-green-100 text-green-900">
                <th className="py-4 px-3 text-sm font-medium text-left">
                  Sl.No
                </th>
                <th className="py-4 px-3 text-sm font-medium text-left">
                  Order No & Name
                </th>
                <th className="py-4 px-3 text-sm font-medium text-center">
                  Delivered?
                </th>
              </tr>
            </thead>
            <tbody>
              {ordersData[0].orders.map((order, idx) => (
                <tr key={order.id} className="border-b border-gray-200 last:border-b-0">
                  <td className="py-4 px-3 align-middle text-gray-900 text-sm font-medium">
                    {idx + 1}
                  </td>
                  <td className="py-4 px-3 align-middle">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm text-gray-700 font-normal">
                        {order.id}
                      </div>
                      <div className="text-sm text-gray-900 font-medium">
                        {order.name}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-3 align-middle text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="w-7 h-5 bg-smgreen-900 rounded-full relative mr-1 inline-block">
                        <span className="absolute left-3 top-[4px] w-3 h-3 bg-white rounded-full shadow-sm"></span>
                      </span>
                      <span className="text-sm text-smgreen-900 font-medium">
                        {order.time}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
