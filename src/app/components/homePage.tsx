import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getBannar } from '../../../sanity/sanityFitch'
import { url } from 'inspector'

type Props = {}

const HomePage = async (props: Props) => {
    const banner = await getBannar();
    return (
        <div className=' '>

            {

                banner?.map((ban) => (
                    <div className=" w-screen h-screen " key={ban._id}>


                        <div className=" w-screen h-screen   bg-cover bg-center  clip-your   relative filter brightness-50      "
                            style={{
                                backgroundImage: `url(${ban.image})`
                            }}>

                        </div>
                        {/* Details */}

                        <div className=" absolute  top-[200px] md:top-[400px] left-[50px] md:left-[200px] text-white flex flex-col  justify-center gap-5  items-center   "  >

                            <h1 className=' text-4xl md:text-7xl font-semibold text-orange-500 cos z-20'>
                                {ban.largeText1}
                            </h1>

                            <h2 className=' text-3xl md:text-5xl my-4'>{ban.smallText}</h2>


                            <p className=' text-xl md:text-3xl'>{ban.desc}</p>


                            <Link href={'https://api.whatsapp.com/send/?phone=963949261134'} target='blank' className='  '>
                                <button type='button' className='
        my-[20px] py-2 px-4  md:py-4 md:px-8 border border-white rounded-lg cursor-pointer hover:border-orange-500
         hover:text-orange-200 duration-300 md:text-3xl text-orange-500  font-simibold'>
                                    {ban.buttonText}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))

            }
            <Image
                alt=''
                width={200}
                height={200}
                src={'/logo-transparent-png.png'}
                className=' absolute bottom-0 md:left-[50px]'
            />
        </div>
    )
}

export default HomePage