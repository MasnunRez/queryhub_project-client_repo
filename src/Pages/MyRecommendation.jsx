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
        `${import.meta.env.VITE_API_URL}/recommendations/recommender?recommender=${user.email}`
      )
      .then((res) => {
        setRecommendations(res.data);
        console.log("My all Recom", res.data);
      });
  }, [user]);

  //   Delete Recommendation -----
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this recommendation!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `${import.meta.env.VITE_API_URL}/recommendations/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount === 1) {
              setRecommendations((prev) =>
                prev.filter((item) => item._id !== id)
              );
              Swal.fire(
                "Deleted!",
                "Recommendation has been deleted.",
                "success"
              );
            }
          })
          .catch(() => Swal.fire("Error", "Something went wrong.", "error"));
      }
    });
  };

  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-10">My Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet.</p>
      ) : (
        <table className="min-w-full text-sm text-left border-collapse border rounded-2xl">
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
                <td className="px-3 py-2">
                  <img
                    src={rec.recoProductImage}
                    alt="Product"
                    className="w-20 h-20 object-cover"
                  />
                </td>
                <td className="px-3 py-2">{rec.recoProductName}</td>
                <td className="px-3 py-2">{rec.recoReason}</td>
                <td className="px-3 py-2">
                  {new Date(rec.createdAt).toLocaleString("en-BD", {
                    timeZone: "Asia/Dhaka",
                  })}
                </td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => handleDelete(rec._id)}
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
