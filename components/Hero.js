import { Swiper, SwiperSlide } from 'swiper/react';
import { AnimatePresence, motion } from 'framer-motion';
import "swiper/css/effect-fade";
import { EffectFade, Pagination } from "swiper";

export default function Hero() {
    const settings = {
        slidesPerView: 1,
        modules: [EffectFade,Pagination],
        effect: 'fade',
        loop: true,
        pagination: {
            clickable: true,
        }
    };
    return (
        <Swiper { ...settings }>
            <SwiperSlide>
                {({ isActive }) => (
                    <div style={{ backgroundImage: 'url(https://minimog.thememove.com/wp-content/uploads/2021/12/h6_slide_01.jpg)' }} className="h-[450px] lg:h-[calc(100vh-70px)] bg-no-repeat bg-cover bg-center flex items-center justify-center">
                        <AnimatePresence>
                            {isActive && (
                                <div className='relative'>
                                    <motion.h1 initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} className='font-black text-white text-6xl mb-8 tracking-wide relative'>SWEATERS.</motion.h1>
                                    <motion.button initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} whileHover={{ scale: 1.05 }} transition={{ delay: 0.1 }} className='text-white font-semibold bg-black px-7 py-2.5 rounded-md mx-auto w-max block relative'>Shop Now</motion.button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div style={{ backgroundImage: 'url(https://minimog.thememove.com/wp-content/uploads/2021/12/h6_slide_02.jpg)' }} className="h-[450px] lg:h-[calc(100vh-70px)] bg-no-repeat bg-cover bg-center flex items-center justify-center">
                        <AnimatePresence>
                            {isActive && (
                                <div className='relative'>
                                    <motion.h1 initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} className='font-black text-white text-6xl mb-8 tracking-wide relative'>HOODIE.</motion.h1>
                                    <motion.button initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} whileHover={{ scale: 1.05 }} transition={{ delay: 0.1 }} className='text-white font-semibold bg-black px-7 py-2.5 rounded-md mx-auto w-max block relative'>Shop Now</motion.button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div style={{ backgroundImage: 'url(https://minimog.thememove.com/wp-content/uploads/2021/12/h6_slide_03.jpg)' }} className="h-[450px] lg:h-[calc(100vh-70px)] bg-no-repeat bg-cover bg-center flex items-center justify-center">
                        <AnimatePresence>
                            {isActive && (
                                <div className='relative'>
                                    <motion.h1 initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} className='font-black text-white text-6xl mb-8 tracking-wide relative'>TSHIRT.</motion.h1>
                                    <motion.button initial={{ top: 100, opacity: 0 }} animate={{ top: 0, opacity: 1 }} whileHover={{ scale: 1.05 }} transition={{ delay: 0.1 }} className='text-white font-semibold bg-black px-7 py-2.5 rounded-md mx-auto w-max block relative'>Shop Now</motion.button>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </SwiperSlide>
        </Swiper>
    )
}