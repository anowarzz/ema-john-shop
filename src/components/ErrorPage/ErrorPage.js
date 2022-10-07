import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

const error = useRouteError()

console.log(error);
    
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h2 className='text-center text-3xl font-semibold'>Opss !! An Error Occured </h2> 
            
           {
            error && (
                <h5 className='text-2xl text-red-500 mt-4'>
                <span >{error.status} <span>{error.statusText || error.message}</span></span>
               </h5>
            )
           }
        </div>
    );
};

export default ErrorPage;