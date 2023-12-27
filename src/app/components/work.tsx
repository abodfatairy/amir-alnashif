import Image from 'next/image'
import React from 'react'
import { getWrok } from '../../../sanity/sanityFitch'
import SwiberContainer from './swiberContainer'
type Props = {}

const Work = async (props: Props) => {
    const imageWork = await getWrok()
    // { console.log(imageWork) }
    return (
        <div className=' mt-[1000px] md:mt-[1000px] lg:mt-[125px] w-screen h-screen  ' id='work'>
            <div className=" bg-white z-30 w-9 text-black">

            </div>
            <div className=" w-screen h-screen absolute   -z-10 bg-cover bg-center bg-fixed filter brightness-50      "
                style={{
                    backgroundImage: `url(/pxfuel.jpg)`
                }}>

            </div>
            <div className="flex flex-col gap-6 items-center  ">

                <div className="">
                    <h1 className=' text-4xl md:text-7xl font-semibold  text-orange-500  z-20  mt-5 mb-12  '> My Work</h1>
                </div>
                {/* IMAGES CONTAINER */}
                <div className=" container mx-auto">
                    {/* MAP I */}
                    <SwiberContainer images={imageWork} />
                    


                </div>
            </div>
        </div>
    )
}

export default Work