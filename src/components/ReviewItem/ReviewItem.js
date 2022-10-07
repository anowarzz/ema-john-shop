import React from "react";

const ReviewItem = ({ product }) => {
  const { name, price, quantity, img } = product;

  return (
    <div className="flex border-gray-400 border my-3 shadow-zinc-300  shadow-inner">
      {/* image */}
      <div className="w-24">
        <img src={img} alt="" />
      </div>

      {/* review details */}
      <div className="flex justify-between items-center">

        <div>
          <p className="text-lg font-bold">Name : {name}</p>
          <p>Price : {price}</p>
          <p>{quantity}</p>
        </div>

        {/* Delete button */}
        <div>
          <button className="btn-sm btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
