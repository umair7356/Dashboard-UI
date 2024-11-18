import React from "react";
import { PrinterIcon } from "@heroicons/react/solid";

function Ordertrack() {
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-100 flex flex-col p-6">
          <h1 className="text-2xl text-left font-bold text-gray-800 mb-4">
            Order List
          </h1>

          <div className="w-full bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between bg-gray-600 text-white py-3 px-4 rounded-t-lg">
              <h2 className="font-semibold text-lg">Orders</h2>
              <div className="flex flex-row space-x-10">
                <button className="hover hover:translate-y-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-9"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </button>
                <button className="hover hover:translate-y-3">
                  <PrinterIcon className="h-10 w-10 text-white" />
                </button>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-gray-200">
                  + Add Order
                </button>
              </div>
            </div>
          </div>
          <div>
            <table className="table-auto w-full text-left">
              <thead className="bg-gray-200 text-gray-600 uppercase text-base leading-normal">
                <tr>
                  <th className="py-3 px-6">Name</th>
                  <th className="py-3 px-6">Product</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Time</th>
                  <th className="py-3 px-6">Address</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">John Doe</td>
                  <td className="py-3 px-6">Patties</td>
                  <td className="py-3 px-6 text-green-500">Delivered</td>
                  <td className="py-3 px-6">10:00 AM</td>
                  <td className="py-3 px-6">123 Main St, City</td>
                  <td className="py-3 px-6">
                    <button className="text-purple-600 hover:text-purple-800 px-2">
                      Edit
                    </button>
                    <button className="text-red-600 ml-10 hover:text-red-800 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">Jane Smith</td>
                  <td className="py-3 px-6">Cake</td>
                  <td className="py-3 px-6 text-yellow-500">Pending</td>
                  <td className="py-3 px-6">2:30 PM</td>
                  <td className="py-3 px-6">456 Oak St, Town</td>
                  <td className="py-3 px-6">
                    <button className="text-purple-600 hover:text-purple-800 px-2">
                      Edit
                    </button>
                    <button className="text-red-600 ml-10 hover:text-red-800 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6">Mark Wilson</td>
                  <td className="py-3 px-6">Bread</td>
                  <td className="py-3 px-6 text-red-500">Cancelled</td>
                  <td className="py-3 px-6">5:45 PM</td>
                  <td className="py-3 px-6">789 Pine Rd, Village</td>
                  <td className="py-3 px-6">
                    <button className="text-purple-600 hover:text-purple-800 px-2">
                      Edit
                    </button>
                    <button className="text-red-600 ml-10 hover:text-red-800 px-2">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ordertrack;
