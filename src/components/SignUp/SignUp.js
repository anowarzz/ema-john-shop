import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const SignUp = () => {

    const [error, setError] = useState();
    const {createUser}  = useContext(AuthContext)





const handleSubmit = (event) => {

  event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    setError("You have entered an invalid email address!")
    return;
  }

    if(password.length < 6){
        setError("Password should be 6 character or more")
        return;
    }

   if(password !== confirm){
    setError("Your password did not match")
    return;
   }

   createUser(email, password)
   .then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
   })
   .catch(error => console.error(error))

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
      <input type="email" name="email" id="email" className="w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>
  
  
          <div className="form-control mt-4">
      <label htmlFor="password" className="pl-8 pb-2 text-lg text-[#2A414F]">
          Password
      </label>
      <input type="password" name="password" id="password" className=" w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>

          <div className="form-control mt-4">
      <label htmlFor="confirm" className="pl-8 pb-2 text-lg text-[#2A414F]">
         Confirm Password
      </label>
      <input type="password" name="confirm" id="confirm" className=" w-[90%] mx-auto py-2 input input-bordered" required/>
          </div>
  
      <div className="text-center">
      <input className="border-0 hover:bg-[#026af1be] btn bg-[#c50beb] mt-8 w-[90%] hover:text-black" type="submit" value="Sign Up" />
      </div>
        </form>
        <p className='text-lg text-red-500 text-center font-semibold mt-2'>{error}</p>

       
  <p className="pt-2 text-center ">Already Have An Account ?  <Link className="font-semibold text-base text-blue-700"  to = '/login'>Login</Link>  </p>
  
      </div>
    );
};

export default SignUp;