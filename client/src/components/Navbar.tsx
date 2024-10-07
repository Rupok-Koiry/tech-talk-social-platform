"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { useLogout } from "@/hooks/auth/useLogout";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const { user } = useMe();
  const { logout } = useLogout();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                className="text-3xl font-bold text-primary-blue logo-text"
                href="/"
              >
                TechTalk
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">
            <Link
              href="/about"
              className="text-primary-text font-medium  hover:text-primary-blue transition ease-in-out duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-primary-text font-medium  hover:text-primary-blue transition ease-in-out duration-300"
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href="/feeds"
                  className="text-primary-text font-medium  hover:text-primary-blue transition ease-in-out duration-300"
                >
                  Feeds
                </Link>
                <button
                  onClick={() => logout()}
                  className="px-3 py-1 bg-primary-blue text-white rounded-md border border-primary-blue
                    hover:bg-white hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300
                    "
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="px-3 py-1 bg-primary-blue text-white rounded-md border border-primary-blue
                  hover:bg-white hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300
                  "
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            className="md:hidden text-2xl text-primary-blue focus:outline-none"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <RxCross2 /> : <IoIosMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-5 py-4 space-y-4"
          >
            <Link
              href="/about"
              className="block text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            {user ? (
              <>
                <Link
                  href="/feeds"
                  className="block text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
                  onClick={toggleMobileMenu}
                >
                  Feeds
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  className="w-full text-left px-3 py-1 bg-primary-blue text-white rounded-md border border-primary-blue
                    hover:bg-white hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300
                    "
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="block w-full text-left px-3 py-1 bg-primary-blue text-white rounded-md border border-primary-blue
                  hover:bg-white hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300
                  "
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
