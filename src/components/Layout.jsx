import React, { useState, useEffect } from "react"
import { findDOMNode } from "react-dom"
import Head from "next/head"
import Link from "next/link"

import styled, { ThemeProvider } from 'styled-components'
import useDarkMode from "../lib/useDarkMode"
import ThemeToggleContext from '../lib/ThemeToggleContext'
import {
    darkTheme,
    lightTheme
} from '../theme'

import Nav from "./Nav"
import NavItem from './NavItem'
import Seo from "./Seo"

const Layout = ({title, children}) => {
    const useMousePosition = () => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });
        const [scrollPos, setScrollPos] = useState({ x: null });

        const updateMousePosition = ev => {
            setMousePosition({ x: ev.pageX, y: ev.pageY });
        };

        const updateScrollPos = ev => {
            setScrollPos({ x: scrollY });
        };

        useEffect(() => {
            window.addEventListener("mousemove", updateMousePosition);

            return () => window.removeEventListener("mousemove", updateMousePosition);
        }, []);

        useEffect(() => {
            window.addEventListener("scroll", updateScrollPos);

            return () => window.removeEventListener("scroll", updateScrollPos);
        }, []);

        // window.addEventListener('mousemove', (e) => {
        //     cursor.style.left = e.pageX + 'px';
        //     cursor.style.top = e.pageY + 'px';
        //     cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY));
        //     // console.log(e)
        //   });
        //   window.addEventListener('scroll', () => {
        //     const fromTop = cursor.getAttribute('data-fromTop');
        //     cursor.style.top = scrollY + parseInt(fromTop) + 'px';
        //     console.log(scrollY);
        //   });
        //   window.addEventListener('click', () => {
        //     if (cursor.classList.contains('click')) {
        //       cursor.classList.remove("click");
        //       void cursor.offsetWidth; // trigger a DOM reflow
        //       cursor.classList.add("click");
        //     } else {
        //       cursor.classList.add("click");
        //     }
        //   });

        //   const [x, setX] = useState(null)
        //   const [y, setY] = useState(null)

        //   // We do not expose a way to update mouseX and mouseY
        //   // This will be handled within the hook itself
        //   return { mouseX: x, mouseY: y }

        return mousePosition;
    };

    const useMove = () => {
        const [state, setState] = useState({x: 0, y: 0})

        const handleMouseMove = e => {
            e.persist()
            setState(state => ({...state, x: e.clientX, y: e.clientY}))
        }
        return {
            x: state.x,
            y: state.y,
            handleMouseMove,
        }
    }

    const Hook = () => {
        const {x, y, handleMouseMove} = useMove();

        return (
            <div className="mouseArea" onMouseMove={handleMouseMove}>
                Hook
                <div className="mouseInfo">
                    The current mouse position is ({x}, {y})
                </div>
            </div>
        )
    }

    const CustomCursor = () => {
        const { x, y } = useMousePosition();
        const hasMovedCursor = typeof x === "number" && typeof y === "number";

        // const domRef = React.createRef();
        // const el = findDOMNode(domRef);

        return (
            <div className={`cursor`} style={{left: x, top: y}}>
                {/*{hasMovedCursor
                  ? `Your cursor is at ${x}, ${y}.`
                  : "Move your mouse around."}*/}
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{title ? title : "😎 Xian"} | Web & Mobile Developer</title>
            </Head>

            <Seo/>

            {/* <CustomCursor/>*/}

            {/*<Hook/>*/}

            <header className="">
                <Nav>
                    <NavItem href="/" isActive>Home</NavItem>
                    <NavItem href="/blog">Blog</NavItem>
                    <NavItem href="/profile">About</NavItem>
                    <NavItem href="/projects">Projects</NavItem>
                    <NavItem href="/movies">Movies</NavItem>
                    <NavItem href="/books">Books</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </Nav>
            </header>

            <main className="mt-20 dark:bg-gray-800 bg-gray-100 w-full">
                {children}
            </main>

            <section class="bg-white dark:bg-gray-900">
                <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
                        Join us and get the update <br/> from anywhere
                    </h2>

                    <div class="mt-6 sm:-mx-2">
                        <div class="inline-flex w-full sm:w-auto sm:mx-2">
                            <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                Buy Blox Now
                            </a>
                        </div>

                        <div class="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0">
                            <a href="#" class="inline-flex items-center justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                Start a Journey
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/*<footer>
                <div className="wrapper">
                    <div className="social">
                        Social
                        <ul>
                            <li><a
                                className="nav__list-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/chrisaugu"
                            >
                                GitHub
                            </a></li>
                            <li className="nav__list-item">
                                <a
                                    className="nav__list-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.linkedin.com/in/chrisaugu/"
                                >
                                  LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    Made with ❤ in Beautiful Madang.
                </div>
            </footer>*/}

            <footer class="bg-white dark:bg-gray-800">
                <div class="container px-6 py-8 mx-auto">
                    <div class="text-center">
                        <a href="#" class="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                        <p class="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                        <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                            <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                                </svg>

                                <span class="mx-1">View Demo</span>
                            </button>

                            <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
                        </div>
                    </div>

                    <hr class="my-10 border-gray-200 dark:border-gray-700" />

                    <div class="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p class="text-sm text-gray-400">&copy; Copyright 2021. All Rights Reserved.</p>

                        <div class="flex mt-3 -mx-2 sm:mt-0">
                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>
                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>
                            <a href="#" class="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with ❤ in Beautiful Madang.</span>
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; {new Date().getFullYear()} &nbsp;
                    <a href="https://www.christianaugustyn.me" className="hover:underline" target="_blank">Kitten</a>.
                </span>
                <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <Link href="/profile">
                            <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/movies">
                            <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Movies</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/books">
                            <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Books</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                        </Link>
                    </li>
                </ul>
            </footer>

        </>
    )
}

export default Layout


// const StyledMain = styled.main `
//   height: calc(100vh - 5em);
//   width: 100%;
// `;

// const MainLayoutContainer = styled.div `
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
// `;

// function MainLayout(props) {
//   const darkMode = useDarkMode(true);
//   const currentTheme = darkMode.value ? darkTheme : lightTheme;

//   const [isMounted, setIsMounted] = React.useState(false);
//   React.useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   return (
//     <>
//         <Head>
//             <title>Dark Mode demo</title>
//         </Head>

//         <ThemeProvider theme={currentTheme}> 
//             { isMounted && (
//                 <ThemeToggleContext.Provider
//                     value={{
//                       isDarkTheme: darkMode.value,
//                       toggleTheme: darkMode.toggle,
//                     }}
//                 >
//                     <MainLayoutContainer>
//                       <Navbar title="Dark Mode Demo" />
//                       <StyledMain>{props.children}</StyledMain>
//                     </MainLayoutContainer>
//                 </ThemeToggleContext.Provider>
//             )
//         }
//         </ThemeProvider> 
//     </>
//   );
// }

// export default MainLayout;