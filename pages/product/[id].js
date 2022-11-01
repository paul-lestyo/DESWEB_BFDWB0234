import { Swiper, SwiperSlide } from "swiper/react";
import { ColorDot, Footer, Header, Layout, Popup, Product } from "../../components";
import { Thumbs } from "swiper";
import { useRef, useState } from "react";
import "swiper/css/thumbs";
import Link from "next/link";
import data, { getProductById } from "../../lib/data";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";
import { useRouter } from "next/router";


export default function ProductDetail({ product }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity,setQuantity] = useState(1);
    const dispatch = useDispatch();
    const { id } = useRouter().query;
    const swiperTop = {
        slidesPerView: 1,
        thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null },
        modules: [Thumbs]
    }
    const swiperBottom = {
        slidesPerView: 8,
        onSwiper: setThumbsSwiper,
        watchSlidesProgress: true
    }
    const swiperRelated = {
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
    }
    const [showDescription,setShowDescription] = useState(true);
    const [showFeatures,setShowFeatures] = useState(true);
    const [color,setColor] = useState(product.colors[0]);
    const [size,setSize] = useState(Object.keys(product.sizes)[0]);
    const swiperRef = useRef(null);
    const handleNext = () => {
        swiperRef.current?.swiper.slideNext();
    }
    const handlePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            ...product,
            size,
            quantity,
        }))
    }
    console.log(product)
    return (
        <Layout title={"Short Pant - Kita Nyaman"}>
            <Header/>
            <Popup/>
            <div className="container px-4 my-11 mx-auto">
                <div className="flex flex-col md:flex-row gap-[30px]">
                    <div className="flex-1 min-h-0 min-w-0 space-y-3">
                        <div className="relative group overflow-hidden">
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
                            <Swiper { ...swiperTop } ref={swiperRef}>
                                {product.images.map((url,i)=>(
                                    <SwiperSlide key={i}>
                                        <img src={url} className="aspect-square w-full h-full object-cover object-center"/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <Swiper { ...swiperBottom } >
                            {product.images.map((url,i)=>(
                                <SwiperSlide key={i}>
                                    <img src={url} className="h-[90px]"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex-1 divide-y">
                        <div className="pb-8">
                            <div className="flex items-center justify-between">
                                <h1 className="font-bold text-2xl">{product.name}</h1>
                                <button className="w-[43px] h-[43px] rounded-full flex items-center justify-center border">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <h1 className="text-lg px-3 rounded-lg py-0.5 font-semibold border-2 border-green-500 text-green-500">$32.00</h1>
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
                                <h2 className="font-medium">Color: <span className="font-bold">Blue</span></h2>
                                <div className="flex mt-2.5 gap-2">
                                    {product.colors.map((clr,i)=>(
                                    <ColorDot key={i} onClick={()=>setColor(clr)} active={color===clr} className="w-8 h-8" color={clr}/>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-medium">Size: <span className="font-bold uppercase">{size}</span></h2>
                                    <Link href="/">
                                        <a className="transition hover:text-blue-400 text-blue-500 text-sm">See sizing chart</a>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-7 mt-2.5 gap-2">
                                    {Object.keys(product.sizes).map(productSize=>(
                                    <button disabled={!product.sizes[productSize]} onClick={()=>product.sizes[productSize] && setSize(productSize)} key={productSize} className={`h-10 border rounded-2xl font-semibold uppercase disabled:text-slate-900 disabled:text-opacity-20 disabled:cursor-not-allowed disabled:border-slate-300 ${size===productSize ? 'bg-blue-600 text-white' : 'border-slate-200 hover:border-blue-600 transition'}`}>{productSize}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex mt-8 space-x-3.5">
                                <div className="flex bg-slate-100/70 px-2 py-3 rounded-full space-x-5 items-center">
                                    <button disabled={quantity<=1} onClick={()=>quantity>1 && setQuantity(before=>before-1)} className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <span className="select-none flex-1">{quantity}</span>
                                    <button onClick={()=>setQuantity(before=>before+1)} className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                        </svg>
                                    </button>
                                </div>
                                <button onClick={handleAddToCart} className="flex px-4 py-3 transition rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold flex-1 items-center justify-center gap-2 shadow-xl">
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
                            <div className="grid grid-cols-2 gap-3 pt-4">
                                <div className="p-5 rounded-2xl bg-red-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                    </svg>
                                    <h2 className="mt-2.5 font-semibold">Free shipping</h2>
                                    <p className="text-sm text-slate-500 mt-0.5">On orders over $50.00</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-green-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 16.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path>
                                        <path d="M2 13.5v5.5l5 3"></path>
                                        <path d="M7 16.545l5 -3.03"></path>
                                        <path d="M17 16.5l-5 -3l5 -3l5 3v5.5l-5 3z"></path>
                                        <path d="M12 19l5 3"></path>
                                        <path d="M17 16.5l5 -3"></path>
                                        <path d="M12 13.5v-5.5l-5 -3l5 -3l5 3v5.5"></path>
                                        <path d="M7 5.03v5.455"></path>
                                        <path d="M12 8l5 -3"></path>
                                    </svg>
                                    <h2 className="mt-2.5 font-semibold">Very easy to return</h2>
                                    <p className="text-sm text-slate-500 mt-0.5">Just phone number</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-green-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                    <h2 className="mt-2.5 font-semibold">Nationwide Delivery</h2>
                                    <p className="text-sm text-slate-500 mt-0.5">Fast delivery nationwide.</p>
                                </div>
                                <div className="p-5 rounded-2xl bg-red-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h2 className="mt-2.5 font-semibold">Refunds policy</h2>
                                    <p className="text-sm text-slate-500 mt-0.5">60 days return for any reason</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h1 className="text-center font-semibold text-2xl mb-8">Related Products</h1>
                    <Swiper { ...swiperRelated }>
                        {data.trending.map(product=>(
                            <SwiperSlide key={product.id}>
                                <Product data={product}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export function getServerSideProps(ctx) {
    const product = getProductById(ctx.query.id);
    if (product) {
        return { props: { product } }
    }else {
        return { notFound: true }
    }
}