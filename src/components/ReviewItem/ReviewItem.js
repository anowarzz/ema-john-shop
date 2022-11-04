import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';


const ReviewItem = ({ product,handleRemoveItem}) => {
  const { name, price, quantity, img, shipping, _id } = product;

  return (
    <div className="flex items-center justify-center border-blue-400 border my-3   shadow-inner rounded">
      {/* image */}
      <div className="w-24 p-2">
        <img src={img} alt="" />
      </div>

      {/* review details */}


        <div className="flex-1 ml-3">
          <p className="text-lg font-bold">Name : {name}</p>
          <p>Price : ${price}</p>
          <p>Shipping : ${shipping}</p>
          <p>Quantity : {quantity}</p>
        </div>

        {/* Delete button */}
        <div className="mx-4">
          <button onClick={() => handleRemoveItem(_id)} className="btn btn-error rounded-full hover:bg-[#f10707fb]"> <FontAwesomeIcon icon={faTrashCan} className="text-xl"/></button>
        </div>
      </div>
   
  );
};

export default ReviewItem;
