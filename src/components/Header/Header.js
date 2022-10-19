import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-[#1C2B35] flex justify-between px-16 py-6 items-center flex-wrap'>

        <a href="/">
        <img src={logo} alt="" />
        </a>

        <div className='text-white flex gap-4 font-semibold flex-wrap'>
            <Link className='hover:bg-[#c50beb] px-2 py-1 rounded-lg' to='/'>Shop</Link>

            <Link className='hover:bg-[#c50beb] px-2 py-1 rounded-lg' to='/orders'>Orders</Link>

            <Link className='hover:bg-[#c50beb]  px-2 py-1 rounded-lg' to ='/inventory'>Inventory</Link> 


            <Link className='hover:bg-[#c50beb] px-2 py-1 rounded-lg' to='/login'>Log In</Link>

            <Link className='hover:bg-[#c50beb] px-2 py-1 rounded-lg' to='/signup'>Sign Up</Link>

            <Link className='hover:bg-[#c50beb] px-2 py-1 rounded-lg' to='/about'>About Us</Link>
        </div>

        </div>
    );
};

export default Header;