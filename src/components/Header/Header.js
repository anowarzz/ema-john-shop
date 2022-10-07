import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-[#1C2B35] flex justify-between px-16 py-6 items-center flex-wrap'>

        <a href="/">
        <img src={logo} alt="" />
        </a>

        <div className='text-white flex gap-4 font-semibold flex-wrap'>
            <a className='hover:bg-amber-500 px-2 py-1 rounded-lg' href='/shop'>Shop</a>
            <a className='hover:bg-amber-500 px-2 py-1 rounded-lg' href='/orders'>Orders</a>
            <a className='hover:bg-amber-500 px-2 py-1 rounded-lg' href='/inventory'>Inventory</a>
            <a className='hover:bg-amber-500 px-2 py-1 rounded-lg' href='/about'>About</a>
        </div>

        </div>
    );
};

export default Header;