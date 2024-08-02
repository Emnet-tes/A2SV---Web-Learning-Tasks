import { useForm, FieldErrors, useWatch } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import Success from "./Success";
function ContactForm() {
  interface formValues {
    name: string;
    email: string;
    message: string;
  }
  const form = useForm<formValues>();
  const { register, control, handleSubmit, formState, reset,trigger } = form;
  const { errors, isSubmitSuccessful, isSubmitting, isDirty, isValid } =formState;
  const [sucess,setSucess] = useState(false);


  function onSubmit(data: formValues) {
    console.log(data);
    setSucess(true);
  }

  const onError = (errors: FieldErrors<formValues>) => {
    console.log("form errors", errors);
  };
  
  
  useEffect(()=>{
    if(isSubmitSuccessful)
      { reset()}
  },[isSubmitSuccessful,reset]);

  


  return (
    <div className="h-14 bg-[url('../images/background.jpg')] bg-no-repeat bg-cover bg-center  flex flex-row min-h-screen justify-center items-center">
      <form
        className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg max-w-sm w-full  mx-auto border border-grey-500 rounded p-6 "
        noValidate
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div>
          <h2 className="text-center text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Form
          </h2>
        </div>

        <div className="mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="name"
          >
            Name
          </label>

          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="name"
            type="text"
            placeholder="enter name..."
            {...register("name", {
              required: { value: true, message: "name is required" },
            })}
          />
          <p className="text-red-500 text-xs mt-1">{errors.name?.message}</p>
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="email"
            type="email"
            placeholder="l@gmail.com"
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
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="message"
          >
            Message
          </label>

          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            id="message"
            type="text"
            placeholder="message"
            {...register("message", {
              required: { value: true, message: "message is required" },
            })}
          />
          <p className="text-red-500 text-xs mt-1">{errors.message?.message}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`text-white
                bg-blue-700 
                hover:bg-blue-800 focus:ring-4 
                focus:ring-blue-300 font-medium 
                rounded-lg text-sm
                px-5 py-2.5 me-2 mb-2 
                dark:bg-blue-600 
                dark:hover:bg-blue-700 
                focus:outline-none 
                dark:focus:ring-blue-800
                border-transparent
                disabled:opacity-50 
              disabled:cursor-not-allowed
              disabled:bg-transparent
              disabled:dark:bg-gray-600
            
            `}
            type="submit"
            disabled={!isDirty||!isValid|| isSubmitting}
          >
            Submit
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </form>
      {sucess && <Success onClose={() => setSucess(false)} />}
      <DevTool control={control} />
    </div>
  );
}

export default ContactForm;
