'use client'
import Image from 'next/image';
import React, { useState } from 'react'

type OptionCardProps = {
    option: {
      id: number;
      image: string;
      title: string;
      description: string;
    };
};

export default function OptionCard({option} : OptionCardProps) {
    const [selectOption, setSelectOption] = useState(false);
  return (
    <div onClick={() => setSelectOption(!selectOption)} className={`relative w-[250px] h-[250px] border rounded-lg flex flex-col gap-2 items-center justify-center hover:border-pink-500 ${selectOption && 'border-pink-500 mt-10'}`}>
        <div className={`flex flex-col justify-center items-center ${selectOption && 'absolute bottom-8'}`}>
            <Image src={option.image} alt='option' width={100} height={100}/>
            <h2 className='font-bold text-xl mx-auto text-center'>{option.title}</h2>
            <p className='text-gray-400 items-center text-center'>{selectOption && option.description}</p>
        </div>
        <input 
            type="checkbox" 
            checked={selectOption} 
            onChange={() => setSelectOption(!selectOption)} 
            onClick={e=> e.stopPropagation()}  
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer accent-pink-500 p-2 rounded-full"
        />
    </div>
  )
}
