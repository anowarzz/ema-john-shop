import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";


/* ----> Pagination Calculation ----> 
1. Total Count : loaded
2. Per Page Data size :  10
3. 4. Current Page (Page)
*/






const Shop = () => {
  const {products, count} = useLoaderData() ;

const [cart, setCart] = useState([]);

const [page , setPage] = useState(0);
const [size, setSize] = useState(10)

const pages = Math.ceil(count / size)





const clearCart = () => {
setCart([]);
deleteShoppingCart();

}


  useEffect(() => {
    const storedCart = getStoredCart();

    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);

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

    const exists = cart.find((product) => product._id === selectedProduct._id);

    if (!exists) {
      selectedProduct.quantity = 1;

      newCart = [...cart, selectedProduct];

    }
    else{
        const rest = cart.filter(product => product._id !== selectedProduct._id);

        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists]
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div>
      <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 ">
      <div className="col-span-5 sm:col-span-3 md:col-span-2  lg:col-span-4 pt-6">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      <div className="col-span-5 sm:col-span-2 md:col-span-1 lg:col-span-1  bg-[#276964] text-white mt-12 sm:mt-0">
        <Cart cart={cart} clearCart ={clearCart}>
          <Link to = '/orders'>
            <button className="btn bg-[#c50beb] mt-2 hover:bg-blue-700"> Review Orders</button>
              </Link>
           </Cart>
      </div>
      
    </div>
    <div>
    <div className="text-center">
      <p className="font-semibold">Currently Selected Page : {page}</p>
        {
          [...Array(pages).keys()].map(number=> <button className="btn m-2 "
          key={number} 
          onClick = {() => setPage(number)}
          >
            {number}
          </button>)
        }
      </div>
    </div>
    </div>
    
  );
};

export default Shop;
