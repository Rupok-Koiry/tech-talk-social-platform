"use client";
import Button from "@/components/Button";
import React from "react";
import toast from "react-hot-toast";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };
  return (
    <>
      <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-background py-8 lg:py-10 mx-auto">
        <div className="h-full">
          <p className="mt-3 mb-12 text-lg text-primary-text">
            We&apos;re here to assist you! If you have any questions or need
            assistance, please feel free to reach out to us.
          </p>
          <ul className="mb-6 md:mb-0">
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue hover:bg-blue-500 text-gray-50 transition ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text ">
                  Our Address
                </h3>
                <p className="text-secondary-text ">Grafton Street, Dublin</p>
                <p className="text-secondary-text ">Ireland</p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue hover:bg-blue-500 text-gray-50 transition ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text ">
                  Contact
                </h3>
                <p className="text-secondary-text ">Phone: +1 234 567 890</p>
                <p className="text-secondary-text ">
                  Email: support@techtalk.com
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary-blue hover:bg-blue-500 text-gray-50 transition ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <div className="ml-4 mb-4">
                <h3 className="mb-2 text-lg font-medium leading-6 text-primary-text">
                  Working Hours
                </h3>
                <p className="text-secondary-text ">
                  Monday - Friday: 08:00 - 17:00
                </p>
                <p className="text-secondary-text ">
                  Saturday &amp; Sunday: 08:00 - 12:00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div
          className="w-full p-6 lg:p-8  shadow-lg rounded-xl bg-secondary-background"
          id="form"
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 text-primary-text">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="name"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full mb-0.5 rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                    name="name"
                  />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label
                    htmlFor="email"
                    className="pb-1 text-xs uppercase tracking-wider"
                  ></label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full mb-0.5 rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                    name="email"
                  />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="textarea"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <textarea
                  id="textarea"
                  name="message"
                  cols={30}
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full mb-0.5 border-secondary-grey rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3"
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <Button className="w-full ">Send message</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
