import Image from 'next/image';
import React from 'react'
import {Cedarville_Cursive} from 'next/font/google'

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville'
});

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className='flex flex-row'>  
        <section className='hidden md:flex flex-col w-1/3 h-screen p-6 justify-center bg-teal-200'>
          {/* <Image src={'/logo-name.png'} alt='logo' width={180} height={80} className='' /> */}
          <h2 className={`text-3xl m-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</h2>
          <h1 className='text-3xl text-pink-800 font-bold p-3'>Discover the world's top Designers and Creatives.</h1>
          <Image src="/logo.png" alt="logo" width={400} height={400}/>
          <p className='text-pink-800 p-3 font-semibold'>Art by <span className='underline'>Peter Parker</span></p>
        </section>
        <main className='flex-1'>
        {children}
        </main>
    </section>
  )
}
