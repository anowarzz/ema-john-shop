import React from 'react';

const Product = ({product}) => {
  const {name, price, img, seller, ratings} = product;
    return (
         <div className="rounded-lg shadow-md border h-[510px] relative bg-slate-300">
 
  <div>

  <img className='mx-auto mt-3 rounded w-[286px] h-[286px]' src={img} alt="Product" onError={event => {
          event.target.src = "https://i.ibb.co/kDjDBcn/no-image-found.jpg"
          event.onerror = null }}/>

   <div className='px-4 mt-4'>
   <h2 className="font-bold text-lg"> {name} </h2>
    <p className='font-semibold pt-2 pb-1'>Price : ${price}</p>
    <p className='pb-1'>Seller: {seller}</p>
    <p className='pb-1'>Ratings: <span className='font-semibold'>{ratings}</span> Stars </p>
   </div>
 
 
    
    <button className="mx-auto absolute bottom-0 btn border-0 bg-[#276964] w-[50%] md:w-full hover:bg-[#3e99b4] hover:text-black">Add To Cart</button>


 
  </div>
</div>

        
    );
};

export default Product;