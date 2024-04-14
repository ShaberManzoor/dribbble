"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import {Cedarville_Cursive} from 'next/font/google'
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createUser } from "@/utils/actions/user"

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville'
});

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().includes('@', {
    message: "Email must includes @",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function SignUp() {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const user = await createUser(values);
      
      console.log(user);
      router.push('/');
    } catch (error: any) {
      console.log(error)
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-sm">
          <div className="flex flex-col w-full gap-2">
          <h1 className="mx-2 text-2xl font-bold flex items-center">Sign up for <p className={`text-3xl m-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</p></h1>
          <div className="flex md:flex-row flex-col gap-2 mx-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex flex-col gap-2 mx-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="6+ characters" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <p className="mx-2 text-gray-600">Already have an account? <Link href={'/sign-in'} className="text-blue-600 underline">SignIn</Link></p>
          <div className="flex mx-2 gap-2">
            <Checkbox />
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
          <Button type="submit" className="w-1/2 mx-2">Submit</Button>
          </div>
        </form>
      </Form>
      </div>
    </>
  )
}
