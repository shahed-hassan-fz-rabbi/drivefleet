import Link from "next/link";
import { FaCar } from "react-icons/fa";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-primary mb-3">
            <FaCar size={22} />
            DriveFleet
          </div>
          <p className="text-sm text-base-content/70">
            Your trusted car rental platform. Drive with comfort and confidence.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 text-sm text-base-content/70">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/cars" className="hover:text-primary">Explore Cars</Link></li>
            <li><Link href="/add-car" className="hover:text-primary">Add Car</Link></li>
            <li><Link href="/my-bookings" className="hover:text-primary">My Bookings</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-base-content/70 mb-4">
            <li>📧 support@drivefleet.com</li>
            <li>📞 +880 1234-567890</li>
            <li>📍 Dhaka, Bangladesh</li>
          </ul>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-primary"><FaXTwitter /></a>
            <a href="#" className="hover:text-primary"><FaFacebook /></a>
            <a href="#" className="hover:text-primary"><FaInstagram /></a>
          </div>
        </div>

      </div>
      <div className="text-center text-xs text-base-content/50 py-4 border-t border-base-300">
        © {new Date().getFullYear()} DriveFleet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;