import Head from "next/head";
import { Fragment } from "react";

export default function Layout({ children, title }) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </Fragment>
    )
}