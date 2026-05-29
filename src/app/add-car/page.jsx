"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Car, MapPin, Users, Fuel, DollarSign, Image, FileText } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const carTypes = ["Sedan", "SUV", "Hatchback", "Luxury", "Van", "Pickup"];

const AddCarPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    dailyPrice: "",
    type: "Sedan",
    image: "",
    seats: "",
    location: "",
    description: "",
    available: true,
    fuel: "Petrol",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // পরে server API call আসবে এখানে
    setTimeout(() => {
      toast.success("Car added successfully!");
      setLoading(false);
      router.push("/my-added-cars");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-3xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
              <Car size={24} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Add New Car</h1>
              <p className="text-gray-500 text-sm">Fill in the details to list your car</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Car Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Car Name
              </label>
              <div className="relative">
                <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Toyota Camry"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Daily Price + Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Daily Rent Price ($)
                </label>
                <div className="relative">
                  <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="dailyPrice"
                    value={form.dailyPrice}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    required
                    min="1"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Car Type
                </label>
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 bg-white"
                >
                  {carTypes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Seats + Fuel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Seat Capacity
                </label>
                <div className="relative">
                  <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="seats"
                    value={form.seats}
                    onChange={handleChange}
                    placeholder="e.g. 5"
                    required
                    min="1"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Fuel Type
                </label>
                <div className="relative">
                  <Fuel size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select
                    name="fuel"
                    value={form.fuel}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 bg-white"
                  >
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Electric">Electric</option>
                    <option value="CNG">CNG</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Image URL
              </label>
              <div className="relative">
                <Image size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://imgbb.com/your-image"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>
              {form.image && (
                <div className="mt-3 rounded-2xl overflow-hidden h-40">
                  <img
                    src={form.image}
                    alt="preview"
                    className="w-full h-full object-cover"
                    onError={(e) => e.target.style.display = "none"}
                  />
                </div>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Pickup Location
              </label>
              <div className="relative">
                <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Dhaka, Chittagong"
                  required
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <div className="relative">
                <FileText size={18} className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe your car..."
                  required
                  rows={4}
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
              <input
                type="checkbox"
                name="available"
                id="available"
                checked={form.available}
                onChange={handleChange}
                className="w-5 h-5 accent-blue-600 cursor-pointer"
              />
              <label htmlFor="available" className="text-gray-700 font-medium cursor-pointer">
                Car is currently available for booking
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                <>
                  <Car size={20} />
                  Add Car
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddCarPage;