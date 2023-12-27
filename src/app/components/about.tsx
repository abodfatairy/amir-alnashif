import React from 'react'
import Image from 'next/image'
import { getAbout } from '../../../sanity/sanityFitch'
type Props = {}

const About = async (props: Props) => {
    const aboutSanity = await getAbout()

    return (
        <div className=" " id='about'>

            {
                aboutSanity?.map((item) => (
                    <div className=' w-screen h-[60vh] flex container mx-auto flex-col lg:flex-row  my-7 gap-6 ' key={item._id}>
                        {/* IMAGE CONTAINER */}
                        <div className=" flex flex-col md:flex-row gap-[327px] md:gap-6 flex-1 relative ">
                            {/* one */}
                            <div className="">

                                <div className=" w-[200px] h-[300px] md:w-[200px] md:h-[700px] relative rounded-lg">
                                    <Image
                                        alt=''
                                        fill
                                        className=' object-cover rounded-lg'
                                        src={item.image[0]}
                                    />
                                </div>
                            </div>
                            {/* two */}
                            <div className="">

                                <div className=" w-[200px] h-[300px] md:w-[200px] md:h-[700px] absolute bottom-1 rounded-lg">
                                    <Image
                                        alt=''
                                        fill
                                        className=' object-cover rounded-lg'
                                        src={item.image[1]}
                                    />
                                </div>
                            </div>
                        </div>
                        {/* DETAILS container */}
                        <div className=" flex-1 relative flex flex-col items-center justify-center     ">
                            <div className=" ">

                                <h1 className=' text-4xl md:text-7xl font-semibold  text-orange-500  z-20   cos'> About ME</h1>
                                <h3 className=' text-2xl mt-3  font-semibold  '> Amir Nashif</h3>
                            </div>

                            <p className=' text-2xl text-right p-2 text-gray-700 leading-[40px]'>
                                مدرب شخصي معتمد لمدة 10 سنوات<br />
                                عملت مع مجموعة متنوعة من العملاء من جميع الأعمار والمستويات اللياقة البدنية<br />
                                خبرة في تطوير برامج تمارين مخصصة وخطط تغذية لتحقيق أهداف العملاء<br />
                                قادر على تقديم تدريب شخصي فعال وملهم لتحفيز العملاء ومساعدتهم على تحقيق أهدافهم<br />
                                مهارات قوية في التواصل والتفاعل مع العملاء لتوفير الدعم والمشورة المستمرة
                                ملتزم بالتعلم المستمر ومتابعة أحدث اتجاهات التدريب والتغذية الصحية<br />

                                <br />
                                <br />
                                إذا كنت تبحث عن مدرب شخصي ملتزم ومتفانٍ في مساعدتك على تحقيق أهدافك الصحية واللياقة البدنية، فأنا مستعد للعمل معك. اتصل بي اليوم لبدء رحلتك نحو الصحة واللياقة البدنية.
                            </p>

                        </div>
                    </div>
                ))
            }

        </div>

    )
}

export default About