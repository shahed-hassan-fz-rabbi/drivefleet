"use client";

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import CarCard from "@/components/CarCard";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { motion } from "framer-motion";

const dummyCars = [
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
    _id: "2",
    name: "Honda CR-V",
    type: "SUV",
    dailyPrice: 65,
    seats: 7,
    location: "Chittagong",
    fuel: "Hybrid",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80",
    available: true,
    bookingCount: 8,
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
    _id: "4",
    name: "Toyota Hiace",
    type: "Van",
    dailyPrice: 80,
    seats: 12,
    location: "Sylhet",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80",
    available: true,
    bookingCount: 15,
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
  {
    _id: "6",
    name: "Mercedes C-Class",
    type: "Luxury",
    dailyPrice: 150,
    seats: 5,
    location: "Dhaka",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80",
    available: true,
    bookingCount: 7,
  },
  {
    _id: "7",
    name: "Toyota Corolla",
    type: "Sedan",
    dailyPrice: 40,
    seats: 5,
    location: "Rajshahi",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80",
    available: true,
    bookingCount: 20,
  },
  {
    _id: "8",
    name: "Ford Ranger",
    type: "Pickup",
    dailyPrice: 90,
    seats: 5,
    location: "Chittagong",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    available: true,
    bookingCount: 11,
  },
];

const carTypes = ["All", "Sedan", "SUV", "Luxury", "Van", "Pickup", "Hatchback"];

const ExploreCarsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [filtered, setFiltered] = useState(dummyCars);

  useEffect(() => {
    let result = dummyCars;

    if (search) {
      result = result.filter((car) =>
        car.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedType !== "All") {
      result = result.filter((car) => car.type === selectedType);
    }

    setFiltered(result);
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
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
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

        {/* Filter by Type */}
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

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing{" "}
          <span className="font-semibold text-gray-800">{filtered.length}</span>{" "}
          cars
          {selectedType !== "All" && ` in ${selectedType}`}
          {search && ` for "${search}"`}
        </p>

        {/* Cars Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🚗</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No cars found
            </h3>
            <p className="text-gray-400">
              Try a different search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car, index) => (
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
        )}
      </div>
    </div>
  );
};

export default ExploreCarsPage;