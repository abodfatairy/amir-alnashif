'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}
// const links = ['Home', 'About me', 'My Work', 'Achievement']
const linkss = [
    {
        name: 'Home',
        href: '/',

    },
    {
        name: 'About me',
        href: '/#about',

    },
    {
        name: 'My Work',
        href: '/#work',

    },
    {
        name: 'My products',
        href: '/products',

    },
    {
        name: 'Achievement',
        href: '/#achievement',

    }

];

const Header = (props: Props) => {
    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    return (
        <div className=' bg-black/95 flex justify-between relative h-[110px] items-center  '>
            {/* LOGO */}
            <div className="">

                <Link className=" hidden md:flex ml-7" href={'/'}>
                    <Image
                        src='/logo-transparent-png.png'
                        alt=''
                        width={100}
                        height={100}
                    />
                </Link>
                <Link className="flex md:hidden ml-7" href={'./'}>
                    <Image
                        src='/logo-transparent-png.png'
                        alt=''
                        width={100}
                        height={100}
                        className=' object-cover'
                    />
                </Link>
            </div>

            {/* Large LINKS */}
            <div className=" flex flex-col   md:flex-row items-center justify-center gap-[70px] md:gap-[40px]   ">
                {linkss.map((link, i) => (
                    <div className=" "
                        key={i}
                    >
                        {/* LARGE */}
                        <Link href={link.href} className={`

                    ${index == i ? 'text-orange-400' : ' text-white'}
                     hidden md:flex  
                    cursor-pointer
                  hover:text-orange-400 
                    duration-300 
                    text-xl
`}
                            onClick={() => setIndex(i)}
                        >
                            {link.name}
                        </Link>
                        {/* MOBAILe */}

                        <div className={` absolute  bg-black z-10 w-screen flex md:hidden items-center justify-center p-5 mt-8
                         left-0
                       
                         ${active ? '' : 'top-[-1000px]'}
                    ${index == i ? 'text-orange-400' : ' text-white'}

                  hover:text-orange-400 
                    transition-all
                    duration-300 

                    text-xl
`}
                            onClick={() => setIndex(i)}
                        >
                            <Link href={link.href} className=' pt-2' onClick={() => setActive(false)}>
                                {link.name}

                            </Link>
                        </div>

                    </div>
                ))}
            </div>
            <p className='text-white text-xl flex md:hidden mr-5' onClick={() => setActive(true)} >Menu</p>
        </div>
    )
}

export default Header