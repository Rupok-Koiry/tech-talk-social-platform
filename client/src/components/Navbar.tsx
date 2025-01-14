"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { useLogout } from "@/hooks/auth/useLogout";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import {
  BiChevronDown,
  BiUser,
  BiCog,
  BiHelpCircle,
  BiBookmark,
} from "react-icons/bi";
import ThemeToggle from "./ThemeToggler";
import Image from "next/image";

const Navbar = () => {
  const { user } = useMe();
  const { logout } = useLogout();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isProfileDropdownOpen) setProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const profileMenuItems = [
    {
      icon: <BiUser className="text-lg" />,
      label: "My Profile",
      href: "/profile",
    },
    {
      icon: <BiBookmark className="text-lg" />,
      label: "Saved Posts",
      href: "/saved",
    },
    {
      icon: <BiCog className="text-lg" />,
      label: "Settings",
      href: "/settings",
    },
    {
      icon: <BiHelpCircle className="text-lg" />,
      label: "Help & Support",
      href: "/help",
    },
  ];

  return (
    <nav className="bg-primary-background shadow-primary-shadow py-4 sticky top-0 z-20">
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
          <div className="hidden md:flex items-center gap-3 md:gap-3">
            {user ? (
              <>
                <Link
                  href="/about"
                  className="text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/feeds"
                  className="text-primary-text font-medium hover:text-primary-blue transition ease-in-out duration-300"
                >
                  Feeds
                </Link>

                {/* Profile Dropdown */}
                <div className="relative" ref={profileDropdownRef}>
                  <motion.button
                    className="flex items-center gap-2 focus:outline-none"
                    onClick={() =>
                      setProfileDropdownOpen(!isProfileDropdownOpen)
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={user.profilePic}
                      alt="User Avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-primary-blue"
                    />
                    <motion.div
                      animate={{ rotate: isProfileDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BiChevronDown className="text-xl text-primary-text" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isProfileDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-primary-background rounded-lg shadow-lg border border-gray-200 py-2"
                      >
                        <div className="px-4 py-2 border-b border-gray-200">
                          <p className="font-medium text-primary-text">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {user.email}
                          </p>
                        </div>

                        {profileMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 text-primary-text hover:bg-gray-100 transition duration-200"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Link>
                        ))}

                        <button
                          onClick={() => logout()}
                          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-gray-100 transition duration-200"
                        >
                          <BiUser className="text-lg" />
                          <span>Logout</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <Link
                href="/sign-in"
                className="px-3 py-1 bg-primary-blue text-primary-background rounded-md border border-primary-blue hover:bg-primary-background hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300"
              >
                Login
              </Link>
            )}
            <ThemeToggle />
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
            className="md:hidden bg-primary-background px-5 py-4 space-y-4"
          >
            {user ? (
              <>
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <Image
                    src={user.profilePic}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-primary-blue"
                  />
                  <div>
                    <p className="font-medium text-primary-text">{user.name}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>
                </div>

                {profileMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-primary-text hover:text-primary-blue transition duration-200"
                    onClick={toggleMobileMenu}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                ))}

                <Link
                  href="/about"
                  className="block text-primary-text font-medium hover:text-primary-blue transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block text-primary-text font-medium hover:text-primary-blue transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </Link>
                <Link
                  href="/feeds"
                  className="block text-primary-text font-medium hover:text-primary-blue transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  Feeds
                </Link>
                <button
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                  className="w-full flex items-center gap-2 text-red-600 hover:text-red-700 transition duration-200"
                >
                  <BiUser className="text-lg" />
                  <span>Logout</span>
                </button>
                <div className="pt-2 border-t border-gray-200">
                  <ThemeToggle />
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="block w-full text-center px-3 py-2 bg-primary-blue text-primary-background rounded-md border border-primary-blue hover:bg-primary-background hover:text-primary-blue hover:border-primary-blue transition duration-200"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
                <div className="pt-2">
                  <ThemeToggle />
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
