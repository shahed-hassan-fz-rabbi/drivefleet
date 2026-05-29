"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { MapPin, Users, Fuel, Calendar, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import useAuth from "@/hooks/useAuth";
import BookingModal from "@/components/BookingModal";
import toast from "react-hot-toast";
import axiosInstance from "@/lib/axios";

const CarDetailsPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const router = useRouter();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await axiosInstance.get(`/api/cars/${id}`);
        setCar(res.data);
      } catch (error) {
        toast.error("Car not found");
        router.push("/cars");
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  const handleBookNow = () => {
    if (!user) {
      toast.error("Please login to book a car");
      router.push("/login");
      return;
    }
    setBookingOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 animate-pulse">
            <div className="h-96 bg-gray-200 rounded-3xl"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded-xl w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded-xl w-1/2"></div>
              <div className="h-32 bg-gray-200 rounded-xl"></div>
              <div className="h-14 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!car) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <Link
          href="/cars"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-300 mb-6"
        >
          <ArrowLeft size={18} />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left */}
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

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{car.name}</h1>
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            <div className="flex items-center gap-3 bg-green-50 rounded-2xl p-4">
              <Shield size={22} className="text-green-600" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">Fully Insured</p>
                <p className="text-xs text-gray-500">All vehicles are covered</p>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              disabled={!car.available}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

      {bookingOpen && (
        <BookingModal
          car={car}
          onClose={() => setBookingOpen(false)}
          onSuccess={() => {
            setCar((prev) => ({
              ...prev,
              bookingCount: prev.bookingCount + 1,
            }));
          }}
        />
      )}
    </div>
  );
};

export default CarDetailsPage;