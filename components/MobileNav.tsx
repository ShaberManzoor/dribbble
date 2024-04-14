import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Cedarville_Cursive } from "next/font/google"
import Link from "next/link"
import { AiOutlineMenuFold } from "react-icons/ai"
import { CiLogout } from "react-icons/ci"
import { RxAvatar } from "react-icons/rx"

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

export default function MobileNav() {
  return (
    <div className="flex justify-between lg:hidden pr-2">
        <Link href={'/'} >
            <h1 className={`text-3xl m-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</h1>
        </Link>
    <Sheet>
      <SheetTrigger>
        <AiOutlineMenuFold className="size-6" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div className="flex flex-col gap-8 py-4 mt-5">
            {navLinks.map((link, ind) => (
                <Link key={ind} href={link.href}>{link.title}</Link>
            ))}
        </div>
        <div className="flex flex-col gap-5">
            <div className="flex gap-2 items-center">
                <RxAvatar className='size-6 cursor-pointer' />
                <p className="font-semibold">Your Name</p>
            </div>
            <div className="flex gap-2 cursor-pointer text-gray-600">
                <CiLogout className="size-6 cursor-pointer " />
                <p>Sign out</p>
            </div>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  )
}
