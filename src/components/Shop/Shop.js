import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {


const [products, setProducts] = useState([]);

useEffect(() =>{

fetch('products.json')
.then(res => res.json())
.then( data => setProducts(data))




},[])

    return (
        <div className='grid grid-cols-5 pt-6'>
           <div className="col-span-5 sm:col-span-5 md:col-span-4  lg:col-span-4">

          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2'>
          {
                products.map(product => <Product key={product.id} product={product} />)
            }
          </div>
             </div>




           <div className="col-span-1">
            
            <h3 className='text-3xl font-semibold'>Order Summary</h3>
             </div>
        </div>
    );
};

export default Shop;