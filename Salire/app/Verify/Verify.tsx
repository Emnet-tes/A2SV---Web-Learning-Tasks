"use client";
import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import { useUser } from "@/contexts/UserContext";

import { useRouter } from "next/navigation";



const Verify: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, isLoggedIn, setIsLoggedIn } = useUser();

  const [curr_email, setCurrEmail] = useState<string | null>(null); // Initialize state for email
  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const router = useRouter();

  // Safely fetch `localStorage` value
  useEffect(() => {
    const email = localStorage.getItem("currentEmail");
    setCurrEmail(email);
  }, []);

  const handleChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  };

  const onSumbit = async () => {
    if (!curr_email) {
      alert("Email not found. Please try again.");
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
      console.error("Error during verification:", error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen my-48">
      <div className="flex flex-col items-center w-40p gap-9">
        {/* Rest of your JSX code */}
      </div>
    </div>
  );
};

export default Verify;
