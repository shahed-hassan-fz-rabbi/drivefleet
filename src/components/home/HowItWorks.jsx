"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, Car, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search a Car",
    description: "Browse our wide collection of cars and find the perfect one for your trip.",
    color: "bg-blue-600",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book Instantly",
    description: "Select your pickup date and location, then confirm your booking in seconds.",
    color: "bg-indigo-600",
  },
  {
    icon: Car,
    step: "03",
    title: "Pick Up Your Car",
    description: "Head to the pickup location and get behind the wheel of your chosen car.",
    color: "bg-violet-600",
  },
  {
    icon: ThumbsUp,
    step: "04",
    title: "Enjoy Your Ride",
    description: "Drive with confidence knowing you are fully covered and supported.",
    color: "bg-purple-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            How It Works
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Renting a car with DriveFleet is quick, easy, and hassle-free in just four simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 text-5xl font-black text-gray-100">
                {step.step}
              </span>

              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <step.icon size={28} className="text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;