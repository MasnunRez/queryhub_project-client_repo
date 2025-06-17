import React from "react";
import { useLoaderData } from "react-router";
import QueriesCard from "../Components/QueriesCard";

const Queries = () => {
    const queries = useLoaderData()
  return (
    <div className="mt-8">
      <h2>My Queries</h2>
      <p className="text-center">Total: {queries.length}</p>
      {/* Card ---------- */}
      {queries.map((query) => (
        <QueriesCard key={query._id} query={query}></QueriesCard>
      ))}
    </div>
  );
};

export default Queries;
