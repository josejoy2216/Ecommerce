import React from 'react';
import Cards from './Cards';

const Maincard = ({ category }) => {
    return (
        <div>
            <div className="container cardcss">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h1>{category}</h1>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    <Cards category={category} />
                </div>
            </div>
        </div>
    );
};

export default Maincard;
