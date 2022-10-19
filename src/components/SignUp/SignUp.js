import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {



const handleSubmit = (event) => {

  event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const confirm = form.confirm.value;

    console.log(email, password, confirm);

}





    return (
        <div className="w-[350px] sm:w-[500px] h-[600px] border border-[#95A0A7] mx-auto rounded my-5">
        <h2 className="text-4xl font-semibold text-center font-lato tracking-wide py-5 text-[#2A414F]">
          Sign Up
        </h2>
  
        <form onSubmit={handleSubmit}>
  

          <div className="form-control">
      <label htmlFor="email" className="pl-8 pb-2 text-lg text-[#2A414F] input-group input-info">
          Email
      </label>
      <input type="email" name="email" id="" className="w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>
  
  
          <div className="form-control mt-4">
      <label htmlFor="password" className="pl-8 pb-2 text-lg text-[#2A414F]">
          Password
      </label>
      <input type="password" name="password" id="" className=" w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>

          <div className="form-control mt-4">
      <label htmlFor="confirm" className="pl-8 pb-2 text-lg text-[#2A414F]">
         Confirm Password
      </label>
      <input type="password" name="confirm" id="" className=" w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>
  
      <div className="text-center">
      <input className="border-0 hover:bg-[#026af1be] btn bg-[#c50beb] mt-8 w-[90%] hover:text-black" type="submit" value="Sign Up" />
      </div>
        </form>
  
  <p className="pt-4 text-center ">Already Have An Account ?  <Link className="font-semibold text-base text-blue-700"  to = '/login'>Login</Link>  </p>
      </div>
    );
};

export default SignUp;