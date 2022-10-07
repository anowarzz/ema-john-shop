import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const products = useLoaderData() ;

  const [cart, setCart] = useState([]);

const clearCart = () => {
setCart([]);
deleteShoppingCart();

}


  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];

    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;

      newCart = [...cart, selectedProduct];

    }
    else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);

        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 ">
      <div className="col-span-5 sm:col-span-3 md:col-span-2  lg:col-span-4 pt-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <div className="col-span-5 sm:col-span-2 md:col-span-1 lg:col-span-1  bg-[#276964] text-white mt-12 sm:mt-0">
        <Cart cart={cart} clearCart ={clearCart}> </Cart>
      </div>
    </div>
  );
};

export default Shop;
