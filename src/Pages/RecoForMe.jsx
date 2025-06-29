import React, { useContext, useEffect, useState } from "react";
import { valueContext } from "../Layout";
import axios from "axios";

const RecoForMe = () => {
  const { user } = useContext(valueContext);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/recommendations/forme?email=${user.email}`)
        .then((res) => setRecommendations(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-10">Recommendations For Me</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations from others yet.</p>
      ) : (
        <table className="min-w-full text-sm text-left border-collapse border rounded-2xl">
          <thead className="bg-[var(--primary)] text-white">
            <tr>
              <th className="px-3 py-2">#</th>
              <th className="px-3 py-2">Query Title</th>
              <th className="px-3 py-2">Recommended Product</th>
              <th className="px-3 py-2">Image</th>
              <th className="px-3 py-2">Reason</th>
              <th className="px-3 py-2">By</th>
              <th className="px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec, index) => (
              <tr key={rec._id} className="border-b even:bg-gray-50">
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{rec.queryTitle}</td>
                <td className="px-3 py-2">{rec.recoProductName}</td>
                <td className="px-3 py-2">
                  <img
                    src={rec.recoProductImage}
                    alt="Product"
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-3 py-2">{rec.recoReason}</td>
                <td className="px-3 py-2">{rec.recommender}</td>
                <td className="px-3 py-2">
                  {new Date(rec.createdAt).toLocaleString("en-BD", {
                    timeZone: "Asia/Dhaka",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default RecoForMe;
