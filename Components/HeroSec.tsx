import Image from 'next/image'
import React from 'react'
import img1 from '../public/Images/mainimage.png'
import Link from 'next/link'

const HeroSec = () => {
    return (
        <div className='w-full h-full relative'>
            <Image
                src={img1}
                alt='web3andmetaverse'
                className='relative opacity-90 blur-sm'
            />
            <div className='absolute top-1/2 text-center w-full px-10'>
                <h2 className='text-white font-bold text-3xl'>Certified Web 3.0 and Metaverse Developer:
                    A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h2>
                <p className='text-white text-lg font-bold'>Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</p>
                <button className='border font-bold p-4 mt-4 text-white hover:bg-white hover:text-black hover:border-black active:scale-95 transition transform duration-100 ease-out'><Link href={'/'}>Start With Us</Link> </button>
            </div>

        </div>
    )
}

export default HeroSec