import React from 'react';
import { Link } from 'react-router';

const QueriesCard = ({query, cols}) => {
  const {productImageUrl, queryTitle, boycottingReason, productName}= query.queryData
  const {recommendationCount}= query

  const isThreeCols = cols === 1;

    return (
        <div className={`p-4 bg-gray-100 rounded-2xl my-4
        ${
          isThreeCols ? "flex gap-5" : "md:flex-row"
        }`}>

          <div className="">
            <img className='w-[200px]' src={productImageUrl} alt="" />
          </div>
          <div className="">
            <h3 className='text-2xl font-bold mb-4'>{queryTitle}</h3>
            <p>Product: {productName}</p>
            <p>Details: {boycottingReason}</p>
            <div className="space-x-3 mt-4">
              <p>Total Recommendation: {recommendationCount} </p>
            </div>
            <div className="mt-auto pt-4">
              <Link to={`/querydetails/${query._id}`}><button className="text-green-600 font-bold hover:bg-green-200 border px-4 rounded-2xl mt-2">Recommend</button></Link>

            </div>
          </div>
        </div>
    );
};

export default QueriesCard;