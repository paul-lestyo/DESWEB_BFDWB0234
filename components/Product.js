import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { setShowQuickView } from "../slices/popupSlice";
import ColorDot from "./ColorDot";

export default function Product({ data }) {
    const [liked,setLiked] = useState(false);
    const [color,setColor] = useState(data.colors[0]);
    const dispatch = useDispatch();
    const handleAction = (action) => {
        if (action==='quickView') {
            dispatch(setShowQuickView(data))
        }else if (action==='addToCart') {
            dispatch(addToCart({
                ...data,
                color,
                size: 'XL',
                quantity: 1
            }))
        }
    }
    return (
        <div className="">
            <div className="aspect-square bg-gray-100 rounded-2xl relative group overflow-hidden">
                <button onClick={()=>setLiked(before=>!before)} className="absolute w-9 h-9 rounded-full bg-white flex items-center justify-center top-3 right-3">
                    {liked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-red-400">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    )}
                </button>
                <Link href={`/product/${data.id}`}>
                    <a>
                        <img className="h-full w-full" src={data.img}/>
                    </a>
                </Link>
                <div className="hidden sm:flex absolute bottom-0 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bottom-4 transition-all inset-x-1 justify-center gap-1">
                    <button onClick={()=>handleAction('addToCart')} className="flex gap-1.5 items-center bg-slate-900 hover:bg-slate-800 text-white transition text-sm rounded-full px-3.5 py-1.5 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span>Add to bag</span>
                    </button>
                    <button onClick={()=>handleAction('quickView')} className="flex gap-1.5 items-center bg-white hover:bg-gray-100 transition text-sm rounded-full px-3.5 py-1.5 shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path d="M13.28 7.78l3.22-3.22v2.69a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.69l-3.22 3.22a.75.75 0 001.06 1.06zM2 17.25v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22a.75.75 0 011.06 1.06L4.56 16.5h2.69a.75.75 0 010 1.5h-4.5a.747.747 0 01-.75-.75zM12.22 13.28l3.22 3.22h-2.69a.75.75 0 000 1.5h4.5a.747.747 0 00.75-.75v-4.5a.75.75 0 00-1.5 0v2.69l-3.22-3.22a.75.75 0 10-1.06 1.06zM3.5 4.56l3.22 3.22a.75.75 0 001.06-1.06L4.56 3.5h2.69a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0V4.56z" />
                        </svg>
                        <span>Quick view</span>
                    </button>
                </div>
            </div>
            <div className="p-2.5 pt-5">
                <Link href={`/product/${data.id}`}>
                    <a className="text-lg font-medium block">{data.name}</a>
                </Link>
                <p className="my-1.5 ">$60.00</p>
                <div className="flex gap-3">
                    {data.colors.map(clr=>(
                    <ColorDot key={clr} onClick={()=>setColor(clr)} active={color===clr} className="w-6 h-6" color={clr}/>
                    ))}
                </div>
            </div>
        </div>
    )
}