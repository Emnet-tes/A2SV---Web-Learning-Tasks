"use client";
import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useUser } from "@/contexts/UserContext";

import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { use } from "chai";

const Verify: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, isLoggedIn, setIsLoggedIn } = useUser();

  const [curr_email, setCurrEmail] = useState<string | null>(null); // Initialize state for email
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(60);
  
  useEffect(() => {
    const email = localStorage.getItem("currentEmail");
    setCurrEmail(email);
  }, []);
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    
  });

  const handleChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const onSumbit = async () => {
    if (!curr_email) {
        toast.error("Email not found", {
          position: "top-center",
          autoClose: 2000,
        });
      return;
    }

    try {
      const otpString = otpValues.join("");
      const response = await fetch(
        "https://akil-backend.onrender.com/verify-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: curr_email, OTP: otpString }),
        }
      );

      if (response.ok) {
        setIsLoggedIn(true);
        router.push("./signin");
      } else {
      }
    } catch (error) {
        toast.error("Unknown error", {
          position: "top-center",
          autoClose: 2000,
        });
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen my-48">
      <div className="flex flex-col items-center w-40p gap-9">
        <p className="text-[#25324B] font-black text-[32px] leading-10 ">
          Verify Email
        </p>
        <p className="text-[#7C8493] font-normal text-sm leading-6">
          We've sent a verification code to the email address you provided. To
          complete the verification process, please enter the code here.
        </p>
        <form
          onSubmit={handleSubmit(onSumbit)}
          className="flex  flex-col gap-5 mt-6 justify-between w-100p"
        >
          <div className="flex gap-5 justify-between ">
            {otpValues.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                className="border-2 rounded px-3 py-2 text-center max-w-20 font-epilogue text-[#D6DDEB] font-medium text-[34px] bg-[#F8F8FD] border-[#b1aff1] focus:border-[#b1aff1]"
                pattern="[0-9]*"
                inputMode="numeric"
                onKeyDown={(e) => {
                  const target = e.target as HTMLInputElement;
                  if (e.key === "Backspace" && value === "") {
                    const previousInput =
                      target.previousElementSibling as HTMLInputElement;
                    if (previousInput) previousInput.focus();
                  }
                  if (e.key === "ArrowRight") {
                    const nextInput =
                      target.nextElementSibling as HTMLInputElement;
                    if (nextInput) nextInput.focus();
                  }
                }}
              />
            ))}
          </div>
          <p className="font-epilogue text-sm font-normal text-[#7C8493] text-center">
            You can request to{" "}
            <a className="font-semibold text-[#2d298e]" href="#">Resend Code</a> in{" "}
            <span className="block text-[#2d298e] font-semibold">{timeLeft}</span>
          </p>
          <button
            type="submit"
            className="border rounded-3xl border-[#2d298e] bg-[#2d298e] px-3 py-4 text-white font-bold text-base"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
