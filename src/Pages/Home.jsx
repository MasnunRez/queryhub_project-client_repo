import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider";
import RecentQueriesCard from "../Components/RecentQueriesCard";

const Home = () => {
  const [recentQueries, setRecentQueries] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/queries`)
      .then((res) => res.json())
      .then((data) => setRecentQueries(data));
  }, []);
  return (
    <div>
      <div className="">
        <Slider></Slider>
      </div>
      {/* Recent queries Section ----  */}
      <div className=" max-w-[1400px] mx-auto my-10">
        <h2 className="mb-5">Recent Queries</h2>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 mx-5">
          
          {/* Enter new queries...........  */}
          {
            recentQueries.map(query=>(
              <RecentQueriesCard key={query._id} query={query}></RecentQueriesCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
