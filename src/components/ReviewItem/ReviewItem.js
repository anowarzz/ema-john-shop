import React from 'react';

const ReviewItem = ({product}) => {

const {name, price , quantity , img} = product

    return (
        <div>
            {/* Review Items */}

        {/* image */}
            <div className='w-24'>
                <img src={img} alt="" />
            </div>
        {/* review details */}
            <div>
        <p>{name}</p>
        <p>Price : {price}</p>
        <p>{quantity}</p>
            </div>

        {/* Delete button */}
        <div>
        <button>Delete</button>
        </div>
      
        </div>
    );
};

export default ReviewItem;