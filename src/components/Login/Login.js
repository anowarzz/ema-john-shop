import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[350px] sm:w-[500px] h-[600px] border border-[#95A0A7] mx-auto rounded my-5">
      <h2 className="text-4xl font-semibold text-center font-lato tracking-wide py-5 text-[#2A414F]">
        {" "}
        Login{" "}
      </h2>

      <form>

        <div className="form-control">
    <label htmlFor="email" className="pl-8 pb-2 text-lg text-[#2A414F]">
        Email
    </label>
    <input type="email" name="email" id="" className="text-center w-[90%] mx-auto py-2 input input-bordered" required/>
        </div>


        <div className="form-control mt-4">
    <label htmlFor="password" className="pl-8 pb-2 text-lg text-[#2A414F]">
        Password
    </label>
    <input type="password" name="password" id="" className="text-center w-[90%] mx-auto py-2 input input-bordered" required/>
        </div>

    <div className="text-center">
    <input className="border-0 hover:bg-[#026af1be] btn bg-[#c50beb] mt-8 w-[90%] hover:text-black" type="submit" value="Login" />
    </div>
      </form>

<p className="pt-4 text-center ">New to Ema-John ?  <Link className="font-semibold text-base text-blue-700"  to = '/signup'> Create A New Account</Link>  </p>
    </div>
  );
};

export default Login;
