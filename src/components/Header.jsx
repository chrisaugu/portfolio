import Link from 'next/link'

import Navbar from "./Navbar/Navbar"
import Nav from './Navbar/Nav'
import NavItem from './Navbar/NavItem'

export default () => (
    <>
        <header className={`sticky top-0 z-50 text-sm shadow-sm font-medium text-white bg-gray-900 border-b border-gray-800/75 backdrop-filter backdrop-blur {!top && 'blur shadow-lg'}`}>
        
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
            
            {/* <Navbar/> */}
            <Nav>
                <NavItem href="/" isActive>Home</NavItem>
                <NavItem href="/about">About</NavItem>
                <NavItem href="/blog">Blog</NavItem>
                <NavItem href="/projects">Projects</NavItem>
                <NavItem href="/movies">Movies</NavItem>
                <NavItem href="/books">Books</NavItem>
                <NavItem href="/contact">Contact</NavItem>
            </Nav>
        
            {/*<div className="navbar bg-base-100">
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>*/}

        </header>
    </>
)