import React, { useContext } from "react";
import { Link, NavLink, useLocation, Navigate } from "react-router";
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
  if (!user || !user?.email) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};

const NavBar = () => {
  const { user, logoutUser } = useContext(valueContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => alert("Logout Error!!!", error));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Queries", path: "/queries" },
  ];

  const userLinks = [
    { name: "Recommendation For Me", path: "/recforme" },
    { name: "My Queries", path: "/myqueries" },
    { name: "My Recommendation", path: "/myrecommendation" },
  ];

  return (
    <nav className="bg-[var(--primary)] shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          <span className="text-white/90">Q</span>uery{" "}
          <span className="text-white/90">H</span>ub
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 font-semibold text-white">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-white/80 transition-colors ${isActive ? "underline underline-offset-4" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          {user &&
            userLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-white/80 transition-colors ${isActive ? "underline underline-offset-4" : ""}`
                }
              >
                {link.name}
              </NavLink>
            ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 rounded-lg bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-1 rounded-lg bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition">
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="px-4 py-1 rounded-lg bg-white text-[var(--primary)] font-semibold hover:bg-white/90 transition">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden relative">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer block text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>

          <div className="absolute right-0 mt-2 w-52 bg-white rounded-lg shadow-lg opacity-0 peer-checked:opacity-100 invisible peer-checked:visible transition-all z-50">
            <ul className="flex flex-col p-4 space-y-2 font-semibold text-[#872341]">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className="hover:text-[#c2728b]/80">
                  {link.name}
                </NavLink>
              ))}
              {user &&
                userLinks.map((link) => (
                  <NavLink key={link.path} to={link.path} className="hover:text-[#c2728b]/80">
                    {link.name}
                  </NavLink>
                ))}
              <div className="pt-2 border-t border-gray-200">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-1 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary)] transition"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login">
                      <button className="w-full px-4 py-1 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[#a64d6a] transition">
                        Login
                      </button>
                    </Link>
                    <Link to="/registration">
                      <button className="w-full px-4 py-1 rounded-lg bg-[var(--primary)] text-white font-semibold hover:bg-[#a64d6a] transition">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
