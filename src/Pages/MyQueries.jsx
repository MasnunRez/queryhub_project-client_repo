import React, { Suspense, useContext } from "react";
import { Link } from "react-router";
import MyQueryList from "./MyQueryList";
import { valueContext } from "../Layout";

const myQueryPromise = (email) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/queries/email?email=${email}`
  ).then((res) => res.json());
};

const MyQueries = () => {
  const { user } = useContext(valueContext);
  // const [myQueries, setMyQueries] = useState([]);

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Banner with Add queries ----  */}
      <div className="relative overflow-hidden mt-5 rounded-3xl ">
        <div
          className="h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#19252e] to-[#09365890]"></div>
          {/* Content-----------  */}
          <div className="z-10 absolute text-center">
            <h3 className="text-gray-200 text-[48px] font-semibold">
              Add or Manage Your Queries
            </h3>
            <p className="text-gray-200">
              Start building your query collection today.
            </p>
            <Link to="/addqueries">
              <button className="mt-7 mainbtn">+ Add Queries</button>
            </Link>
          </div>
        </div>
      </div>
      {/* My Queries section ------------- */}
      <div className="bg-[var(--primary)] rounded-2xl pb-5">
        <h2 className="my-[50px] text-white pt-10">My Queries</h2>

        <Suspense fallback={"Loading query"}>
          <MyQueryList
            myQueryPromise={myQueryPromise(user.email)}
          ></MyQueryList>
        </Suspense>
      </div>
    </div>
  );
};

export default MyQueries;
