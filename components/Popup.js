import { Fragment } from "react";
import QuickView from "./QuickView";
import Search from "./Search";
import ShoppingCart from "./ShoppingCart";

export default function Popup() {
    return (
        <Fragment>
            <ShoppingCart/>
            <Search/>
            <QuickView/>
        </Fragment>
    )
}