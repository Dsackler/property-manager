import Link from 'next/link';
import React, { useState } from 'react';

export const NavBar = () => {
  return (
    //flex justify-between items-center py-8
    //w-full mx-auto px-4 sm:px-20 top-0 fixed z-50 shadow bg-stone-400
    <nav className='w-full mx-auto px-4 sm:px-20 top-0 fixed z-50 shadow bg-stone-400'>
      <div className='justify-between md:items-center md:flex'>
        <div className='flex items-center justify-between py-3'>
          <Link href={'/'}>
            <h2>Property Manager</h2>
          </Link>
        </div>
        <h1>hi</h1>
      </div>
    </nav>
  );
};
