import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import Navbar from './Navbar';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
      <div className='max-w-screen-2xl w-full mx-auto px-4 flex items-center'>
        <h1>
          <a href='/' className='logo'>
            <img src={logo} width={40} height={40} alt='Widnew Birhanu' />
          </a>
        </h1>
        <div className='relative flex-1 flex justify-center'>
          <Navbar navOpen={navOpen} />
        </div>
        <button className='menu-btn md:hidden' onClick={() => setNavOpen((prev) => !prev)}>
          <span className='material-symbols-rounded'>
            {navOpen ? 'close' : 'menu'}
          </span>
        </button>
        <a href='#contact' className='btn btn-secondary hidden md:block ml-auto justify-center'>
          Contact Me
        </a>
      </div>
    </header>
  );
}

export default Header;