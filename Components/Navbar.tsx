import Image from 'next/image'
import React from 'react'
import logoImg from '../public/Images/panaverse-logo.webp'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className='absolute w-full flex justify-between px-8 my-5 z-50'>
            {/* this div for company logo  */}
            <div>
                <Image src={logoImg} alt='' width={80} height={80} />
            </div>

            {/* this div only for website pages content */}
            <div>
                <ul className='flex space-x-2 text-white font-bold '>
                    <li className='text-md cursor-pointer'><Link href={'/'}>Home</Link></li>
                    <li className='text-md cursor-pointer'><Link href={'/'}>About</Link></li>
                    <li className='text-md cursor-pointer'><Link href={'/'}>Courses</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar