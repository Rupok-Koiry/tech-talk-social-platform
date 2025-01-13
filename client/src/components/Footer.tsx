import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-background text-primary-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <p className="text-2xl mb-3 font-medium text-primary-blue logo-text">
              TechTalk
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-primary-background  text-primary-blue hover:text-secondary-blue font-medium rounded-md focus:outline-none"
              >
                <FaFacebookSquare
                  className="text-primary-blue hover:text-secondary-blue hover:scale-125 transition-all ease-in duration-200"
                  size={26}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-primary-background  text-primary-blue hover:text-secondary-blue font-medium rounded-md focus:outline-none"
              >
                {/* <FaTwitter className="text-primary-blue" size={28} /> */}
                <FaSquareXTwitter
                  className="text-primary-blue hover:text-secondary-blue hover:scale-125 transition-all ease-in duration-200"
                  size={26}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-primary-background  text-primary-blue hover:text-secondary-blue font-medium rounded-md focus:outline-none"
              >
                <FaInstagramSquare
                  className="text-primary-blue hover:text-secondary-blue hover:scale-125 transition-all ease-in duration-200"
                  size={26}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-primary-background  text-primary-blue hover:text-secondary-blue font-medium rounded-md focus:outline-none"
              >
                <FaLinkedin
                  className="text-primary-blue hover:text-secondary-blue hover:scale-125 transition-all ease-in duration-200"
                  size={26}
                />
              </a>
            </div>
          </div>

          {/* Links to Legal Pages */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Links</h2>
            <div className="flex flex-col space-y-2">
              <Link
                href="/sign-in"
                className="text-secondary-text hover:text-primary-blue transition-all ease-in duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="text-secondary-text hover:text-primary-blue transition-all ease-in duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400">
              <span className="text-primary-blue font-medium">Email</span>:{" "}
              <a
                href="mailto:info@example.com"
                className="text-secondary-text hover:text-secondary-blue transition-all ease-in duration-300"
              >
                support@drivenow.com
              </a>
            </p>
            <p className="text-gray-400">
              <span className="text-primary-blue font-medium">Phone</span>:{" "}
              <a
                href="tel:+1234567890"
                className="text-secondary-text hover:text-secondary-blue transition-all ease-in duration-300"
              >
                +1 234 567 890
              </a>
            </p>
            <p className="text-gray-400">
              <span className="text-primary-blue font-medium">Address</span>:{" "}
              <a
                href="tel:+1234567890"
                className="text-secondary-text hover:text-secondary-blue transition-all ease-in duration-300"
              >
                Grafton Street, Dublin, Ireland
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-primary-blue pt-4 text-center">
          <p className="text-primary-text">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium">
              Tech <span className="text-primary-blue">Talk</span>
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
