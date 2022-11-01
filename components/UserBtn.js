import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function UserBtn() {
    const [showAccount, setShowAccount] = useState(false);
    useEffect(()=>{
        const clickEvent = (e) => {
            if (!e.target.closest('.accountBtn')) {
                setShowAccount(false);
            }
        }
        window.addEventListener('click',clickEvent);
        return ()=> window.removeEventListener('click',clickEvent);
    },[])
    return (
        <div className="relative hidden md:block">
            <button onClick={()=>setShowAccount(before=>!before)} className="accountBtn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </button>
            <AnimatePresence>
                {showAccount && (
                <motion.div initial={{ top: 'calc(100% + 5px)', opacity: 0 }} exit={{ top: 'calc(100% + 5px)', opacity: 0 }} animate={{ top: '100%', opacity: 1 }} transition={{ duration: 0.1 }} className="absolute top-full pt-7 pb-5 rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-[260px] right-0 divide-y">
                    <div className="flex gap-3 pb-6 px-6">
                        <img src="https://chisnghiax.com/ciseco/static/media/Image-8.5ae85a64aab1965e33a5.png" className="w-[48px] h-[48px] rounded-full object-cover object-center"/>
                        <div>
                            <h2 className="font-bold">Eden Smith</h2>
                            <p className="text-xs">Los Angeles, CA</p>
                        </div>
                    </div>
                    <div className="pt-3 px-3">
                        <Link href={"/"}>
                            <a className="flex p-2 items-center gap-3 text-sm font-medium transition hover:bg-neutral-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span>My Account</span>
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a className="flex p-2 items-center gap-3 text-sm font-medium transition hover:bg-neutral-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <span>My Order</span>
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a className="flex p-2 items-center gap-3 text-sm font-medium transition hover:bg-neutral-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span>Wishlist</span>
                            </a>
                        </Link>
                        <Link href={"/"}>
                            <a className="flex p-2 items-center gap-3 text-sm font-medium transition hover:bg-neutral-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                <span>Log out</span>
                            </a>
                        </Link>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}