import React from 'react';
import { Link } from 'react-router';

const MyQueriesCard = ({query}) => {
    const {productImageUrl, queryTitle, boycottingReason, productName, _id}= query
    return (
        <div className="flex gap-4 p-4 bg-gray-200 rounded-2xl my-4">
          <div className="">
            <img className='w-[200px]' src={productImageUrl} alt="" />
          </div>
          <div className="">
            <h3 className='text-2xl font-bold mb-4'>{queryTitle}</h3>
            <p>Product: {productName}</p>
            <p>Details: {boycottingReason}</p>
            <div className="space-x-3 mt-4">
              <button className="hover:underline font-bold">View details</button>
              <Link to={`/updatequeries/${_id}`}><button className="text-green-600 font-bold hover:underline">Update</button></Link>
              <button className="text-red-600 font-bold hover:underline">Delete</button>
            </div>
          </div>
        </div>
    );
};

export default MyQueriesCard;