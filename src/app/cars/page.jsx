"use client";

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CarCard from "@/components/CarCard";
import { motion } from "framer-motion";
import axiosInstance from "@/lib/axios";

const carTypes = ["All", "Sedan", "SUV", "Luxury", "Van", "Pickup", "Hatchback"];

const ExploreCarsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const params = {};
        if (search) params.search = search;
        if (selectedType !== "All") params.type = selectedType;

        const res = await axiosInstance.get("/api/cars", { params });
        setCars(res.data);
      } catch (error) {
        console.error("Failed to fetch cars", error);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchCars, 400);
    return () => clearTimeout(delay);
  }, [search, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Explore Our Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 text-lg mb-8"
          >
            Find the perfect car for your journey
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto relative"
          >
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by car name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">

        {/* Filter */}
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <SlidersHorizontal size={18} className="text-gray-500" />
          {carTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedType === type
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-52 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded-xl w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-xl w-full"></div>
                  <div className="h-4 bg-gray-200 rounded-xl w-2/3"></div>
                  <div className="flex justify-between pt-2">
                    <div className="h-8 bg-gray-200 rounded-xl w-20"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-28"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🚗</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No cars found</h3>
            <p className="text-gray-400">Try a different search or filter</p>
          </div>
        ) : (
          <>
            <p className="text-gray-500 text-sm mb-6">
              Showing{" "}
              <span className="font-semibold text-gray-800">{cars.length}</span>{" "}
              cars
              {selectedType !== "All" && ` in ${selectedType}`}
              {search && ` for "${search}"`}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car, index) => (
                <motion.div
                  key={car._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <CarCard car={car} />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExploreCarsPage;