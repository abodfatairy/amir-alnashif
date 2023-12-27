'use client'
import Image from 'next/image'
// import React from 'react'
import React, { useState } from 'react'
type Props = {}


const ImagesContainer = ({ singleWrok }) => {
    const [index, setIndex] = useState(0)

    return (
        <div className="">
            {singleWrok.image[0] &&

                <div className=" relative w-[100vw] h-[700px] md:h-[700px] max-w-[600px]">

                    <Image
                        fill
                        alt=''
                        src={singleWrok.image[index] ? singleWrok.image[index] : ''}
                        className=' object-cover transition-all duration-300'
                    />
                </div>


            }
            <div className=" flex transition-all duration-300 max-w-[400px] overflow-hidden md:overflow-visible">
                {singleWrok.image.map((item, i) => (

                    <Image key={i}
                        src={item ? item : ''}
                        width={100}
                        height={100}
                        alt=''
                        className={i === index ? ' cursor-pointer scale-110 transition-all duration-300 object-cover' : 'object-cover'}
                        onMouseEnter={() => setIndex(i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImagesContainer