"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/button";




const Login: React.FC = () => {


  const [error, setError] = useState("");

  const router = useRouter();

  const onSubmit = async () => {
  setError("helwow")
  };
  const changeLanguage = (lang: string) => {
    router.replace(`/${lang}/login`);
  };
  return (
    <div
      className="flex items-center justify-center h-screen bg-slate-900 font-serif"
    
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <select onChange={(e) => changeLanguage(e.target.value)} name="" id="">
          <option value={""}></option>
          <option value="ar">العربية</option>
          <option value="en">English</option>
        </select>
        <h2 className="text-2xl font-bold mb-4 items-center">
         
        </h2>
        <form onSubmit={()=>onSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
             
            </label>
            <input
              type="email"
              id="email"
             
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 text-black"
             
            />
           
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
           
            </label>
            <input
              type="password"
              id="password"
             
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500 text-black"
              placeholder={"enter password"}
            />
           
          </div>
          <div className="flex justify-between items-center mb-4">
            <a
              href="forgetPassword/"
              className="text-blue-500 hover:text-blue-700"
            >
             
            </a>
          </div>
          <Button
            type="submit"
            label='enter'
            className={`w-full`}
          />
        </form>
        <div className="mt-4 text-center"></div>
        <div className="text-red-700 text-center">{error}</div>
      </div>
      {/* 
      {error && <ToastContainer message={error} type="error" key={error} />}
      {success && <ToastContainer message={success} type="success" key={success} />} */}
    </div>
  );
};

export default Login;
