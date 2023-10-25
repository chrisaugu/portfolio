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
// nav backdrop-blur bg-white border-gray-200 px-2 sm:px-4 py-5 dark:bg-gray-800 z-10
    return (
        <>
            <header className={`sticky xtop-0 xz-50 xtext-sm xshadow-sm xbody-font xfont-medium text-white xbg-gray-900 xborder-b xborder-gray-800/75 xbackdrop-filter xbackdrop-blur {!top && 'blur shadow-lg'}`}>
            
                {/* <div className="px-4 py-3 text-white bg-indigo-600 sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8">
                    <p className="font-medium text-center sm:text-left">
                        Love Alpine JS?
                        <br className="sm:hidden" />
                        Check out this new deep dive course!
                    </p>

                    <a className="block px-5 py-3 mt-4 text-sm font-medium text-center text-indigo-600 transition bg-white rounded-lg sm:mt-0 hover:bg-white/90 active:text-indigo-500 focus:outline-none focus:ring" 
                        href="/alpinejs">
                        Learn More
                    </a>
                </div>

                <div className="px-4 py-3 text-white bg-indigo-600">
                    <p className="text-sm font-medium text-center">
                        Love Alpine JS? Check out this new course!

                        <a className="underline" href="/alpinejs"> Learn More &rarr; </a>
                    </p>
                </div> */}
                
                {/*<Navbar/>*/}
                <Nav>
                    <NavItem href="/" isActive>Home</NavItem>
                    <NavItem href="/about">About</NavItem>
                    <NavItem href="https://blog.christianaugustyn.me">Blog</NavItem>
                    <NavItem href="/projects">Projects</NavItem>
                    <NavItem href="/movies">Movies</NavItem>
                    <NavItem href="/books">Books</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            
              {/*<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span className="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                  <a className="mr-5 hover:text-white">First Link</a>
                  <a className="mr-5 hover:text-white">Second Link</a>
                  <a className="mr-5 hover:text-white">Third Link</a>
                  <a className="mr-5 hover:text-white">Fourth Link</a>
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 rounded-md border border-transparent focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>*/}
            </header>
        </>
    )
}