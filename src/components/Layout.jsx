import React from "react"
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

const Layout = ({title, children}) => (
    <>
        <Head>
            <title>{title ? title : "😎 Xian"} | Web & Mobile Developer</title>
        </Head>

        <Seo/>

        <header className="">
            <Nav>
              <NavItem href="/" isActive>Home</NavItem>
              <NavItem href="/profile">About</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/movies">Movies</NavItem>
              <NavItem href="/books">Books</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Nav>
        </header>

        <main className="mt-20 dark:bg-gray-800 w-full">
            {children}
        </main>
        
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

        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with ❤ in Beautiful Madang.</span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                &copy; {new Date().getFullYear()} &nbsp;
                <a href="https://www.christianaugustyn.me" className="hover:underline" target="_blank">Kitten</a>.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
                <li>
                    <a href="/profile" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
                </li>
                <li>
                    <a href="/projects" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Projects</a>
                </li>
                <li>
                    <a href="/movies" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Movies</a>
                </li>
                <li>
                    <a href="/books" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Books</a>
                </li>
                <li>
                    <a href="/contact" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
                </li>
            </ul>
        </footer>

    </>
)

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