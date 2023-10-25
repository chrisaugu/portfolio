import {useState, useEffect} from 'react'
import Link from 'next/link'

import Navbar from "./Navbar/Navbar"
import Nav from './Navbar/Nav'
import NavItem from './Navbar/NavItem'

export default () => {
    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px 
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

// backdrop-blur bg-white border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-800 z-10
    
    return (
        <>
            <header className={`sticky w-full py-4 dark:bg-gray-800 top-0 z-50 xshadow-sm xbg-gray-900 xborder-b xborder-gray-800/75 xbackdrop-filter xbackdrop-blur {!top && 'blur shadow-lg'}`}>
                <Navbar/>
                <Nav>
                    <NavItem href="/" isActive>Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="https://blog.christianaugustyn.me">Blog</NavItem>
                    <NavItem href="/projects">Projects</NavItem>
                    <NavItem href="/movies">Movies</NavItem>
                    <NavItem href="/books">Books</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            </header>
        </>
    )
}