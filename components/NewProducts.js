import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../lib/data';
import NextBtn from './NextBtn';
import PrevBtn from './PrevBtn';
import Product from './Product';

export default function NewProducts(){
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
    <div className="container mx-auto mt-24 px-4 xl:px-[40px]">
        <div className='flex items-center justify-between mb-14'>
            <h1 className="text-3xl font-bold">New Arrivals.</h1>
            <div className='space-x-3'>
                <PrevBtn onClick={handlePrev}/>
                <NextBtn onClick={handleNext}/>
            </div>
        </div>
        <div className="new-product">
          <Swiper { ...settings } ref={swiperRef}>
            {data.newProducts.map((product)=>(
                <SwiperSlide key={product.id}>
                    <Product data={product}/>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
    )
}