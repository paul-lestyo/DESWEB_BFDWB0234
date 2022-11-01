import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectShowSearch, setShowSearch } from "../slices/popupSlice";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import UserBtn from "./UserBtn";
import WishlistBtn from "./WishlistBtn";

export default function Search() {
    const showSearch = useSelector(selectShowSearch);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(setShowSearch(false));
    }
    return (
        <AnimatePresence>
            {showSearch && (
                <div className="fixed top-0 left-0 w-full h-full z-30">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="bg-black/30 absolute w-full h-full top-0 left-0"></motion.div>
                    <motion.div initial={{ translateY: '-100%' }} animate={{ translateY: 0 }} exit={{ translateY: '-100%' }} transition={{ type: 'tween', duration: 0.2 }} className="py-10 px-[50px] flex bg-white w-full z-10 relative items-center">
                        <div className="flex-[25%]">
                            <Logo/>
                        </div>
                        <form method="post" className="flex-[50%] relative">
                            <input autoFocus={true} type="text" placeholder="Search products" className="w-full h-full outline-none px-4 border py-2 rounded focus:border-gray-400 transition"/>
                            <button className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex-[25%] flex gap-6 justify-end">
                            <UserBtn/>
                            <WishlistBtn/>
                            <CartBtn/>
                        </div>
                        <button onClick={handleClose} className="absolute top-1.5 right-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}