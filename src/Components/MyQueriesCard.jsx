import React from 'react';
import { Link } from 'react-router';

const MyQueriesCard = () => {
    return (
        <div className="flex gap-4 p-4 bg-gray-200 rounded-2xl my-4">
          <div className="">
            <img className='w-[200px]' src='' alt="" />
          </div>
          <div className="">
            <h3 className='text-2xl font-bold mb-4'>{}</h3>
            <p>Product: {}</p>
            <p>Details: {}</p>
            <div className="space-x-3 mt-4">
              <button className="hover:underline font-bold">View details</button>
              <Link><button className="text-green-600 font-bold hover:underline">Update</button></Link>
              <button className="text-red-600 font-bold hover:underline">Delete</button>
            </div>
          </div>
        </div>
    );
};

export default MyQueriesCard;