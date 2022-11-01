import { useDispatch } from "react-redux"
import { decQuantity, incQuantity, removeFromCart } from "../slices/cartSlice";
import { motion } from "framer-motion";

export default function CartItem({ data }) {
    const dispatch = useDispatch();
    return (
        <motion.div layout className="py-7 flex gap-4 items-center">
            <div onClick={()=>dispatch(removeFromCart(data.id))} className="relative w-[112px] h-[112px] rounded-lg overflow-hidden group cursor-pointer">
                <img src={data.img} className="object-cover object-center w-full h-full"/>
                <div className="absolute w-full h-full top-0 left-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 bg-gray-100 rounded-full text-gray-600">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </div>
            </div>
            <div className="flex-1">
                <h1 className="mb-1.5 text-[15px] font-medium">{data.name} - {data.color} - {data.size}</h1>
                <p className="text-sm text-gray-500 mb-2.5">Unit Price: $16.88</p>
                <div className="flex items-center justify-between">
                    <div className="flex h-9 items-center bg-slate-900 text-white rounded-md overflow-hidden">
                        <button onClick={()=>dispatch(decQuantity(data.id))} className="w-9 transition hover:bg-slate-800 h-full duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-auto">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <span className="w-9 text-center font-medium">{data.quantity}</span>
                        <button onClick={()=>dispatch(incQuantity(data.id))} className="w-9 transition hover:bg-slate-800 h-full duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mx-auto">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                            </svg>
                        </button>
                    </div>
                    <h1 className="font-semibold text-[15px]">$51.00</h1>
                </div>
            </div>
        </motion.div>
    )
}