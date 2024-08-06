import { Register } from "@/components/auth/register";

export default function Home() {
  return (
    <Register />
    /*<div className="flex flex-col h-screen bg-gray-100">
       <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <h5
          className={`${poppins.className} text-[24px] leading-[120%] text-[#25324B]`}
          style={{ fontWeight: 100 }}
        >
          Jobs
        </h5>
        <div className="flex space-x-4">
          <p
            className={`${epilogue.className} text-[16px] leading-[160%] text-[#7C8493] cursor-pointer`}
            style={{ fontWeight: 400 }}
          >
            Sign In
          </p>
          <p
            className={`${epilogue.className} text-[16px] leading-[160%] text-[#25324B] cursor-pointer`}
            style={{ fontWeight: 500 }}
          >
            Log In
          </p>
        </div>
      </header>
      <main className=" justify-center items-center flex  p-5 space-x-[40px]">
        <div className="flex-col  items-center space-y-8 ">
          <h5
            className={`${poppins.className} text-[32px] leading-[120%] text-[#25324B]`}
            style={{ fontWeight: 500 }}
          >
            Find Job Opportunities
          </h5>
          <Link href="/landingpage"> <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            
          >
            Get Started
          </button></Link>
         
        </div>
        <Image
          src="/images/home.png"
          alt="job search"
          className="rounded-lg object-cover object-center"
          width={500}
          height={450}
        />
      </main>
    </div> */
  );
}
