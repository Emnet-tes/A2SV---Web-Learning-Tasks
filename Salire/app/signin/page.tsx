"use client";
import { epilogue, poppins } from "@/app/ui/fonts";
import Cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/UserContext";
import { toast } from "react-toastify";
const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { setIsLoggedIn } = useUser();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("https://akil-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        localStorage.setItem("accessToken", result.data.accessToken);

        toast.success("Logged in", {
          position: "top-center",
          autoClose: 2000,
        });

        setIsLoggedIn(true);
        setTimeout(() => {
          Cookie.set("currentUser", result.data.accessToken, {
            expires: 240 / 1440,
            path: "/",
          });
          router.push("/Home");
        }, 1999);
      } else {
        toast.error("Invalid user data", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Login failed", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-between mx-4 md:mx-40 space-y-10 md:space-y-0 md:flex-row md:space-x-16">
      {/* Image for larger screens */}
      <div className="hidden md:block">
        <img
          src="./images/home.png"
          alt="Home"
          className="max-w-[300px] md:max-w-full h-auto"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col items-center md:items-end w-full md:w-auto">
        <div className="flex flex-col min-w-[300px] md:min-w-[400px] space-y-[24px] w-full">
          <p
            className={`${poppins.className} text-center text-[#202430]`}
            style={{ fontWeight: 900, fontSize: 32 }}
          >
            Welcome Back,
          </p>
          <div className="flex">
            <hr className="flex-grow border-t border-gray-300" />
            <p className="mx-32"></p>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col w-full">
              <label
                htmlFor="email"
                className={`${epilogue.className} text-[#515B6F] text-base leading-[25.6px]`}
                style={{ fontWeight: 600 }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="border rounded-md px-3 py-4 w-full"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="password"
                className={`${epilogue.className} text-[#515B6F] text-base leading-[25.6px]`}
                style={{ fontWeight: 600 }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="border rounded-md px-3 py-4 w-full"
                {...register("password", { required: "Password is required" })}
              />
            </div>
            <button
              type="submit"
              className="border rounded-full border-[#2d298e] bg-[#2d298e] px-3 py-[12px] text-white font-bold text-base w-full"
            >
              Login
            </button>
          </form>
          <p className="text-[#8f9197] font-normal text-base text-center md:text-left">
            Don't have an account?{" "}
            <Link
              className="text-[#2d298e] text-[14px] font-semibold"
              href="./signup"
              key="id"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
