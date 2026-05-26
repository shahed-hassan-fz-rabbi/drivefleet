"use client";

import { motion } from "framer-motion";
import { Shield, Clock, MapPin, CreditCard, Headphones, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "All our vehicles come with comprehensive insurance coverage for your peace of mind.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Book a car anytime, anywhere. Our platform is available around the clock.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Free Pickup & Drop",
    description: "We offer free pickup and drop-off service at your preferred location.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Flexible and secure payment options to make your booking hassle-free.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated support team is always ready to help you anytime.",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Star,
    title: "Top Rated Cars",
    description: "Only the best and highest-rated vehicles make it to our fleet.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Why DriveFleet
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We provide the best car rental experience with premium vehicles, transparent pricing, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${feature.color}`}>
                <feature.icon size={26} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;