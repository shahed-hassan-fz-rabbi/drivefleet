"use client";

import { useState } from "react";
import { X, Car, Calendar } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const BookingModal = ({ car, onClose }) => {
  const [form, setForm] = useState({
    driverNeeded: "no",
    specialNote: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // পরে server API call এখানে আসবে
    setTimeout(() => {
      toast.success("Car booked successfully!");
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Book Car</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Car info */}
        <div className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4 mb-6">
          <img
            src={car.image}
            alt={car.name}
            className="w-20 h-16 object-cover rounded-xl"
          />
          <div>
            <h3 className="font-bold text-gray-900">{car.name}</h3>
            <p className="text-sm text-gray-500">{car.type}</p>
            <p className="text-blue-600 font-bold">${car.dailyPrice}/day</p>
          </div>
        </div>

        {/* Booking date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-gray-50 rounded-xl p-3">
          <Calendar size={16} className="text-blue-500" />
          <span>Booking Date: </span>
          <span className="font-semibold text-gray-700">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Driver Needed */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Driver Needed?
            </label>
            <div className="flex gap-4">
              {["yes", "no"].map((opt) => (
                <label
                  key={opt}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    form.driverNeeded === opt
                      ? "border-blue-600 bg-blue-50 text-blue-700 font-semibold"
                      : "border-gray-200 text-gray-500 hover:border-blue-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="driverNeeded"
                    value={opt}
                    checked={form.driverNeeded === opt}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        driverNeeded: e.target.value,
                      }))
                    }
                    className="hidden"
                  />
                  {opt === "yes" ? "Yes, I need a driver" : "No, I'll drive"}
                </label>
              ))}
            </div>
          </div>

          {/* Special Note */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Special Note (optional)
            </label>
            <textarea
              value={form.specialNote}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, specialNote: e.target.value }))
              }
              placeholder="Any special requirements or notes..."
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 text-gray-800 resize-none"
            />
          </div>

          {/* Price summary */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Daily Rate</span>
              <span>${car.dailyPrice}</span>
            </div>
            {form.driverNeeded === "yes" && (
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Driver Fee</span>
                <span>$20</span>
              </div>
            )}
            <div className="flex justify-between font-bold text-gray-800 border-t border-gray-200 pt-2 mt-2">
              <span>Total/day</span>
              <span className="text-blue-600">
                ${form.driverNeeded === "yes" ? car.dailyPrice + 20 : car.dailyPrice}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm"></span>
            ) : (
              <>
                <Car size={18} />
                Confirm Booking
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default BookingModal;