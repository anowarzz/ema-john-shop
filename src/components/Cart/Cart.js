import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({cart, clearCart, children}) => {


let total = 0;
let shipping = 0;
let quantity = 0;

for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;

}



const tax = parseFloat((total * 0.1).toFixed(2));
const grandTotal = total + shipping + tax ;

    return (
        <div className='sm:sticky top-6'>
            <h3 className='text-3xl font-semibold text-center mt-6'>Order Summary</h3>
            <p className='mt-3 pl-5'>Selected Items: {quantity}</p>
            <p className='mt-3 pl-5'>Total Price : ${total} </p>
            <p className='mt-3 pl-5'>Total Shipping : ${shipping} </p>
            <p className='mt-3 pl-5'>Tax : ${tax} </p>
            <h5 className='mt-3 pl-5 text-2xl font-semibold mb-4 pr-3'>Grand Total : ${grandTotal.toFixed(2)}</h5>

            <div className='my-10 text-center'>
                <button onClick={() => clearCart()} className='btn bg-rose-600 hover:bg-red-700'>
                    Clear Cart <FontAwesomeIcon icon={faTrashCan} className="pl-4 text-lg"/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;