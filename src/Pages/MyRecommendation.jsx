import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { valueContext } from "../Layout";
import axios from "axios";
import Swal from "sweetalert2";

const MyRecommendation = () => {
  const { user } = useContext(valueContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/recommendations/recommender?recommender=${user.email}`
      )
      .then((res) => {
        setRecommendations(res.data);
        console.log("My all Recom", res.data);
      });
  }, [user]);

//   Delete Recommendation ----- 
  


  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4">My Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <table className="min-w-full text-sm text-left border-collapse border rounded-2xl mx-[100px]">
          <thead className="bg-[var(--primary)] text-white rounded-2xl">
            <tr>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">Query Title</th>
              <th className="px-3 py-2">Recommendation Title</th>
              <th className="px-3 py-2">Product Image</th>
              <th className="px-3 py-2">Product Name</th>
              <th className="px-3 py-2">Reason</th>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec, index) => (
              <tr key={rec._id} className="border-b even:bg-gray-50">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{rec.queryTitle || "N/A"}</td>
                <td className="px-3 py-2">{rec.recoTitle}</td>
                <td className="px-3 py-2">{rec.recoProductImage}</td>
                <td className="px-3 py-2">{rec.recoProductName}</td>
                <td className="px-3 py-2">{rec.recoReason}</td>
                <td className="px-3 py-2">
                  {new Date(rec.createdAt).toLocaleString("en-BD", {
                    timeZone: "Asia/Dhaka",
                  })}
                </td>
                <td className="px-3 py-2">
                  <button
                    
                    className="px-2 py-1 text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyRecommendation;
