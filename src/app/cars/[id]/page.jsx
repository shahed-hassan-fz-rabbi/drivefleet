"use client";

import { useState } from "use";
import { useParams, useRouter } from "next/navigation";
import { MapPin, Users, Fuel, Calendar, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import useAuth from "@/hooks/useAuth";
import BookingModal from "@/components/BookingModal";
import toast from "react-hot-toast";

const dummyCars = [
  {
    _id: "1",
    name: "Toyota Camry",
    type: "Sedan",
    dailyPrice: 45,
    seats: 5,
    location: "Dhaka",
    fuel: "Petrol",
    description: "A reliable and comfortable sedan perfect for city drives and long trips. Features modern interior, smooth ride, and excellent fuel efficiency.",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80",
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
    description: "Spacious and fuel-efficient SUV with hybrid technology. Perfect for family trips with ample cargo space and advanced safety features.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
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
    description: "Experience ultimate luxury and performance with this iconic BMW. Features premium leather interior, powerful engine, and cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
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
    description: "Ideal for group travel with spacious seating for up to 12 passengers. Reliable diesel engine and comfortable ride for long journeys.",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
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
    description: "Modern SUV with stylish design and advanced features. Great for both city driving and highway travel with comfortable seating.",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
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
    description: "The pinnacle of luxury motoring. Enjoy premium comfort, advanced technology, and superior performance in this iconic Mercedes-Benz.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
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
    description: "The world's best-selling car for good reason. Reliable, economical, and comfortable with excellent resale value.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
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
    description: "Tough and capable pickup truck perfect for both work and adventure. Features powerful diesel engine and impressive towing capacity.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    available: true,
    bookingCount: 11,
  },
];

const CarDetailsPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const [bookingOpen, setBookingOpen] = useState(false);

  const car = dummyCars.find((c) => c._id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-5xl">🚗</p>
        <h2 className="text-2xl font-bold text-gray-700">Car not found</h2>
        <Link href="/cars" className="btn btn-primary rounded-full">
          Back to Cars
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!user) {
      toast.error("Please login to book a car");
      router.push("/login");
      return;
    }
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        {/* Back button */}
        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-[380px] object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                  {car.type}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${
                  car.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {car.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <Users size={22} className="text-blue-600 mx-auto mb-1" />
                <p className="text-sm text-gray-500">Seats</p>
                <p className="font-bold text-gray-800">{car.seats}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <Fuel size={22} className="text-blue-600 mx-auto mb-1" />
                <p className="text-sm text-gray-500">Fuel</p>
                <p className="font-bold text-gray-800">{car.fuel}</p>
              </div>
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <Calendar size={22} className="text-blue-600 mx-auto mb-1" />
                <p className="text-sm text-gray-500">Bookings</p>
                <p className="font-bold text-gray-800">{car.bookingCount}</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {car.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={16} className="text-blue-500" />
                <span>{car.location}</span>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-5">
              <p className="text-sm text-gray-500 mb-1">Daily Rent Price</p>
              <p className="text-4xl font-bold text-blue-600">
                ${car.dailyPrice}
                <span className="text-lg text-gray-400 font-normal">/day</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {car.description}
              </p>
            </div>

            <div className="flex items-center gap-3 bg-green-50 rounded-2xl p-4">
              <Shield size={22} className="text-green-600" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  Fully Insured
                </p>
                <p className="text-xs text-gray-500">
                  All vehicles are covered with comprehensive insurance
                </p>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              disabled={!car.available}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {car.available ? "Book Now" : "Not Available"}
            </button>

            {!user && car.available && (
              <p className="text-center text-sm text-gray-500">
                Please{" "}
                <Link href="/login" className="text-blue-600 font-semibold hover:underline">
                  login
                </Link>{" "}
                to book this car
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Booking Modal */}
      {bookingOpen && (
        <BookingModal
          car={car}
          onClose={() => setBookingOpen(false)}
        />
      )}
    </div>
  );
};

export default CarDetailsPage;