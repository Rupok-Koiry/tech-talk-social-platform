"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { useLogout } from "@/hooks/auth/useLogout";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { BiChevronDown, BiUser, BiCog, BiBookmark } from "react-icons/bi";
import ThemeToggle from "./ThemeToggler";
import Image from "next/image";
import { BsSpeedometer } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { FaAmazonPay, FaUser } from "react-icons/fa";
import { LuActivitySquare } from "react-icons/lu";

const Navbar = () => {
  const { user } = useMe();
  const { logout } = useLogout();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobileProfileOpen, setMobileProfileOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (isProfileDropdownOpen) setProfileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const profileMenuItems =
    user?.role === "admin"
      ? [
          {
            icon: <BsSpeedometer className="text-lg" />,
            label: "Dashboard",
            href: "/dashboard/admin",
          },
          {
            icon: <CiFileOn className="text-lg" />,
            label: "Manage Posts",
            href: "/dashboard/admin/manage-posts",
          },
          {
            icon: <FaUser className="text-lg" />,
            label: "Manage Users",
            href: "/dashboard/admin/manage-users",
          },
          {
            icon: <FaAmazonPay className="text-lg" />,
            label: "Make Payment",
            href: "/dashboard/admin/payments",
          },
          {
            icon: <LuActivitySquare className="text-lg" />,
            label: "Activity Logs",
            href: "/dashboard/admin/activity-logs",
          },
        ]
      : [
          {
            icon: <BiUser className="text-lg" />,
            label: "Dashboard",
            href: "/dashboard/user",
          },
          {
            icon: <BiBookmark className="text-lg" />,
            label: "My Posts",
            href: "/dashboard/user/my-posts",
          },
          {
            icon: <BiCog className="text-lg" />,
            label: "Make Payment",
            href: "/dashboard/user/payment",
          },
        ];
  return (
    <nav className="bg-primary-background shadow-primary-shadow py-4 sticky top-0 z-30">
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
                        className="absolute right-0 my-2 w-56 bg-primary-background rounded-lg shadow-lg border border-primary-blue py-2"
                      >
                        <div className="px-4 py-2 border-b  border-secondary-text">
                          <p className="font-medium text-primary-text">
                            {user.name}
                          </p>
                          <p className="text-sm text-secondary-text truncate">
                            {user.email}
                          </p>
                        </div>

                        {profileMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center gap-2 px-4 py-2 text-primary-text hover:text-primary-blue transition duration-200"
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </Link>
                        ))}

                        <button
                          onClick={() => logout()}
                          className="w-full flex items-center gap-2 px-4 py-2 text-red-600 transition duration-200"
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
                {/* Mobile Profile Section */}
                <div className="border-b border-secondary-text pb-4">
                  <button
                    onClick={() => setMobileProfileOpen(!isMobileProfileOpen)}
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.profilePic}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-primary-blue"
                      />
                      <div className="text-left">
                        <p className="font-medium text-primary-text">
                          {user.name}
                        </p>
                        <p className="text-sm text-secondary-text truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isMobileProfileOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BiChevronDown className="text-xl text-primary-text" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isMobileProfileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Navigation Links */}
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

                <div className="pt-2 border-t border-secondary-text">
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
