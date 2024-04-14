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
import {Cedarville_Cursive} from 'next/font/google'
import Link from "next/link"

const cedarville = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-cedarville'
});

const formSchema = z.object({
  email: z.string().includes('@', {
    message: "Email must includes @",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function SignIn() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-sm">
          <div className="flex flex-col w-full gap-2">
          <h1 className="mx-2 text-2xl font-bold flex items-center">Welcome Back to <p className={`text-3xl m-3 text-teal-800 font-bold ${cedarville.className}`}>dribbble</p></h1>
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
          <p className="mx-2 text-gray-600">Don't have an account? <Link href={'/sign-up'} className="text-blue-600 underline">SignUp</Link></p>
          <Button type="submit" className="w-1/2 mx-2">Submit</Button>
          </div>
        </form>
      </Form>
      </div>
    </>
  )
}
