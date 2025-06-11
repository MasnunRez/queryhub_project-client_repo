import React from "react";
import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mx-auto">
      <footer className="px-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col items-center py-10 mx-auto space-y-8 lg:space-y-0">
          <div className="">
            <div className="w-[200px]">
              <Link to="/">
                <p className="font-bold text-2xl text-center">
                  <span className="text-[var(--primary)]">Q</span>uery{" "}
                  <span className="text-[var(--primary)]">H</span>ub
                </p>
              </Link>
            </div>
          </div>
          <div className="flex justify-between text-sm gap-y-8">
            <div className="mt-7">
              <div className="uppercase dark:text-gray-900 text-center mb-3">
                Social media
              </div>
              <div className="flex space-x-3 pl-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>

                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="flex items-center p-1"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 2025 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
