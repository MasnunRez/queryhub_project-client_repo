import React, { use } from 'react';
import { Link } from 'react-router';
import MyQueriesCard from '../Components/MyQueriesCard';

const MyQueryList = ({myQueryPromise}) => {
    const myQueries = use(myQueryPromise)
    return (
        <div className="">
            {
                myQueries.map(myQuery=> 
                <MyQueriesCard key={myQuery._id} myQuery={myQuery}></MyQueriesCard>)
            }
        </div>
    );
};

export default MyQueryList;