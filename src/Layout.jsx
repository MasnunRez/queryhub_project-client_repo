import React, { createContext, useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Components/Footer";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config";

export const valueContext = createContext();

const Layout = () => {
  const navigate = useNavigate();

  // User Signup setup - ---------
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
  // User Login Setup --------------------
  const handleLogin = (loginEmail, loginPassword) => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  // Logout set -----------------
  const logoutUser = () => {
    return signOut(auth);
  };

  // Auth observer setup -------------
  const [user, setUser] = useState(null);
  // Loading state set ------------
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  });

  const contextProps = {
    handleSignup,
    handleLogin,
    user,
    setUser,
    loading,
    logoutUser
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
