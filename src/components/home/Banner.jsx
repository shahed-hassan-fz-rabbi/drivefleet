"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Star } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

     
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Star size={14} fill="currentColor" />
              Trusted by 10,000+ customers
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Drive Your
              <span className="text-blue-600"> Dream Car</span>
              <br /> Today
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Discover a wide range of premium vehicles at unbeatable prices.
              From city drives to long road trips — we have the perfect car for every journey.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/cars"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 hover:shadow-xl"
              >
                Explore Cars
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-2 px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

           
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Cars Available</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Locations</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=700&q=80"
                alt="Premium Car"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Shield size={22} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Fully Insured</p>
                <p className="text-xs text-gray-500">All vehicles covered</p>
              </div>
            </motion.div>

           
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin size={22} className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Free Pickup</p>
                <p className="text-xs text-gray-500">At your location</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;