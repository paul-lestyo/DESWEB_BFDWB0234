import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectShowQuicView, setShowQuickView } from "../slices/popupSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import ColorDot from "./ColorDot";
import Link from "next/link";
import { useRef, useState } from "react";

export default function QuickView() {
    const swiperRef = useRef(null);
    const data = useSelector(selectShowQuicView);
    const [showDescription,setShowDescription] = useState(true);
    const [showFeatures,setShowFeatures] = useState(true);
    const dispatch = useDispatch();
    const [color,setColor] = useState(data.colors && data.colors[0]);
    const handleClose = () => {
        dispatch(setShowQuickView(false));
    }
    const settings = {
        slidesPerView: 1,
        loop: true,
    }
    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    }
    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    }
    return (
        <AnimatePresence>
            {data && (
                <div className="fixed top-0 left-0 z-30 w-full h-full">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="bg-black/30 absolute w-full h-full top-0 left-0 z-[-1]"></motion.div>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.2 }} exit={{ scale: 0.9, opacity: 0 }} className="max-w-5xl w-full bg-white mx-auto max-h-[calc(100%-60px)] my-[30px] flex rounded-md relative">
                        <button onClick={handleClose} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-white shadow-xl w-[40px] h-[40px] flex items-center justify-center rounded-full transition hover:bg-slate-900 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="flex-1 rounded-tl-md rounded-bl-md overflow-hidden relative group pointer">
                            <div className="absolute z-10 flex items-center justify-between w-full top-1/2 -translate-y-1/2 pointer-events-none">
                                <button onClick={handlePrev} className="w-[45px] h-[45px] border rounded-full transition hover:text-blue-500 -translate-x-full group-hover:translate-x-10 pointer-events-auto opacity:0 group-hover:opacity-100 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                                        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button onClick={handleNext} className="w-[45px] h-[45px] border rounded-full transition hover:text-blue-500 translate-x-full group-hover:-translate-x-10 pointer-events-auto opacity:0 group-hover:opacity-100 duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <Swiper { ...settings } ref={swiperRef}>
                                <SwiperSlide>
                                    <img src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-455x606.jpg" className="w-full h-full object-cover object-center"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-455x606.jpg" className="w-full h-full object-cover object-center"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="https://minimog.thememove.com/wp-content/uploads/2021/12/product_fashion_12_a_1-455x606.jpg" className="w-full h-full object-cover object-center"/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="flex-1 px-9 py-8 divide-y overflow-auto custom-scrollbar">
                            <div className="pb-8">
                                <div className="flex items-center justify-between">
                                    <h1 className="font-bold text-2xl">{data.name}</h1>
                                    <button className="w-[43px] h-[43px] rounded-full flex items-center justify-center border">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <h1 className="text-lg px-3 rounded-lg py-0.5 font-semibold border-2 border-green-500 text-green-500">{data.price}</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-gray-500">
                                            {[1,2,3,4,5].map(num=>(
                                            <svg key={num} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                            </svg>
                                            ))}
                                        </div>
                                        <p className="text-[15px] text-gray-700">(0 reviews)</p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h2 className="font-medium">Color: <span className="font-bold">{color}</span></h2>
                                    <div className="flex mt-2.5 gap-2">
                                        {data.colors.map(clr=>(
                                        <ColorDot key={clr} active={color===clr} className="w-8 h-8" color={clr}/>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex items-center justify-between">
                                        <h2 className="font-medium">Size: <span className="font-bold">XS</span></h2>
                                        <Link href="/">
                                            <a className="transition hover:text-blue-400 text-blue-500 text-sm">See sizing chart</a>
                                        </Link>
                                    </div>
                                    <div className="grid grid-cols-7 mt-2.5 gap-2">
                                        <button className="h-10 border rounded-2xl bg-blue-600 font-semibold text-white">XS</button>
                                        <button className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition">S</button>
                                        <button className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition">M</button>
                                        <button className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition">L</button>
                                        <button className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition">XL</button>
                                        <button disabled className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition disabled:text-slate-900 disabled:text-opacity-20 disabled:cursor-not-allowed disabled:border-slate-300">2XL</button>
                                        <button disabled className="h-10 border rounded-2xl border-slate-200 font-semibold hover:border-blue-600 transition disabled:text-slate-900 disabled:text-opacity-20 disabled:cursor-not-allowed disabled:border-slate-300">3XL</button>
                                    </div>
                                </div>
                                <div className="flex mt-8 space-x-3.5">
                                    <div className="flex bg-slate-100/70 px-2 py-3 rounded-full space-x-5 items-center">
                                        <button disabled={true} className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <span className="select-none flex-1">1</span>
                                        <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button className="flex px-4 py-3 transition rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold flex-1 items-center justify-center gap-2 shadow-xl">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        <span>Add to cart</span>
                                    </button>
                                </div>
                            </div>
                            <div className="pt-8 space-y-2">
                                <div>
                                    <button onClick={()=>setShowDescription(before=>!before)} className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 font-semibold hover:bg-gray-200 transition rounded-lg">
                                        <span>Description</span>
                                        {showDescription ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                        )}
                                    </button>
                                    {showDescription && (
                                    <div className="p-4 text-slate-600">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla explicabo minima unde voluptates numquam quam dolorum quae quaerat, esse assumenda!
                                    </div>
                                    )}
                                </div>
                                <div>
                                    <button onClick={()=>setShowFeatures(before=>!before)} className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 font-semibold hover:bg-gray-200 transition rounded-lg">
                                        <span>Features</span>
                                        {showFeatures ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                        )}
                                    </button>
                                    {showFeatures && (
                                    <div className="p-4 text-slate-600">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla explicabo minima unde voluptates numquam quam dolorum quae quaerat, esse assumenda!
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}