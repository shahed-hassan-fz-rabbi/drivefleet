import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
  Car,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-3xl font-bold mb-5"
          >
            <Car size={30} />
            <span>DriveFleet</span>
          </Link>

          <p className="text-blue-100 leading-relaxed text-sm">
            Premium car rental experience with trusted vehicles,
            affordable pricing, and smooth booking services across
            Bangladesh.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-blue-100">

            <li>
              <Link
                href="/"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/cars"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Explore Cars
              </Link>
            </li>

            <li>
              <Link
                href="/add-car"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                Add Car
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
              >
                My Bookings
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <ul className="space-y-4 text-blue-100 text-sm">

            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>support@drivefleet.com</span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+880 1234-567890</span>
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex items-center gap-4">

            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaXTwitter size={18} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-blue-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white hover:text-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
          </div>

          <p className="text-blue-100 text-sm mt-5 leading-relaxed">
            Stay connected with us for latest offers,
            premium cars, and exciting updates.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-blue-100">

          <p>
            © {new Date().getFullYear()} DriveFleet. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              href="/"
              className="hover:text-white transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-white transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;