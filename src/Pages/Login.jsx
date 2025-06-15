import React, { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router";
import { valueContext } from "../Layout";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { auth } from "../firebase.config";

const Login = () => {
  const provider = new GoogleAuthProvider();

  // Login with Google ------------------
  const handleGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
        navigate("/")
      })
      .catch((error) => {
        // alert(`${error.code}: ${error.message}`);
        Swal.fire({
          icon: "Error",
          title: "Oops...",
          text: `${error.code}: ${error.message}`,
        });
      });
  };


  const { handleLogin } = useContext(valueContext);

  // Redirect after Login -----
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginEmail = e.target.email.value;
    const loginPassword = e.target.password.value;
    console.log(loginEmail, loginPassword);
    //   navigate(from, {replace:true});
    navigate(from, { replace: true });
    handleLogin(loginEmail, loginPassword);
  };
  return (
    <div className="">
      <div className="w-full max-w-md mx-auto mt-10 p-4 rounded-md shadow sm:p-8 bg-gray-200 text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center text-gray-900">
          Don't have an account?
          <Link to="/signup" className="focus:underline hover:underline">
            Register here
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignin}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abcd@gmail.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-black focus:border-[var(--primary)]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-black focus:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-sm mainbtn"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
