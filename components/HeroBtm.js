import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Link from 'next/link';

export default function HeroBtm() {
    const settings = {
        slidesPerView: 1,
        modules: [Pagination],
        pagination: {
            dynamicBullets: true,
        }
    };
    return (
        <div className="py-10">
            <Swiper { ...settings } >
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[370px] bg-green-500 flex items-center px-14 md:px-24 lg:px-28 relative">
                        <div className='space-y-6 z-10'>
                            <h1 className='font-black uppercase text-white text-4xl lg:text-5xl'>Up to 50% off</h1>
                            <p className='text-white uppercase font-medium lg:text-lg'>For all winter collection of kid's items</p>
                            <Link href={'/'}>
                                <a className='uppercase px-4 py-1.5 border-4 block w-max text-sm font-medium text-white border-white'>Shop Now</a>
                            </Link>
                        </div>
                        <img src="https://chisnghiax.com/ciseco/static/media/promo2.9278c86b3a2f01d6666e.png" className='h-full absolute right-14 md:right-24 lg:right-28'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[370px] bg-orange-500 flex items-center px-14 md:px-24 lg:px-28 relative">
                        <div className='space-y-6 z-10'>
                            <h1 className='font-black uppercase text-white text-4xl lg:text-5xl'>Up to 50% off</h1>
                            <p className='text-white uppercase font-medium lg:text-lg'>For all winter collection of kid's items</p>
                            <Link href={'/'}>
                                <a className='uppercase px-4 py-1.5 border-4 block w-max text-sm font-medium text-white border-white'>Shop Now</a>
                            </Link>
                        </div>
                        <img src="https://chisnghiax.com/ciseco/static/media/promo2.9278c86b3a2f01d6666e.png" className='h-full absolute right-14 md:right-24 lg:right-28'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[300px] lg:h-[370px] bg-yellow-500 flex items-center px-14 md:px-24 lg:px-28 relative">
                        <div className='space-y-6 z-10'>
                            <h1 className='font-black uppercase text-white text-4xl lg:text-5xl'>Up to 50% off</h1>
                            <p className='text-white uppercase font-medium lg:text-lg'>For all winter collection of kid's items</p>
                            <Link href={'/'}>
                                <a className='uppercase px-4 py-1.5 border-4 block w-max text-sm font-medium text-white border-white'>Shop Now</a>
                            </Link>
                        </div>
                        <img src="https://chisnghiax.com/ciseco/static/media/department1.8c732cf70fb1db8a427c.png" className='h-full absolute right-14 md:right-24 lg:right-28'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}