"use client";

import Button from "@/components/Button";
import { useForgotPassword } from "@/hooks/auth/useForgotPassword";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import forgotPasswordImage from "../../../assets/forgotpassword.svg";

interface IFormInput {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { forgotPassword, isPending } = useForgotPassword();

  const onSubmit: SubmitHandler<IFormInput> = async ({ email }) => {
    forgotPassword(email);
  };

  return (
    <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-background py-8 lg:py-10 mx-auto">
      <div className="">
        <Image
          src={forgotPasswordImage}
          alt="Social media illustration"
          className="w-auto h-auto md:h-[400px] mx-auto"
        />
      </div>
      <div className="w-full p-6 lg:p-8  shadow-lg rounded-xl bg-secondary-background">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 text-primary-text">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-text mb-2">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full mb-0.5  rounded-md shadow-sm focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3 bg-secondary-background"
            />
            {errors.email && (
              <p className="text-primary-red text-xs">{errors.email.message}</p>
            )}
          </div>

          <Button className="w-full" loading={isPending} disabled={isPending}>
            Submit
          </Button>

          <div className="flex justify-end items-center text-sm text-secondary-text font-medium">
            <label className="ml-2 block text-sm text-primary-text">
              Remembered your password?{" "}
              <a
                href="/sign-in"
                className="text-secondary-text hover:text-primary-text transition-all duration-300 font-semibold"
              >
                Sign In
              </a>
            </label>
          </div>
        </form>

        <footer className="mt-4 text-center text-sm text-secondary-text font-medium">
          <Link
            href="/privacy-policy"
            className="text-secondary-text hover:text-primary-text transition-all duration-300 font-semibold"
          >
            Privacy Policy
          </Link>{" "}
          <span className="text-primary-blue font-bold">|</span>{" "}
          <Link
            href="/terms-of-service"
            className="text-secondary-text hover:text-primary-text transition-all duration-300 font-semibold"
          >
            Terms of Service
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default ForgotPassword;
