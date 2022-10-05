import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className='md:sticky top-0'>
            <h3 className='text-3xl font-semibold text-center mt-2'>Order Summary</h3>
            <p className='mt-3 ml-3'>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;