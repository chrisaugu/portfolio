import React, {useEffect, useState} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from 'swr';

import Seo from "./Seo"
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({title, children}) => {
    return (
        <>
            {/*<CustomCursor/>*/}
            {/*<Hook/>*/}

            {/* <Seo title={title}/> */}

            <Header/>

            <main className="bg-white dark:bg-gray-800 w-full mx-auto overflow-hidden">
                {children}
            </main>

            <Footer />
        </>
    );
}
export default Layout;