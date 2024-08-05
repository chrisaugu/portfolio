import React, { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useThemeContext, TOKENS_DARK, TOKENS_LIGHT } from '@/contexts/ThemeContext';
import useTheme from '@/hooks/useTheme';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StyledNavbar = styled.nav`
  height: 5em;
  border-bottom: 0.1em solid gray;
  color: #fff;
  // background: #fff;
  color: (props) => props.theme.color.text;
  background: (props) => props.theme.color.background;

  .container {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    button {
      margin: 0 2em;
      padding: 0.5em 1em;
      font-size: 1em;
      background: transparent;
      color: #252525;
      border: 0.1em solid #252525;
      color: (props) => props.theme.color.text;
      border: 0.1em solid (props) => props.theme.color.text;
    }
  }
`;

export default function Nav({ children, ...props }) {
    const router = useRouter();
    const { theme, toggleTheme, /*setTheme, isDarkTheme*/ } = useTheme();

    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    function openMobileMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <>

            {/* <StyledNavbar className={`nav ${props.className}`}>
                <div className={'container'}>
                    <ul className="nav__list">
                    <li className="nav__list-item">
                        <Link className="nav__list-link" href="/projects">
                        Projects
                        </Link>
                    </li>
                    <li className="nav__list-item">
                        <Link className="nav__list-link" href="/contact">
                        Contact
                        </Link>
                    </li>
                    </ul>

                    <a href="">
                    Christian
                    </a>

                    <div className="">
                    <button
                        className="nav__list-btn-tokens"
                        title={ theme === TOKENS_DARK ? 'Trocar para modo claro' : 'Trocar para modo escuro' }
                        onClick={() => handleChangeTokens()}
                    >
                        <svg
                            focusable="false"
                            data-prefix="fas"
                            data-icon="adjust"
                            className="nav__list-tokens-icon svg-inline--fa fa-adjust fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                        <path
                            fill="currentColor"
                            d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"
                        ></path>
                        </svg>
                    </button>
                    </div>

                    <h1>
                    {props.title}
                    </h1>
                    <button onClick={toggleTheme}>
                      Switch to {isDarkTheme ? 'Light': 'Dark'} mode
                    </button>
                </div>
            </StyledNavbar> */}

            <nav className={`backdrop-blur xbg-white xborder-gray-200 xdark:bg-gray-800 px-2 sm:px-4 py-5 py-2.5 z-10 `}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link href="/">
                        <div className="flex">
                            {/*<img src="/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo"/>*/}
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">kitten</span>
                        </div>
                    </Link>


                    <div className="flex md:order-2">
                        {/*<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>*/}

                        <button onClick={openMobileMenu} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>

                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            className="w-10 h-10 p-3 rounded focus:outline-none text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            onClick={toggleTheme}
                        >
                            {mounted && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    className="w-4 h-4 text-yellow-500 dark:text-yellow-500"
                                >
                                    {theme === "dark" ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                        />
                                    )}
                                </svg>
                            )}
                        </button>

                        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" className={`${theme === "dark" ? '' : 'hidden'} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            <svg id="theme-toggle-light-icon" className={`${theme === "dark" ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </button>

                        {/* <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                            <svg id="theme-toggle-dark-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            <svg id="theme-toggle-light-icon" className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </button> */}

                    </div>

                    <div className={`${isOpen ? "md:block" : "hidden"} w-full md:w-auto`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {children}
                        </ul>
                    </div>

                    {/*<nav class="flex justify-center space-x-4">
                      <a href="/dashboard" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
                      <a href="/team" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
                      <a href="/projects" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
                      <a href="/reports" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
                    </nav>*/}
                </div>
            </nav>

            {/* <div className="max-w-screen-xl p-4 mx-auto">
                <div className="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div className="flex lg:w-0 lg:flex-1">
                        <span className="w-20 h-10 bg-gray-200 rounded-lg">kitten</span>
                    </div>

                    <nav className="hidden space-x-8 text-sm font-medium md:flex">
                        <Link className="text-gray-500" href="/about">About</Link>
                        <Link className="text-gray-500" href="/feeds">Blog</Link>
                        <Link className="text-gray-500" href="/projects">Projects</Link>
                        <Link className="text-gray-500" href="/books">Books</Link>
                        <Link className="text-gray-500" href="/movies">Movies</Link>
                        <Link className="text-gray-500" href="/contact">Contact</Link>
                    </nav>

                    <div className="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        <a className="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg"
                            href="">
                            Log in
                        </a>

                        <a className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
                            href="">
                            Sign up
                        </a>
                    </div>

                    <div className="lg:hidden">
                        <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
                            <span className="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewbox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M4 6h16M4 12h16M4 18h16"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div> */}

        </>
    );
};
