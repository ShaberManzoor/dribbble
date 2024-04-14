import Link from 'next/link'
import React from 'react'
import {Cedarville_Cursive} from 'next/font/google'
import { CiSearch } from 'react-icons/ci'
import { MdWork } from 'react-icons/md';
import { RxAvatar } from 'react-icons/rx';

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville'
});

const navLinks = [
    {
        title: "Inspiration",
        href: "/"
    },
    {
        title: "Find Work",
        href: "/"
    },
    {
        title: "Learn Design",
        href: "/"
    },
    {
        title: "Go Pro",
        href: "/"
    },
    {
        title: "Hire Inspiration",
        href: "/"
    },
]

export default function Navbar() {
  return (
    <div className='hidden lg:flex justify-between px-1 border-b'>
        <div className='flex gap-3 items-center'>
            <Link href={'/'} >
                <h1 className={`text-3xl m-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</h1>
            </Link>
            {navLinks.map((link, ind) => (
                <Link key={ind} href={link.href}>{link.title}</Link>
            ))}
        </div>
        <div className="flex gap-3 items-center">
            <div className='border w-fit flex gap-2 rounded-full p-2 items-center'>
                <CiSearch />
                <input type="search" className='focus:outline-none' placeholder='Search' />
            </div>
            <MdWork className='size-6 text-gray-500 cursor-pointer' />
            <RxAvatar className='size-6 cursor-pointer' />
            <button type='button' className='px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-300'>
                Upload
            </button>
        </div>
    </div>
  )
}
