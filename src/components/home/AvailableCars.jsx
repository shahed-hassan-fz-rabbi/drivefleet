"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Users, Fuel, ArrowRight } from "lucide-react";

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
  },
];

const AvailableCars = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyCars.map((car, index) => (
            <motion.div
              key={car._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
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

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${car.dailyPrice}
                    </span>
                    <span className="text-gray-400 text-sm">/day</span>
                  </div>
                  <Link
                    href={`/cars/${car._id}`}
                    className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-200"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCars;