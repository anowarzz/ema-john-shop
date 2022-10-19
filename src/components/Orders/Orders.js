import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); // {products: products, initialCart: initialCart}

  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="grid grid-cols-5 sm:grid-cols-3 sm:gap-3
     md:grid-cols-3 lg:grid-cols-5 mx-auto border">
      <div className="col-span-5 sm:col-span-2 md:col-span-2  lg:col-span-3 pt-6 sm:mx-auto">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}

        {cart.length === 0 && (
          <h3 className="text-2xl font-semibold text-center">
            No Items For Review, Please{" "}
            <Link to="/" className="text-blue-600">
              Shop More
            </Link>
          </h3>
        )}
      </div>

      <div
        className="col-span-5 sm:col-span-1 md:col-span-1 lg:col-span-2 mx-auto
      md:mr-6  bg-[#276964] text-white mt-8 border-t-8 border-[#7c0eebf6] lg:py-8 lg:px-4 rounded-md mb-2"
      >
        <Cart cart={cart} clearCart={clearCart}>
          <Link
            className="btn bg-blue-700 mt-2 hover:bg-blue-900"
            to="/shipping"
          >
            Proceed Shipping
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
