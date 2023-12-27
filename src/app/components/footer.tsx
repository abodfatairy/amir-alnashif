import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className=' w-screen bg-black/90 h-[100px] shadow-md shadow-black  '>

            <div className=" flex container mx-auto">

                {/* logo */}
                <div className=" flex-1 pt-2 ml-2">
                    <Image
                        alt=''
                        width={100}
                        height={1}
                        src={'/logo-transparent-png.png'}
                    />
                </div>
                {/* Dtails */}
                <div className=" flex-1 pt-2 ">
                    <p className=' text-gray-500'>
                        Remember to start with exercises that match your fitness level and gradually

                    </p>
                </div>
                {/* IMAGES */}
                <div className=" flex-1 pt-2 flex gap-2 items-center justify-center">

                    <Link target='blank' href={'https://www.facebook.com/princess.sandra.9041'} className=" cursor-pointer">
                        <Image
                            alt=''
                            width={25}
                            height={25}
                            src={'/facebook.png'}
                        />
                    </Link>
                    <Link target='blank' href={'https://api.whatsapp.com/send/?phone=963949261134'} className=" cursor-pointer">
                        <Image
                            alt=''
                            width={25}
                            height={25}
                            src={'/whatsapp.png'}
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Footer