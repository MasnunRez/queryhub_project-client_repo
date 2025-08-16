import React, { useState } from "react";
import QueriesCard from "../Components/QueriesCard";
import { useLoaderData } from "react-router";

const Queries = () => {
    const queries = useLoaderData()
    const [cols, setCols]=useState(1)
    const grid = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3" };
  return (
    <div className="mt-8 max-w-[1200px] mx-auto">
      <h2>All Queries</h2>
      <p className="text-center">Total: {queries.length}</p>
      {/* layout toggle */}
      <div className="flex gap-2 justify-end mt-6 mx-5 lg:mx-0">
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            onClick={() => setCols(n)}
            className={`px-3 py-1 rounded border ${
              cols === n ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {n} Column
          </button>
        ))}
      </div>
      {/* Card ---------- */}
      <div className={`mx-5 lg:mx-0 grid gap-6 ${grid[cols]}`}>
      {queries.map((query) => (
        <QueriesCard key={query._id} query={query} cols={cols}></QueriesCard>
      ))}

      </div>
    </div>
  );
};

export default Queries;
