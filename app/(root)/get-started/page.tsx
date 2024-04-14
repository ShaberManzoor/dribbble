'use client'

import Image from 'next/image';
import { useState } from 'react';
import { CiImageOn } from 'react-icons/ci'

export default function StartedProfile() {
    const [location, setLocation] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = async (e: any) => {
        e.preventDefault();
        const file = e.target.files[0];

        if(file){
            const fileReader = new FileReader();

            fileReader.onloadend = () => setImageUrl(fileReader.result as string);

            fileReader.readAsDataURL(file);
        }else{
            setImageUrl("");
        }
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center mx-4">
            <div className="w-full max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Welcome! Let's create your profile</h1>
            <p className="mt-2 mb-6 text-gray-600">Let others get to know you better! You can do these later</p>

            <div className="mb-6">
                <h2 className="text-lg font-semibold">Add an avatar</h2>
                <div className="mt-4 flex items-center gap-2">
                    {/* This would be replaced with your image component */}
                    <div className={`flex items-center justify-center rounded-full w-[120px] h-[120px] ${!imageUrl && ' border-dashed border-2 border-gray-400'}`}>
                    {imageUrl ? 
                        <Image src={imageUrl} alt='photo' width={120} height={120} className='object-contain rounded-full' /> :
                        <CiImageOn size={30} />
                    }
                    </div>
                    <div className='relative w-[130px] h-[50px]'>
                        <input 
                      type="file"
                      name='photo'
                      id='customFile'
                      onChange={handleFileChange}
                      accept='.jpg, .png'
                      className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                     />

                    <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-2.5 py-1 overflow-hidden text-gray-500 border border-1 border-black font-semibold rounded-lg truncate cursor-pointer'>Upload Photo</label>
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-lg font-semibold">Add your location</h2>
                {/* Replace the input below with your location input component */}
                <input 
                    type='text' 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder='Enter a location'
                    className='mt-4 px-4 py-2 border-b border-pink-500 focus:outline-none'
                 />
            </div>

            {/* Replace the button below with your navigation logic */}
            <button type='button' className='px-8 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-300'>
                Next
            </button> 
            </div>
             
        </div>
    );
}
