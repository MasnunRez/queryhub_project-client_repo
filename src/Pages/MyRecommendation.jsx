import React from 'react';
import { Link } from 'react-router';

const MyRecommendation = () => {
    return (
        <div>
            <Link to="addqueries">
              <button className="mt-7">+ Add Queries</button>
            </Link>
        </div>
    );
};

export default MyRecommendation;