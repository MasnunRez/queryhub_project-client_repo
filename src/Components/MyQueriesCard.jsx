import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyQueriesCard = ({ myQuery, queries, setQueries }) => {
  const { _id, queryData } = myQuery;
  const { productImageUrl, queryTitle, boycottingReason, productName } =
    queryData;

  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        //Start Deleting query ------------
        fetch(`http://localhost:5000/queries/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your query has been deleted.",
                icon: "success",
              });
              //remove the query from state--------------
              const remainingQueries = queries.filter(
                (query) => query._id !== _id
              );
              setQueries(remainingQueries);
            }
          });
      }
    });
  };

  return (
    <div className="flex gap-4 p-4 bg-gray-200 rounded-2xl my-4 mx-5">
      <div className="">
        <img className="w-[200px]" src={productImageUrl} alt="" />
      </div>
      <div className="">
        <h3 className="text-2xl font-bold mb-4">{queryTitle}</h3>
        <p>Product: {productName}</p>
        <p>Details: {boycottingReason}</p>
        <div className="space-x-3 mt-4">
          <button className="hover:underline font-bold">View details</button>
          <Link to={`/updatequeries/${_id}`}>
            <button className="text-green-600 font-bold hover:underline">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-red-600 font-bold hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyQueriesCard;
