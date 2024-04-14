import OptionCard from '@/components/OptionCard'
import React from 'react'

const options = [
    {
        id: 1,
        image: '/option1.png',
        title: "I'm looking to share my work",
        description: "Showcase your creative prowess to the world. Share your portfolio and let your work open doors to new opportunities and collaborations."
    },
    {
        id: 2,
        image: '/option2.png',
        title: "I'm looking to hire a designer",
        description: "Find skilled designers for your unique project needs—logo, website, or graphics—and bring your creative vision to life with the perfect partnership."
    },
    {
        id: 3,
        image: '/option3.png',
        title: "I'm looking for design inspiration",
        description: "Dribbble offers a wealth of over 7 million creative designs, making it a premier destination for design inspiration from a global community."
    }
]

export default function finalOptions() {
  return (
    <>
        <div className="flex flex-col min-h-screen justify-center items-center">
            <h1 className='text-3xl font-bold mt-3 text-center'>What brings you to dribbble?</h1>
            <p className='text-gray-600 text-center my-5'>Select the options that best describes you. Don't worry you can explore more options later.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
                {options.map((option) => (<OptionCard key={option.id} option={option} />))}
            </div>
            <h4 className='text-center my-5 text-gray-600'>Anything else? You can select multiple</h4>
            <button type='button' className='px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-300'>
                Next
            </button> 
        </div>
    </>
  )
}
