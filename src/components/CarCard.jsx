import Link from "next/link";
import { MapPin, Users, Fuel } from "lucide-react";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

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
      <div className="p-5 flex flex-col flex-1">
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

        <div className="flex items-center justify-between mt-auto">
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
    </div>
  );
};

export default CarCard;