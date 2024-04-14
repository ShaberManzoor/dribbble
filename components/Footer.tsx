import Link from 'next/link';
import logo from '../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import { Cedarville_Cursive } from 'next/font/google';

const cedarville = Cedarville_Cursive({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-cedarville'
});

const socialLinks = [
  {
    path: 'https://www.youtube.com',
    icon: <AiFillYoutube className='group-hover:border-red-700 group-hover:text-red-700 w-4 h-5'/>
  },
  {
    path: 'https://github.com',
    icon: <AiFillGithub className='group-hover:border-teal-700 group-hover:text-teal-700 w-4 h-5' />
  },
  {
    path: 'https://www.instagram.com',
    icon: <AiFillInstagram className='group-hover:border-pink-700 group-hover:text-pink-700 w-4 h-5' />
  },
  {
    path: 'https://www.linkedin.com/in',
    icon: <RiLinkedinFill className='group-hover:border-blue-700 group-hover:text-blue-700 w-4 h-5' />
  }
];

const quickLinks01 = [
  {
    path: '/',
    display: "Home"
  },
  {
    path: '/services',
    display: "Services"
  },
  {
    path: '/',
    display: "Blog"
  },
  {
    path: '/about',
    display: "About Us"
  },
]

const quickLinks02 = [
  {
    path: '/',
    display: "Go Pro"
  },
  {
    path: '/',
    display: "Hire a designer"
  },
  {
    path: '/',
    display: "Find a location"
  },
  {
    path: '/',
    display: "Get a Opinion"
  },
]

const quickLinks03 = [
  {
    path: '/',
    display: 'Donate',
  },
  {
    path: '/contact',
    display: 'Contact Us'
  }
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='pb-16 pt-10 border-t'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
            <div>
                <Link href={'/'} >
                    <p className={`text-3xl my-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</p>
                </Link>
                <p className='text-textColor'>Copyright © {year} developed by Shaber Manzoor. All rights reserved.</p>
                <div className="flex items-center gap-3 mt-4">
                    {socialLinks.map((link, index) => 
                    <Link 
                        href={link.path}
                        key={index}
                        className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group'
                    >
                            {link.icon}
                    </Link>)}
                </div>
            </div>

            <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((link, index) => 
                <li key={index} className='mb-4'>
                  <Link href={link.path} className='text-textColor' >{link.display}</Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((link, index) => 
                <li key={index} className='mb-4'>
                  <Link href={link.path} className='text-textColor' >{link.display}</Link>
                </li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-4 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((link, index) => 
                <li key={index} className='mb-4'>
                  <Link href={link.path} className='text-textColor' >{link.display}</Link>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer