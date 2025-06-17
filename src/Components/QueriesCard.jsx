import React from 'react';

const QueriesCard = ({query}) => {
  const {productImageUrl, queryTitle, boycottingReason, productName}= query.queryData

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
              <p>Total Recommendation: </p>
              <button className="text-green-600 font-bold hover:bg-green-200 border px-4 rounded-2xl mt-2">Recommend</button>
            </div>
          </div>
        </div>
    );
};

export default QueriesCard;