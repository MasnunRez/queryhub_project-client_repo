import React from "react";
import QueriesCard from "../Components/QueriesCard";
import { useLoaderData } from "react-router";

const Queries = () => {
    const queries = useLoaderData()
  return (
    <div className="mt-8 max-w-[1200px] mx-auto">
      <h2>All Queries</h2>
      <p className="text-center">Total: {queries.length}</p>
      {/* Card ---------- */}
      {queries.map((query) => (
        <QueriesCard key={query._id} query={query}></QueriesCard>
      ))}
    </div>
  );
};

export default Queries;
