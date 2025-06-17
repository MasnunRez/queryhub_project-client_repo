import React, {  use, useState } from "react";
import MyQueriesCard from "../Components/MyQueriesCard";

const MyQueryList = ({ myQueryPromise }) => {
  const myQueries = use(myQueryPromise)
  const [queries, setQueries]= useState(myQueries)
  
  return (
    <div className="">
      {queries.map((myQuery) => (
        <MyQueriesCard
          key={myQuery._id}
          myQuery={myQuery}
          queries={queries}
          setQueries={setQueries}
        ></MyQueriesCard>
      ))}
    </div>
  );
};

export default MyQueryList;
