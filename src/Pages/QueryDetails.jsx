import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import useAuth from "../Components/useAuth";
import { GrFormRefresh } from "react-icons/gr";
import axios from "axios";
import Swal from "sweetalert2";

const QueryDetails = () => {
  const query = useLoaderData();
  const { queryTitle } = query.queryData;
  const { userName, userImage } = query || {};
  const [recommendations, setRecommendations] = useState([]);

  //Get the query ID-------
  const { id: queryId } = useParams();
  console.log(queryId);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/recommendations/query/${queryId}`
      )
      .then((res) => setRecommendations(res.data))
      .catch((err) => console.error(err));
  }, [queryId]);

  //Logged in User info-------
  const { user } = useAuth();
  console.log(user);

  const handleRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const recoTitle = form.recoTitle.value;
    const recoProductName = form.recoProductName.value;
    const recoProductImage = form.recoProductImage.value;
    const recoReason = form.recoReason.value;

    const createdAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    const recommendationData = {
      queryId,
      recommender: user.email,
      queryCreator: query.email,
      recoTitle,
      recoProductName,
      recoProductImage,
      recoReason,
      createdAt,
      queryTitle: query.queryData.queryTitle,
    };
    // console.log(recommendationData);
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/recommendations`,
        recommendationData
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your recommendation has been submitted.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <h2>Query Details</h2>
      <div className="bg-[var(--primary)] rounded-2xl my-4 p-4 text-white">
        <div className="flex flex-col items-center">
          <p>
            <span className="font-bold">Query From:</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="">
              {
                <img
                  src={userImage}
                  alt="User"
                  className="w-10 h-10 rounded-full mt-2"
                />
              }
            </div>
            <div className="">{userName || "Unknown User"}</div>
          </div>
          <p>
            <span className="font-bold">Query Title:</span> {queryTitle}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <h2>Add A Recommendation</h2>
        <div className="flex justify-center mt-8">
          <form
            onSubmit={handleRecommendation}
            className="fieldset bg-gray-200 border-base-300 rounded-box w-md border p-8"
          >
            <h3 className="text-3xl text-center my-5 font-bold">
              Insert Your Recommendation
            </h3>
            <label className="font-bold pt-3">Recommendation Title</label>
            <input
              type="text"
              name="recoTitle"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="Your recommendation title"
            />

            <label className="font-bold pt-3">Recommended Product Name</label>
            <input
              type="text"
              name="recoProductName"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="Your product name"
            />

            <label className="font-bold pt-3">Recommended Product Image</label>
            <input
              type="text"
              name="recoProductImage"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="Enter product image URL..."
            />

            <label className="font-bold pt-3">Recommendation Reason</label>
            <input
              type="text"
              name="recoReason"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              placeholder="Why you want to recommend this"
            />
            <button type="submit" className="mt-5 w-sm mainbtn">
              Add Recommendation
            </button>
          </form>
        </div>
      </div>
      <h3 className="text-2xl font-bold my-10">All Recommendations</h3>
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QueryDetails;
