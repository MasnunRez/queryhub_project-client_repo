import React from 'react';
import { Link } from 'react-router';

const QueriesCard = ({query, cols}) => {
  const {productImageUrl, queryTitle, boycottingReason, productName}= query.queryData
  const {recommendationCount}= query

  const isOneCols = cols === 1;

    return (
        <div className={`mx-5 lg:mx-0 p-4 bg-gray-50 border border-gray-200 rounded-2xl my-4
        ${
          isOneCols ? "flex gap-5" : "flex flex-col gap-5"
        }`}>

          <div className="">
            <img className='w-[300px]' src={productImageUrl} alt="" />
          </div>
          {/* Text area  */}
          <div className="">
            <h3 className=' sm:text-2xl font-bold mb-4'>{queryTitle}</h3>
            <p>Product: {productName}</p>
            <p>Details: {boycottingReason}</p>
            <div className="space-x-3 mt-4">
              <p>Total Recommendation: {recommendationCount} </p>
            </div>
            <div className="">
              <Link to={`/querydetails/${query._id}`}><button className="text-green-600 font-bold hover:bg-green-200 border px-4 rounded-2xl mt-2">Recommend</button></Link>

            </div>
          </div>
        </div>
    );
};

export default QueriesCard;