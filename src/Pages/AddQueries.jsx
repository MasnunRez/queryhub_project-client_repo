import React, { useContext } from "react";
import Swal from "sweetalert2";
import { valueContext } from "../Layout";
import { useNavigate } from "react-router";

const AddQueries = () => {
  const { user } = useContext(valueContext)
  const navigate = useNavigate()

    const handleAddQuery = (e)=>{
      e.preventDefault()
      const form = e.target
      const formData = new FormData(form)
      const queryData = Object.fromEntries(formData.entries())
      // console.log(newQuery);
      const newQuery = {
      queryData,
      email: user.email,
      userName: user.displayName,
      userImage: user.photoURL,
      createdAt: new Date(),
      recommendationCount: 0,
    };

      fetch(`${import.meta.env.VITE_API_URL}/queries`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newQuery)
      })
      .then(res=> res.json())
      .then(data=>{
        if (data.insertedId) {
          // console.log("Added suucess");
          Swal.fire({
            title: "Query Added Successfully",
            icon: "success",
            draggable: true,
          });
          navigate('/myqueries')
        //   form.reset()
        }
      })
      
    }


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
              Add Query
            </h3>
            <div className="mt-8">
              <form onSubmit={handleAddQuery} className="fieldset bg-gray-200 border-base-300 rounded-box w-md border p-8">
                <h3 className="text-3xl text-center my-5 font-bold">
                  Insert your product info
                </h3>
                <label className="font-bold pt-3">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your product name"
                />

                <label className="font-bold pt-3">Product Brand</label>
                <input
                  type="text"
                  name="productBrand"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your product brand"
                />

                <label className="font-bold pt-3">Product Image URL</label>
                <input
                  type="text"
                  name="productImageUrl"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Enter product image URL..."
                />

                <label className="font-bold pt-3">Query Title</label>
                <input
                  type="text"
                  name="queryTitle"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Your query title"
                />

                <label className="font-bold pt-3">
                  Boycotting Reason Details
                </label>
                <input
                  type="text"
                  name="boycottingReason"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  placeholder="Name"
                />
                  <button type="submit" className="mt-5 w-sm mainbtn">
                    Add Query
                  </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQueries;
