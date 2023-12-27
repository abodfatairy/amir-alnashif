import React from 'react'
// import { getSingleWork } from '../../../../sanity/sanityFitch';
import { getSingleWork } from '../../../../sanity/sanityFitch';
import ImagesContainer from '@/app/components/imagescontainer';
type Props = {
    params: { slug: string }
}

const page = async ({ params }: Props) => {
    const slug = params.slug;
    const singleWrok = await getSingleWork(slug)
    { console.log(singleWrok) }
    return (
        <div className=' container mx-auto my-9'>
            <h1 className=' text-center text-3xl mb-2 text-orange-500'>{singleWrok.name}</h1>
            <div className="flex flex-col md:flex-row gap-10">

                {/* image container */}
                <div className=" flex-1 ">

                    <ImagesContainer singleWrok={singleWrok} />
                </div>

                {/* Desc */}
                <div className=" flex-1">
                    <h1 className=" capitalize text-4xl font-semibold">
                        {singleWrok.name}
                    </h1>
                    <p className=" text-2xl font-semibold text-gray-600">
                        {singleWrok.desc}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default page