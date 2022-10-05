import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {


const [products, setProducts] = useState([]);


const [cart, setCart] = useState([])




useEffect(() =>{

fetch('products.json')
.then(res => res.json())
.then( data => setProducts(data))

},[])

const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)

 }


    return (
        <div className='grid grid-cols-5'>
           <div className="col-span-5 sm:col-span-5 md:col-span-4  lg:col-span-4 pt-6">

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
          {
                products.map(product => <Product key={product.id} product={product}
                    handleAddToCart={handleAddToCart} />)
            }
          </div>
             </div>




           <div className="col-span-5 sm:col-span-5 md:col-span-1 bg-gray-800 text-white">
            <Cart cart={cart}> </Cart>
            
             </div>
        </div>
    );
};

export default Shop;