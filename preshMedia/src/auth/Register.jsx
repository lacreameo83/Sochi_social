import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../validation/RegisterValidation";
import { useNavigate } from "react-router-dom";

function Register() {
  const [button, setButton] = useState("Resiter");
  const form = useForm({ resolver: zodResolver(signInSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();
  const handletobackend = () => {
    setButton("...loading");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div className="flex justify-center h-[100vh] items-center shadow-md">
      <section class="text-gray-600 body-font">
        {/* <div class="container px-5 py-24 mx-auto flex flex-wrap items-center"> */}
        <div class=" bg-gray-100  rounded-lg p-8 flex flex-col  w-[40vw] mt-10 md:mt-0">
          <h2 className="text-blue-600 m-auto font-[900] text-[20px] ">
            Sochi Social
          </h2>
          <h2 class="text-gray-900 text-sm font-medium title-font mb-5">
            Register Here
          </h2>
          <form onSubmit={handleSubmit(handletobackend)}>
            <div class="relative mb-4">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.fullName && (
              <div className="text-red-600">{errors.fullName.message}</div>
            )}
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.email && (
              <div className="text-red-600">{errors.email.message}</div>
            )}
            {/* password */}
            <div class="relative mb-4">
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.password && (
              <div className="text-red-600">{errors.password.message}</div>
            )}
            {/* comfirm pass word */}
            <div class="relative mb-4">
              <label
                for="comfirmpassword"
                class="leading-7 text-sm text-gray-600"
              >
                Comfirm password
              </label>
              <input
                {...register("comfirmpassword")}
                type="comfirmpassword"
                id="comfirmpassword"
                name="comfirmpassword"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {errors.comfirmpassword && (
              <div className="text-red-600">
                {errors.comfirmpassword.message}
              </div>
            )}
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {button}
            </button>
          </form>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}

export default Register;
