import React, { useState } from "react";
import { LogInSchema } from "../validation/LoginValidation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [button, setButton] = useState("Login");

  const form = useForm({ resolver: zodResolver(LogInSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const navigate = useNavigate();

  const handletobackend = (data) => {
    setButton("...loading");
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="flex justify-center h-[100vh] items-center ">
      <section>
        <div>
          <div class=" bg-gray-100  rounded-lg p-8 flex flex-col  w-[40vw] mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium ">Sign Up</h2>
            <form onSubmit={handleSubmit(handletobackend)}>
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
              <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {button}
              </button>
              <Link to="/register">
                <p class="text-xs text-blue-500 mt-3">Register here</p>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
