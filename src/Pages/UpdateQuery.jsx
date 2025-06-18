import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateQuery = () => {
  const data = useLoaderData();
  const { _id, queryData = {} } = data;
  const {
    productImageUrl,
    queryTitle,
    boycottingReason,
    productName,
    productBrand,
  } = queryData;
  const navigate = useNavigate()
  const handleUpdateQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedQuery = {
      queryData: Object.fromEntries(formData.entries()),
    };
    // console.log(newQuery);

    axios.put(`${import.meta.env.VITE_API_URL}/queries/${_id}`, updatedQuery)
    .then((data) => {
        if (data.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Query updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myqueries')
        }
      });

  };
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          className="h-[900px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#19252e] to-[#09365890]"></div>
          {/* Content-----------  */}
          <div className="z-10 absolute">
            <h3 className="text-gray-200 text-[48px] font-semibold text-center">
              Update Query
            </h3>
            <div className="mt-8">
              <form
                onSubmit={handleUpdateQuery}
                className="fieldset bg-gray-200 border-base-300 rounded-box w-md border p-8"
              >
                <h3 className="text-3xl text-center my-5 font-bold">
                  Update your product info
                </h3>
                <label className="font-bold pt-3">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your product name"
                  defaultValue={productName}
                />

                <label className="font-bold pt-3">Product Brand</label>
                <input
                  type="text"
                  name="productBrand"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your product brand"
                  defaultValue={productBrand}
                />

                <label className="font-bold pt-3">Product Image URL</label>
                <input
                  type="text"
                  name="productImageUrl"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Enter product image URL..."
                  defaultValue={productImageUrl}
                />

                <label className="font-bold pt-3">Query Title</label>
                <input
                  type="text"
                  name="queryTitle"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your query title"
                  defaultValue={queryTitle}
                />

                <label className="font-bold pt-3">
                  Boycotting Reason Details
                </label>
                <input
                  type="text"
                  name="boycottingReason"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Name"
                  defaultValue={boycottingReason}
                />
                <button type="submit" className="mt-5 w-sm mainbtn">
                  Update Query
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuery;
