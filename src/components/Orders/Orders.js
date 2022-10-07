import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); // {products: products, initialCart: initialCart}

  const [cart, setCart] = useState(initialCart);

  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 mx-auto">


      <div className="col-span-5 sm:col-span-5 md:col-span-2  lg:col-span-3 pt-6 mx-auto mt-7">

       
       {
        cart.map(product => <ReviewItem key = {product.id}
        product = {product}/>)
       }


      </div>




      <div className="col-span-5 sm:col-span-5 md:col-span-1 lg:col-span-1 mx-auto
      md:mr-6  bg-[#276964] text-white mt-12 border-t-8 border-rose-600 lg:py-8 lg:px-4 rounded-md mb-8">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Orders;
