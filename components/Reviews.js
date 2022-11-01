import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Reviews() {
    const settings = {
        slidesPerView: 1,
        grabCursor: true,
        pagination: {
            clickable: true
        }
    };
    return (
        <div className="py-32 px-4">
            <h1 className="font-bold text-3xl md:text-4xl text-center">Good news from far away 🥇</h1>
            <p className="text-gray-500 text-xl text-center mt-3 mb-14">Let's see what people think of Ciseco</p>
            <div className="">
                <div className="flex items-center justify-center md:justify-between max-w-3xl mx-auto">
                    <div className="relative hidden md:block">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-green-400 rounded-full top-1 right-1 z-[-1]"></div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[120px] h-[120px]"/>
                        <div className="absolute w-[120px] h-[120px] bg-blue-400 rounded-full top-2 right-2 z-[-1]"></div>
                    </div>
                    <div className="relative hidden md:block">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-yellow-400 rounded-full -top-1 right-1 z-[-1]"></div>
                    </div>
                </div>
                <div className="flex mt-12 justify-between max-w-5xl mx-auto gap-16">
                    <div className="relative hidden md:block">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-red-400 rounded-full top-1 right-1 z-[-1]"></div>
                    </div>
                    <div className="flex flex-1 gap-2 md:gap-4 min-h-0 min-w-0 reviews-swiper">
                        <h1 className="text-5xl">❝</h1>
                        <Swiper { ...settings } modules={[Pagination]}>
                            <SwiperSlide>
                                <div className="">
                                    <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam.</p>
                                    <h1 className="text-2xl font-bold text-center mt-8">Lorem</h1>
                                    <div className="flex justify-center gap-2 mt-3.5">
                                        {[1,2,3,4,5].map(num=>(
                                        <svg key={num} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-amber-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam.</p>
                                    <h1 className="text-2xl font-bold text-center mt-8">Lorem</h1>
                                    <div className="flex justify-center gap-2 mt-3.5">
                                        {[1,2,3,4,5].map(num=>(
                                        <svg key={num} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-amber-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="">
                                    <p className="text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quibusdam.</p>
                                    <h1 className="text-2xl font-bold text-center mt-8">Lorem</h1>
                                    <div className="flex justify-center gap-2 mt-3.5">
                                        {[1,2,3,4,5].map(num=>(
                                        <svg key={num} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-amber-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <h1 className="text-5xl">❞</h1>
                    </div>
                    <div className="relative hidden md:block">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-slate-400 rounded-full -top-1 right-1 z-[-1]"></div>
                    </div>
                </div>
                <div className="items-center justify-between max-w-md mx-auto hidden md:flex">
                    <div className="relative translate-y-6">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-amber-400 rounded-full -top-1 right-1 z-[-1]"></div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="rounded-full object-cover object-center w-[59px] h-[59px]"/>
                        <div className="absolute w-[59px] h-[59px] bg-purple-400 rounded-full top-1 right-1 z-[-1]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}