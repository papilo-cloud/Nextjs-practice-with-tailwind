import Link from 'next/link'
import React from 'react'

export const Navbar = () => {

   
  return (
    <div className='bg-green-200 text-red flex font-bold w-full p-0 justify-center'>
        <ul className='flex justify-center w-[400px] bg-blue-200 p-3 gap-4'>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='blog'>Blog</Link>
            </li>
            <li>
                <Link href='blogs'>Blogs</Link>
            </li>
        </ul>
    </div>
  )
}
