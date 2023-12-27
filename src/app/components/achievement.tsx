import Image from 'next/image'
import React from 'react'

type Props = {}

const Achievement = (props: Props) => {
    return (
        <div className=" container mx-auto flex items-center flex-col my-12 " id='achievement'>
            <div className="">
                <h1 className=' text-4xl md:text-7xl font-semibold  text-orange-500  z-[]  mt-5 mb-12  '>Achievement</h1>
            </div>
            <div className='   md:mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12  '>
                {/* card */}
                <div className=" w-[300px] h-[300px]  rounded shadow shadow-black flex flex-col items-center">
                    {/* ICON */}
                    <div className="flex-2 w-full h-full relative">
                        <Image
                            alt=''
                            fill
                            className=' object-cover rounded-t'
                            src={'/2021_8_25_18_11_41_851.jpg'}
                        />
                    </div>
                    {/*details*/}
                    <div className=" flex-1 flex items-center justify-center  flex-col  mb-1">
                        {/* NAME */}
                        <h1 className=' text-2xl font-bold '>فيزيك</h1>
                        <h2 className=' my-4 text-xl font-bold 
                        '>المركز الاول</h2>

                        {/* YEAR */}
                        <div className="">
                            <p className='  text-gray-500  text-lg' >2002-2003</p>
                        </div>
                    </div>

                </div>
                <div className=" w-[300px] h-[300px]  rounded shadow shadow-black flex flex-col items-center jc">
                    {/* ICON */}
                    <div className="flex-2 w-full h-full relative">
                        <Image
                            alt=''
                            fill
                            className=' object-cover rounded-t'
                            src={'/2021_8_25_18_11_41_851.jpg'}
                        />
                    </div>
                    {/*details*/}
                    <div className=" flex-1 flex items-center justify-center  flex-col  mb-1">
                        {/* NAME */}
                        <h1 className=' text-2xl font-bold '>فيزيك</h1>
                        <h2 className=' my-4 text-xl font-bold 
                        '>المركز الاول</h2>

                        {/* YEAR */}
                        <div className="">
                            <p className='  text-gray-500  text-lg' >2002-2003</p>
                        </div>
                    </div>

                </div>
                <div className=" w-[300px] h-[300px]  rounded shadow shadow-black flex flex-col items-center jc">
                    {/* ICON */}
                    <div className="flex-2 w-full h-full relative">
                        <Image
                            alt=''
                            fill
                            className=' object-cover rounded-t'
                            src={'/2021_8_25_18_11_41_851.jpg'}
                        />
                    </div>
                    {/*details*/}
                    <div className=" flex-1 flex items-center justify-center  flex-col  mb-1">
                        {/* NAME */}
                        <h1 className=' text-2xl font-bold '>فيزيك</h1>
                        <h2 className=' my-4 text-xl font-bold 
                        '>المركز الاول</h2>

                        {/* YEAR */}
                        <div className="">
                            <p className='  text-gray-500  text-lg' >2002-2003</p>
                        </div>
                    </div>

                </div>
                <div className=" w-[300px] h-[300px]  rounded shadow shadow-black flex flex-col items-center jc">
                    {/* ICON */}
                    <div className="flex-2 w-full h-full relative">
                        <Image
                            alt=''
                            fill
                            className=' object-cover rounded-t'
                            src={'/2021_8_25_18_11_41_851.jpg'}
                        />
                    </div>
                    {/*details*/}
                    <div className=" flex-1 flex items-center justify-center  flex-col  mb-1">
                        {/* NAME */}
                        <h1 className=' text-2xl font-bold '>فيزيك</h1>
                        <h2 className=' my-4 text-xl font-bold 
                        '>المركز الاول</h2>

                        {/* YEAR */}
                        <div className="">
                            <p className='  text-gray-500  text-lg' >2002-2003</p>
                        </div>
                    </div>

                </div>
                <div className=" w-[300px] h-[300px]  rounded shadow shadow-black flex flex-col items-center jc">
                    {/* ICON */}
                    <div className="flex-2 w-full h-full relative">
                        <Image
                            alt=''
                            fill
                            className=' object-cover rounded-t'
                            src={'/2021_8_25_18_11_41_851.jpg'}
                        />
                    </div>
                    {/*details*/}
                    <div className=" flex-1 flex items-center justify-center  flex-col  mb-1">
                        {/* NAME */}
                        <h1 className=' text-2xl font-bold '>فيزيك</h1>
                        <h2 className=' my-4 text-xl font-bold 
                        '>المركز الاول</h2>

                        {/* YEAR */}
                        <div className="">
                            <p className='  text-gray-500  text-lg' >2002-2003</p>
                        </div>
                    </div>

                </div>
              


            </div>
        </div>
    )
}

export default Achievement