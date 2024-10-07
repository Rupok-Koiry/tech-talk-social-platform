"use client";
import { useMe } from "@/hooks/auth/useMe";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";
import { GoVerified } from "react-icons/go";

const Greeting = () => {
  const { user, isLoading } = useMe();
  if (isLoading) return <Spinner />;

  return (
    <div className="flex items-center space-x-2 gap-3">
      <Image
        src={user?.profilePic}
        alt="avatar"
        className="w-14 h-14 rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">Hello, {user?.name}</h2>
          {user?.isVerified && (
            <GoVerified className="text-primary-blue" size={22} />
          )}
        </div>
        <Button
          className="text-sm w-full"
          href={user?.role === "admin" ? "/dashboard/admin" : "/dashboard/user"}
        >
          Go to {user?.role === "admin" ? "Dashboard" : "My Profile"}
        </Button>
      </div>
    </div>
  );
};

export default Greeting;
