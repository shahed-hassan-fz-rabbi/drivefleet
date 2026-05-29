"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CarCard from "@/components/CarCard";
import axiosInstance from "@/lib/axios";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axiosInstance.get("/api/cars");
        // শুধু ৬টা দেখাবো
        setCars(res.data.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch cars");
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Our Fleet
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Available Cars
            </h2>
            <p className="text-gray-500 mt-2">
              Choose from our wide selection of premium vehicles
            </p>
          </div>
          <Link
            href="/cars"
            className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300"
          >
            View All Cars <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                <div className="h-52 bg-gray-200"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded-xl w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded-xl w-full"></div>
                  <div className="flex justify-between pt-2">
                    <div className="h-8 bg-gray-200 rounded-xl w-20"></div>
                    <div className="h-10 bg-gray-200 rounded-full w-28"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">🚗</p>
            <p className="text-gray-500">No cars available right now</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <motion.div
                key={car._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableCars;