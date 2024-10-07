import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary-background py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-secondary-text">
        <p>
          &copy; 2024{" "}
          <span className="text-xs font-medium text-primary-blue logo-text">
            TechTalk
          </span>
          . All rights reserved.
        </p>
        <a
          href="/privacy"
          className="text-secondary-text hover:text-primary-text transition-all duration-300 font-semibold"
        >
          Privacy Policy
        </a>{" "}
        <span className="text-primary-blue font-bold">|</span>{" "}
        <a
          href="/terms"
          className="text-secondary-text hover:text-primary-text transition-all duration-300 font-semibold"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
