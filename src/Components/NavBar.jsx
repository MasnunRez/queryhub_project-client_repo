import React, { useContext } from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router";
import { valueContext } from "../Layout";

// Private Route ---
export const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(valueContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center mt-[300px]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-600"></div>
      </div>
    );
  }
  if(!user || !user?.email){
    return <Navigate to="/login" state={{from:location.pathname}} replace></Navigate>
  }
  return children
};

const NavBar = () => {
  // Bring Logout auth ---------------
  const { user, logoutUser } = useContext(valueContext);
  // console.log(user);
  // Set Logout User ------------------------------
  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        alert("Logout Error!!!", error);
      });
  };
  return (
    <div className=" shadow-sm">
      <div className="max-w-[1400px] mx-auto navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
              className="border border-gray-300 p-2 hover:text-[var(--primary)]"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="border border-gray-300 p-2 hover:text-[var(--primary)]"
              to="queries"
            >
              Queries
            </NavLink>

            {user && (
              <>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="recforme"
                >
                  Recommendation For Me
                </NavLink>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="myqueries"
                >
                  My Queries
                </NavLink>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="myrecommendation"
                >
                  My Recommendation
                </NavLink>
              </>
            )}
            </ul>
          </div>
          <a href="/" className="font-bold text-2xl">
            <span className="text-[var(--primary)]">Q</span>uery{" "}
            <span className="text-[var(--primary)]">H</span>ub
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <NavLink
              className="border border-gray-300 p-2 hover:text-[var(--primary)]"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="border border-gray-300 p-2 hover:text-[var(--primary)]"
              to="queries"
            >
              Queries
            </NavLink>

            {user && (
              <>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="recforme"
                >
                  Recommendation For Me
                </NavLink>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="myqueries"
                >
                  My Queries
                </NavLink>
                <NavLink
                  className="border border-gray-300 p-2 hover:text-[var(--primary)]"
                  to="myrecommendation"
                >
                  My Recommendation
                </NavLink>
              </>
            )}
          </ul>
        </div>
        {/* Login Signup, profile ----------   */}
        <div className="navbar-end">
          {user ? (
            <div className="">
              <button className="mainbtn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="space-x-3">
              <Link to="login">
                <button className="mainbtn">Login</button>
              </Link>
              <Link to="registration">
                <button className="mainbtn">Registration</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
