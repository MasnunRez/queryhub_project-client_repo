import React, { createContext } from "react";
import NavBar from "./Components/NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Components/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

export const valueContext = createContext();

const Layout = () => {
    const navigate = useNavigate()
  const handleSignup = (regEmail, regPassword) => {
    createUserWithEmailAndPassword(auth, regEmail, regPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        // alert('Registration succeess')
        // Swal.fire({
        //   title: "Registered Successfully!",
        //   icon: "success",
        //   draggable: true,
        // });
        navigate("/");
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  const contextProps = {
    handleSignup,
  };
  return (
    <div>
      <valueContext.Provider value={contextProps}>
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </valueContext.Provider>
    </div>
  );
};

export default Layout;
