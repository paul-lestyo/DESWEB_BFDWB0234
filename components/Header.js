import Link from "next/link";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { setShowSearch } from "../slices/popupSlice";
import CartBtn from "./CartBtn";
import Logo from "./Logo";
import UserBtn from "./UserBtn";
import WishlistBtn from "./WishlistBtn";

export default function Header() {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <nav className="flex justify-between items-center px-8 md:px-[50px] h-[70px] bg-white shadow-sm sticky top-0 z-20">
                <div className="flex-1 lg:hidden flex items-center">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <ul className="gap-5 font-medium hidden lg:flex flex-1">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Product</a>
                    </li>
                </ul>
                <Logo/>
                <div className="flex items-center gap-5 flex-1 justify-end">
                    <UserBtn/>
                    <button onClick={()=>dispatch(setShowSearch(true))}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <WishlistBtn/>
                    <CartBtn/>
                </div>
            </nav>
        </Fragment>
    )
}