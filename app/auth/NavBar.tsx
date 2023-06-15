import Link from 'next/link';
import React, { useState } from 'react';
import SignIn from './SignIn';
import LoggedIn from './LoggedIn';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export default async function NavBar() {
  const session = await getServerSession(authOptions);
  return (
    //flex justify-between items-center py-8
    //w-full mx-auto px-4 sm:px-20 top-0 fixed z-50 shadow bg-stone-400
    <nav className='flex justify-between items-center py-8'>
      <Link href={'/'}>
        <h1 className='font-bold text-lg'>Property Manager</h1>
      </Link>
      <ul className='flex items-center gap-6'>
        {/*only show login screen if no user is signed in */}
        {!session?.user && <SignIn />}
        {/* show sign out if user is logged in. And pass user image */}
        {session?.user && <LoggedIn image={session.user?.image || ''} />}
        {/*have to add image in next.config*/}
      </ul>
    </nav>
  );
}
