"use client";
import React from "react";
import Image from "next/image";
import bannerImage from "../../assets/friends.svg";
import Button from "@/components/Button";
import { useMe } from "@/hooks/auth/useMe";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CommunityStats from "@/components/CommunityStats";

const Home = () => {
  const { user } = useMe();

  return (
    <>
      <section className="relative overflow-hidden min-h-[calc(100vh-68px)] flex justify-center">
        {/* Bubble effect */}
        <div className="bubble-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className={`bubble bubble-${index + 1}`}></div>
          ))}
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center mx-auto px-5 z-10 relative">
          <div className="">
            <Image
              src={bannerImage}
              alt="Social media illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right side: Text and CTAs */}
          <div className="text-center md:text-left">
            <h2 className="text-6xl md:text-8xl mb-4  font-semibold text-primary-blue logo-text">
              TechTalk
            </h2>
            <p className="text-base md:text-lg text-secondary-text mb-8">
              Join a community where tech enthusiasts find solutions. From
              expert advice to practical tips, we simplify the digital world,
              making technology easier to understand and navigate. Discover a
              place that empowers your tech journey.
            </p>
            <Button
              className="mx-auto mb-4 md:mb-0 md:mx-0 md:block text-center md:text-left"
              href={user ? "/feeds" : "/sign-in"}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>
      <CommunityStats />
      <WhyUs />
      <Testimonials />
    </>
  );
};

export default Home;
