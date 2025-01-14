import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaPencilAlt,
  FaBriefcase,
  FaCheckCircle,
  FaMedal,
} from "react-icons/fa";

interface IProfileInfo {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  profilePic?: string;
  joinedDate?: string;
  role?: string;
  status?: string;
}

const ProfileInfo = ({ user }: { user: IProfileInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Main Card */}
      <div className="bg-secondary-background rounded-2xl shadow-primary-shadow">
        {/* Content Section */}
        <div className="p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6 sm:flex-wrap">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-primary-background shadow-lg">
                <Image
                  src={user.profilePic || "/default-avatar.png"}
                  alt="Profile"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-primary-blue rounded-full p-1.5">
                <FaCheckCircle className="w-5 h-5 text-primary-background" />
              </div>
            </motion.div>

            {/* Name and Quick Info */}
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary-text mb-1 break-words">
                {user.name}
              </h2>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-primary-background/80 mb-2">
                <FaBriefcase className="w-4 h-4" />
                <span className="capitalize">{user.role || "Member"}</span>
                <span className="mx-2 hidden sm:block">•</span>
                <FaMedal className="w-4 h-4 hidden sm:block" />
                <span>{user.status || "Active"}</span>
              </div>
              <Link href="/dashboard/user/edit-profile">
                <motion.button
                  className="flex items-center justify-center py-2 px-3 rounded-lg bg-primary-background text-secondary-text hover:bg-primary-blue hover:text-primary-background transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPencilAlt className="w-4 h-4 mr-2" />
                  <span>Edit Profile</span>
                </motion.button>
              </Link>
            </div>

            {/* Edit Button */}
          </div>

          {/* Grid Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  gap-6 sm:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-primary-text flex items-center gap-2">
                <span className="inline-block p-2 rounded-lg bg-gradient-to-br from-primary-blue to-primary-green text-primary-background">
                  <FaUserCircle className="w-5 h-5" />
                </span>
                Contact Details
              </h2>
              <div className="space-y-4">
                <ContactCard
                  icon={<FaEnvelope />}
                  label="Email Address"
                  value={user.email}
                  color="bg-primary-blue"
                />
                <ContactCard
                  icon={<FaPhoneAlt />}
                  label="Phone Number"
                  value={user.phone || "Not provided"}
                  color="bg-primary-green"
                />
                <ContactCard
                  icon={<FaMapMarkerAlt />}
                  label="Location"
                  value={user.address || "Not provided"}
                  color="bg-primary-red"
                />
              </div>
            </motion.div>

            {/* Account Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-primary-text flex items-center gap-2">
                <span className="inline-block p-2 rounded-lg bg-gradient-to-br from-primary-red to-primary-blue text-primary-background">
                  <FaUserCircle className="w-5 h-5" />
                </span>
                Account Information
              </h2>
              <AccountCard
                joinedDate={user.joinedDate || "Recently"}
                role={user.role || "Member"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ContactCard = ({
  icon,
  label,
  value,
  color,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  color: string;
}) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-background/50 hover:bg-primary-background transition-colors duration-200">
    <div className={`p-3 rounded-lg ${color} text-primary-background`}>
      {icon}
    </div>
    <div>
      <p className="text-sm text-secondary-text">{label}</p>
      <p className="text-primary-text font-medium">{value}</p>
    </div>
  </div>
);

const AccountCard = ({
  joinedDate,
  role,
}: {
  joinedDate: string;
  role: string;
}) => (
  <div className="p-6 rounded-xl bg-primary-background/50 hover:bg-primary-background transition-colors duration-200">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary-green text-primary-background">
        <FaRegCalendarAlt className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-primary-text">Account Status</h3>
        <p className="text-secondary-text mt-1">
          Joined {joinedDate} • Active Member
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-blue text-primary-background">
            Verified
          </span>
          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary-green text-primary-background capitalize">
            {role}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileInfo;
