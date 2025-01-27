"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from "next/navigation";
import Button from "@/components/Button";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import Image from "next/image";
import resetPasswordImage from "../../../../assets/resetPassword.png";

interface IFormInput {
  password: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { resetPassword, isPending } = useResetPassword();

  const onSubmit: SubmitHandler<IFormInput> = async ({ password }) => {
    resetPassword({ password, token });
  };

  return (
    <section className="container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-primary-background py-8 lg:py-10 mx-auto">
      <div className="">
        <Image
          src={resetPasswordImage}
          alt="Social media illustration"
          className="w-full h-100"
        />
      </div>
      <div className="w-full p-6 lg:p-8  shadow rounded-xl bg-secondary-background">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-3 text-primary-text">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary-text mb-2">
              New Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full mb-0.5 rounded-md shadow focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3 bg-primary-background border-transparent"
            />
            {errors.password && (
              <p className="text-primary-red text-xs">
                *{errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-text mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value, { password }) =>
                  value === password || "Passwords must match",
              })}
              className="w-full mb-0.5 rounded-md shadow focus:border-primary-blue border outline-none py-1.5 lg:py-2 px-3 bg-primary-background border-transparent"
            />
            {errors.confirmPassword && (
              <p className="text-primary-red text-xs">
                *{errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button className="w-full" disabled={isPending} loading={isPending}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
