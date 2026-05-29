"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car, Calendar, MapPin, Trash2, Users } from "lucide-react";
import Link from "next/link";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";

const statusStyles = {
  confirmed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  cancelled: "bg-red-100 text-red-700",
};

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get("/api/bookings/my");
        setBookings(res.data);
      } catch (error) {
        toast.error("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await axiosInstance.delete(`/api/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success("Booking cancelled");
    } catch (error) {
      toast.error("Failed to cancel booking");
    } finally {
      setDeleteId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-500 mt-1">Track and manage your car bookings</p>
        </motion.div>

        {bookings.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">📋</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No bookings yet
            </h3>
            <p className="text-gray-400 mb-6">
              Browse our cars and make your first booking
            </p>
            <Link
              href="/cars"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Explore Cars
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking, index) => (
              <motion.div
                key={booking._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">

                  <div className="sm:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={booking.carImage}
                      alt={booking.carName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {booking.carName}
                        </h3>
                        <span className="text-sm text-gray-500">
                          {booking.carType}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1.5 rounded-full self-start ${statusStyles[booking.status] || statusStyles.confirmed}`}>
                        {booking.status
                          ? booking.status.charAt(0).toUpperCase() + booking.status.slice(1)
                          : "Confirmed"}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Calendar size={14} className="text-blue-500" />
                        <span>
                          {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <MapPin size={14} className="text-blue-500" />
                        <span>{booking.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <Users size={14} className="text-blue-500" />
                        <span>
                          Driver: {booking.driverNeeded === "yes" ? "Yes" : "No"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                        <Car size={14} />
                        <span>Total: ${booking.totalPrice}</span>
                      </div>
                    </div>

                    {booking.specialNote && (
                      <div className="bg-gray-50 rounded-xl px-4 py-2 text-sm text-gray-500 mb-4">
                        📝 {booking.specialNote}
                      </div>
                    )}

                    <button
                      onClick={() => setDeleteId(booking._id)}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-red-400 text-red-500 rounded-xl text-sm font-semibold hover:bg-red-50 transition-all duration-300"
                    >
                      <Trash2 size={15} />
                      Cancel Booking
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {deleteId && (
        <ConfirmDeleteModal
          onConfirm={() => handleCancel(deleteId)}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

export default MyBookingsPage;