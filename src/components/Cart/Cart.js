import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='md:sticky top-6'>
            <h3 className='text-3xl font-semibold text-center mt-6'>Order Summary</h3>
            <p className='mt-3 pl-5'>Selected Items: {cart.length}</p>
            <p className='mt-3 pl-5'>Total Price : </p>
            <p className='mt-3 pl-5'>Total Shipping: </p>
            <p className='mt-3 pl-5'>Tax : </p>
            <h5 className='mt-3 pl-5 text-2xl font-semibold'>Grand Total : </h5>
        </div>
    );
};

export default Cart;