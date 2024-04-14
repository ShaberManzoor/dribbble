import Image from "next/image";
import { MdMarkEmailRead } from "react-icons/md";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-4 justify-center items-center">
      <h1 className="text-3xl font-bold text-center">Please verify your email</h1>
      <MdMarkEmailRead className="size-[100px] md:size-[150px] text-gray-700" />
      <p className="text-gray-600 text-center">Please verify your email address. We've sent a confirmation mail to: </p>
      <p className="font-bold">mail@gogo.com</p>
      <p className="text-gray-600 text-center">Didn't receive the email? Check your span folder, it may have been caught by a filter. If you still don't see it, you can <span className="font-bold text-pink-500">resend the confirmation email.</span></p>
      <p className="text-gray-600 text-center">Wrong email address? <span className="font-bold text-pink-500">Change it</span></p>
    </main>
  );
}
