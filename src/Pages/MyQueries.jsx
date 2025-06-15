import React from "react";
import { Link, useLoaderData } from "react-router";
import MyQueriesCard from "../Components/MyQueriesCard";

const MyQueries = () => {
  const queries = useLoaderData()
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
      <div className="mt-8">
        <h2>My Queries</h2>
        <p className="text-center">Total: 10</p>
        {/* Card ---------- */}
        {
          queries.map(query => (
            <MyQueriesCard key={query._id} query={query}></MyQueriesCard>
          ))
        }
      </div>
    </div>
  );
};

export default MyQueries;
