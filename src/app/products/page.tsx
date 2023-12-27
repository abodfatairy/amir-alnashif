import React from 'react'
import { getProduct } from '../../../sanity/sanityFitch'
import Image from 'next/image'

type Props = {}

const page = async (props: Props) => {
  const products = await getProduct()
  console.log(products)
  return (
    <div className="">
      <h1 className=' text-right mr-4 p-4 text-xl text-gray-800'>
        اجعل كل يوم في التمرين فرصة للتألق بتصميماتنا الرياضية الرائعة. اختر الراحة، اختر الأناقة، اختر التفرد مع منتجاتنا المميزة.





      </h1>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          products?.map((product) => (
            <div className=""
              key={product._id}
            >

              <Image
                alt=''
                width={400}
                height={
                  400
                }
                src={product.image ? product.image : ''}
                className=' object-cover md:hover:scale-125 transition-all duration-300'
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page