import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

useEffect(() => {
const storedCart = getStoredCart();

const savedCart = [] ;

for(const id in storedCart){
    const addedProduct = products.find(product => product.id === id);

   if(addedProduct){
    const quantity = storedCart[id];
    addedProduct.quantity = quantity;

    savedCart.push(addedProduct);

   }

}
setCart(savedCart)
}, [products])


const handleAddToCart = (product) => {
    const newCart = [...cart, product]
    setCart(newCart);
    addToDb(product.id)

 }

    return (
        <div className='grid grid-cols-5 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-5 '>
           <div className="col-span-5 sm:col-span-5 md:col-span-2  lg:col-span-4 pt-6">

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
          {
                products.map(product => <Product key={product.id} product={product}
                    handleAddToCart={handleAddToCart} />)
            }
          </div>
             </div>




           <div className="col-span-5 sm:col-span-5 md:col-span-1 lg:col-span-1 bg-gray-800 text-white">
            <Cart cart={cart}> </Cart>
            
             </div>
        </div>
    );
};

export default Shop;