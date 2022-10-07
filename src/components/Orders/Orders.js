import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); // {products: products, initialCart: initialCart}

  const [cart, setCart] = useState(initialCart);

  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 ">
      <div className="col-span-5 sm:col-span-5 md:col-span-2  lg:col-span-3 pt-6 mx-auto">
        <h2 className="text-2xl">THis is me</h2>
      </div>

      <div className="col-span-5 sm:col-span-5 md:col-span-1 lg:col-span-1 mx-auto  bg-[#276964] text-white mt-12 border border-yellow-700 lg:py-8 lg:px-4 rounded-md">
        <Cart cart={cart}> </Cart>
      </div>
    </div>
  );
};

export default Orders;
