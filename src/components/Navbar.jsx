"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { Car, ChevronDown, Menu, X } from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully");
      setDropdownOpen(false);
      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const navLinkClass = (path) =>
    `px-5 py-2 rounded-full transition-all duration-300 font-medium ${
      pathname === path
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  const dropdownLinkClass = (path) =>
    `block px-4 py-2 rounded-xl transition-all duration-300 ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100"
          : "bg-white border-b border-blue-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <Car size={30} />
            <span>DriveFleet</span>
          </Link>

          <ul className="hidden md:flex items-center gap-3">

            <li>
              <Link
                href="/"
                className={navLinkClass("/")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/cars"
                className={navLinkClass("/cars")}
              >
                Explore Cars
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">

            {loading ? (
              <span className="loading loading-spinner loading-sm text-blue-600"></span>
            ) : user ? (
              <div className="relative" ref={dropdownRef}>

                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 hover:opacity-90 transition-all duration-300"
                >
                  <img
                    src={
                      user.image ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.name
                      )}&background=2563eb&color=fff`
                    }
                    alt="user"
                    className="w-11 h-11 rounded-full border-2 border-blue-500 object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />

                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-4 w-64 bg-white border border-blue-100 rounded-3xl shadow-2xl overflow-hidden">

                    <div className="px-5 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white">

                      <h3 className="font-semibold truncate text-lg">
                        {user.name}
                      </h3>

                      <p className="text-sm text-blue-100 truncate">
                        {user.email}
                      </p>
                    </div>

                    <ul className="p-3 space-y-2">

                      <li>
                        <Link
                          href="/add-car"
                          onClick={() => setDropdownOpen(false)}
                          className={dropdownLinkClass("/add-car")}
                        >
                          Add Car
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/my-bookings"
                          onClick={() => setDropdownOpen(false)}
                          className={dropdownLinkClass("/my-bookings")}
                        >
                          My Bookings
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/my-added-cars"
                          onClick={() => setDropdownOpen(false)}
                          className={dropdownLinkClass("/my-added-cars")}
                        >
                          My Added Cars
                        </Link>
                      </li>

                      <li className="pt-2 border-t border-blue-100">
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-300"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">

                <Link
                  href="/login"
                  className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200"
                >
                  Register
                </Link>
              </div>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 shadow-xl">

          <ul className="flex flex-col p-4 gap-3">

            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/")}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/cars"
                onClick={() => setMenuOpen(false)}
                className={navLinkClass("/cars")}
              >
                Explore Cars
              </Link>
            </li>

            {!user ? (
              <>
                <li>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass("/login")}
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-center"
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/add-car"
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass("/add-car")}
                  >
                    Add Car
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-bookings"
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass("/my-bookings")}
                  >
                    My Bookings
                  </Link>
                </li>

                <li>
                  <Link
                    href="/my-added-cars"
                    onClick={() => setMenuOpen(false)}
                    className={navLinkClass("/my-added-cars")}
                  >
                    My Added Cars
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-2 rounded-full text-red-500 hover:bg-red-50 transition-all duration-300"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;