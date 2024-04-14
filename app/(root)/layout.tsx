import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';
import Navbar from '@/components/Navbar';
import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
