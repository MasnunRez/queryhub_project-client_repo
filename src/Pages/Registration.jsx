import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { valueContext } from "../Layout";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Registration = () => {
  const { handleSignup, setUser } = useContext(valueContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regName = e.target.name.value;
    const regPhotoUrl = e.target.photoUrl.value;
    const regEmail = e.target.email.value;
    const regPassword = e.target.password.value;
    console.log(regEmail, regPassword);
    // navigate(from, {replace:true});
    handleSignup(regEmail, regPassword)
      .then((userCredential) => {
        const user = userCredential.user;

        return updateProfile(user, {
          displayName: regName,
          photoURL: regPhotoUrl,
        }).then(() => {
          setUser({
            ...user,
            displayName: regName,
            photoURL: regPhotoUrl,
          });
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="">
      <div className="w-full max-w-md mx-auto mt-10 p-4 rounded-md shadow sm:p-8 bg-gray-200 text-black">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Please Register
        </h2>
        <p className="text-sm text-center text-gray-900">
          Already have an account?
          <Link to="/login" className="focus:underline hover:underline">
            Login here
          </Link>
        </p>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
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
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-black focus:border-[var(--primary)]"
              />
            </div>
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
              <div className="">
                <label htmlFor="" className="text-sm">
                  Photo URL
                </label>
              </div>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Profile image URL here"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-300 text-black focus:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mainbtn w-full px-8 py-3 font-semibold rounded-md bg-[var(--primary-dark)] hover:bg-[var(--primary-light)] text-gray-900"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
