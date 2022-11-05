import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";


/* ----> Pagination Calculation ----> 
1. Total Count : loaded
2. Per Page Data size :  10
3. Pages : count / perPage 
4. Current Page (Page index)
*/






const Shop = () => {

const  [products, setProducts]  = useState([]) 
const [count , setCount] = useState(0)
const [cart, setCart] = useState([]);
const [page , setPage] = useState(0);
const [size, setSize] = useState(10)



useEffect( () => {
  const url = `http://localhost:5000/products?page=${page}&size=${size}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    setCount(data.count)
    setProducts(data.products)
  })
}, [page, size])

const pages = Math.ceil(count / size)


const clearCart = () => {
setCart([]);
deleteShoppingCart();

}


  useEffect(() => {
    const storedCart = getStoredCart();
   console.log(storedCart);
   
    const savedCart = [];
    const ids = Object.keys(storedCart)
    console.log(ids);

    fetch('http://localhost:5000/productsByIds', {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(ids)
    })
    .then(res => res.json())
    .then(data => {
     console.log('by ids', data);
      
     for (const id in storedCart) {
      const addedProduct = data.find((product) => product._id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);

    })
    
   

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
    <div className="text-center mt-5">
      <p className="font-semibold">Currently Selected Page : {page} And Size : {size}</p>
        {
          [...Array(pages).keys()].map(number=> <button className={page === number ? "btn m-2 bg-red-500 border-none" : "bg-blue-500 m-2 btn"}
          key={number} 
          onClick = {() => {
            setPage(number)
            
          }}
          >
            {number + 1}
          </button>)
        }
       
        
        <select onChange={event => setSize(event.target.value)} className="border border-black p-2">
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
    </div>
    
  );
};

export default Shop;
