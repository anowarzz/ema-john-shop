import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {

const {signIn}  = useContext(AuthContext)

const navigate = useNavigate();
const location = useLocation ();
const from = location.state?.from?.pathname || '/';


const handleSubmit = event => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;


  signIn(email, password)
  .then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
    navigate(from, {replace:true})
  })
  .catch(error => console.error(error))

}






  return (
    <div className="w-[350px] sm:w-[500px] h-[600px] border border-[#95A0A7] mx-auto rounded my-5">
      <h2 className="text-4xl font-semibold text-center font-lato tracking-wide py-5 text-[#2A414F]">
        {" "}
        Login{" "}
      </h2>

      <form onSubmit={handleSubmit}>

        <div className="form-control">
    <label htmlFor="email" className="pl-8 pb-2 text-lg text-[#2A414F]">
        Email
    </label>
    <input type="email" name="email" id="email" className="text-center w-[90%] mx-auto py-2 input input-bordered" required/>
        </div>


        <div className="form-control mt-4">
    <label htmlFor="password" className="pl-8 pb-2 text-lg text-[#2A414F]">
        Password
    </label>
    <input type="password" name="password" id="password" className="text-center w-[90%] mx-auto py-2 input input-bordered" required/>
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
