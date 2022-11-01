import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../lib/data';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Product from './Product';

export default function BestSeller(){
    const swiperRef = useRef(null);
    const settings = {
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            640: {
                spaceBetween: 32
            },
            1024: {
                slidesPerView: 3
            },
            1280: {
                slidesPerView: 4
            }
        }
    };
    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    }
    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    }
    return (
        <div className="container px-4 xl:px-[40px] mx-auto mt-24 mb-14">
            <div className='flex items-center justify-between mb-14'>
                <h1 className="text-3xl font-bold">Best Selller.</h1>
                <div className='space-x-3'>
                    <PrevBtn onClick={handlePrev}/>
                    <NextBtn onClick={handleNext}/>
                </div>
            </div>
            <Swiper { ...settings } ref={swiperRef}>
            {data.bestSeller.map((product)=>(
                <SwiperSlide key={product}>
                    <Product data={product}/>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}