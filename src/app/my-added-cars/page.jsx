"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Car, MapPin, Users, Fuel, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";
import toast from "react-hot-toast";

const dummyMyCars = [
  {
    _id: "1",
    name: "Toyota Camry",
    type: "Sedan",
    dailyPrice: 45,
    seats: 5,
    location: "Dhaka",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80",
    available: true,
    bookingCount: 12,
  },
  {
    _id: "3",
    name: "BMW 3 Series",
    type: "Luxury",
    dailyPrice: 120,
    seats: 5,
    location: "Dhaka",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&q=80",
    available: true,
    bookingCount: 5,
  },
  {
    _id: "5",
    name: "Hyundai Tucson",
    type: "SUV",
    dailyPrice: 70,
    seats: 5,
    location: "Dhaka",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    available: false,
    bookingCount: 3,
  },
];

const MyAddedCarsPage = () => {
  const [cars, setCars] = useState(dummyMyCars);
  const [deleteId, setDeleteId] = useState(null);

  const handleDelete = (id) => {
    // পরে server API call আসবে
    setCars((prev) => prev.filter((car) => car._id !== id));
    toast.success("Car deleted successfully");
    setDeleteId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Added Cars</h1>
            <p className="text-gray-500 mt-1">Manage your listed vehicles</p>
          </div>
          <Link
            href="/add-car"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            <Car size={18} />
            Add New Car
          </Link>
        </motion.div>

        {/* Empty state */}
        {cars.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🚗</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No cars added yet
            </h3>
            <p className="text-gray-400 mb-6">
              Start by adding your first car listing
            </p>
            <Link
              href="/add-car"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
            >
              Add Car
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {car.type}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      car.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {car.available ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {car.name}
                  </h3>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-blue-500" />
                      {car.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={14} className="text-blue-500" />
                      {car.seats} seats
                    </span>
                    <span className="flex items-center gap-1">
                      <Fuel size={14} className="text-blue-500" />
                      {car.fuel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">
                        ${car.dailyPrice}
                      </span>
                      <span className="text-gray-400 text-sm">/day</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {car.bookingCount} bookings
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/my-added-cars/${car._id}/edit`}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-sm"
                    >
                      <Pencil size={16} />
                      Update
                    </Link>
                    <button
                      onClick={() => setDeleteId(car._id)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-red-400 text-red-500 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 text-sm"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Confirm Delete Modal */}
      {deleteId && (
        <ConfirmDeleteModal
          onConfirm={() => handleDelete(deleteId)}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

export default MyAddedCarsPage;