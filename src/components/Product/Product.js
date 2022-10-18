import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const {product, handleAddToCart} = props

  const {name, price, img, seller, ratings} = product;


    return (
         <div className="rounded-lg shadow-md border h-[510px] relative">
 
  <div>

  <img className='mx-auto mt-3 rounded w-[286px] h-[286px]' src={img} alt="Product" onError={event => {
          event.target.src = "https://i.ibb.co/kDjDBcn/no-image-found.jpg"
          event.onerror = null }}/>

   <div className='px-4 mt-4 text-center'>
   <h2 className="font-bold text-lg"> {name} </h2>
    <p className='font-semibold pt-2 pb-1'>Price : ${price}</p>
    <p className='pb-1'>Seller: {seller}</p>
    <p className='pb-1'>Ratings: <span className='font-semibold'>{ratings}</span> Stars </p>

   </div>
 
 
 <button onClick={()=>handleAddToCart(product)} className="absolute bottom-0 btn border-0 bg-[#c50beb] w-full hover:bg-[#09bbf1d5] hover:text-black">
    <p className='pr-2'>Add To Cart</p>
    <FontAwesomeIcon icon={faCartShopping} />
    </button>

  </div>
</div>

        
    );
};

export default Product;