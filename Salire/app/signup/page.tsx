"use client";

import { epilogue, poppins } from "@/app/ui/fonts";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const { setUser } = useUser();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (data.password !== data.confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      const response = await fetch("https://akil-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role: "user" }),
      });

      if (response.ok) {
        alert("signup successfull");

        localStorage.setItem("currentEmail", data.email);
        router.push("/Verify");
      } else {
        const error = await response.json();
        alert(error.message || "signup failed");
      }
    } catch (error) {
      console.error("error during sign-up:", error);
      alert("an error occured during signup");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen my-[24px]">
      <div className="flex flex-col gap-4 max-w-[400px]">
        <p
          className={`${poppins.className} text-[#25324B]  text-[32px]  leading-[38.4px] text-center`}
          style={{ fontWeight: 600 }}
        >
          Sign Up Today!
        </p>
        {/* <div className="border rounded-sm flex items-center justify-center space-x-2">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6712 8.36788H18V8.33329H10.5V11.6666H15.2096C14.5225 13.607 12.6762 15 10.5 15C7.73874 15 5.49999 12.7612 5.49999 9.99996C5.49999 7.23871 7.73874 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C5.89791 1.66663 2.16666 5.39788 2.16666 9.99996C2.16666 14.602 5.89791 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.602 18.8333 9.99996C18.8333 9.44121 18.7758 8.89579 18.6712 8.36788Z"
              fill="#FFC107"
            />
            <path
              d="M3.12749 6.12121L5.8654 8.12913C6.60624 6.29496 8.4004 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C7.29915 1.66663 4.52332 3.47371 3.12749 6.12121Z"
              fill="#FF3D00"
            />
            <path
              d="M10.5 18.3333C12.6525 18.3333 14.6083 17.5095 16.0871 16.17L13.5079 13.9875C12.6432 14.6451 11.5865 15.0008 10.5 15C8.33251 15 6.49209 13.6179 5.79876 11.6891L3.08126 13.7829C4.46043 16.4816 7.26126 18.3333 10.5 18.3333Z"
              fill="#4CAF50"
            />
            <path
              d="M18.6713 8.36796H18V8.33337H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.988L13.5079 13.9871L16.0871 16.1696C15.9046 16.3355 18.8333 14.1667 18.8333 10C18.8333 9.44129 18.7758 8.89587 18.6713 8.36796Z"
              fill="#1976D2"
            />
          </svg>
          <button
            onClick={() => signIn("google")}
            className={`${epilogue.className} text-center py-4 text-[#4640DE]`}
            style={{ fontWeight: 700 }}
          >
            Sign Up with Google
          </button>
        </div> */}
        <div className="flex items-center gap-1">
          <hr className="flex-grow border-t border-gray-300" />
          <p
            className={`${poppins.className}  text-base text-center font-normal text-[#8f9197]`}
          >
            Sign Up with Email
          </p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className={`${epilogue.className} text-[#515B6F]  text-base  leading-[25.6px]`}
              style={{ fontWeight: 600 }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="border rounded-sm px-3 py-4"
              {...register("name", { required: "Full Name is required" })}
            />
            <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col space-y-[4xp]">
            <label
              htmlFor="email"
              className={`${epilogue.className} text-[#515B6F] text-base  leading-[25.6px]`}
              style={{ fontWeight: 600 }}
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              className="border rounded-lg px-3 py-4"
              {...register("email", {
                required: { value: true, message: "email is required" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email format",
                },
              })}
            />
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col space-y-[4xp]">
            <label
              htmlFor="password"
              className={`${epilogue.className} text-[#515B6F] text-base  leading-[25.6px]`}
              style={{ fontWeight: 600 }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="border rounded-lg px-3 py-4"
              {...register("password", { required: "Password is required" })}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </div>
          <div className="flex flex-col space-y-[4xp]">
            <label
              htmlFor="confirm-password"
              className={`${epilogue.className} text-[#515B6F] text-base  leading-[25.6px]`}
              style={{ fontWeight: 600 }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="border rounded-lg px-3 py-4"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            type="submit"
            className={`${epilogue.className}border rounded-3xl border-[#2d298e] bg-[#2d298e] px-3 py-4 text-white font-bold text-base`}
            style={{ fontWeight: 600 }}
          >
            Continue
          </button>
        </form>
        <p
          className={`${epilogue.className} text-center text-[#8f9197]  text-base`}
          style={{ fontWeight: 400 }}
        >
          Already have an account?{" "}
          <a
            href="/"
            className={`${epilogue.className} text-[#2d298e] text-base `}
            style={{ fontWeight: 600 }}
          >
            Login
          </a>
        </p>
        <p
          className={`${epilogue.className} font-normal text-[#8f9197] text-[14px]`}
        >
          By clicking 'Continue', you acknowledge that you have read and
          accepted our{" "}
          <a
            href="#"
            className={`${epilogue.className}text-[#2d298e] text-[14px]`}
            style={{ fontWeight: 600 }}
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className={`${epilogue.className}text-[#2d298e] text-[14px]`}
            style={{ fontWeight: 600 }}
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
export default SignUp;
