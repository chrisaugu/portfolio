import React, { useContext, useState, useEffect } from 'react'
import Link from "next/link"
import styled from 'styled-components'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
// import { Switch } from '@headlessui/react'

// import { TOKENS_DARK, TOKENS_LIGHT } from '../lib/Tokens'

// import { ThemeContext } from '../lib/Theme'
// import ThemeToggleContext from '../lib/ThemeToggleContext'

const StyledNavbar = styled.nav `
  height: 5em;
  border-bottom: 0.1em solid gray;
  color: #fff;
  background: #fff;
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

export default function Nav({ children }) {
    // const { theme, setTheme } = useContext(ThemeContext);
    // const {
    //   isDarkTheme,
    //   toggleTheme
    // } = useContext(ThemeToggleContext);

    // function handleChangeTokens() {
    //   setTheme(theme === TOKENS_DARK ? TOKENS_LIGHT : TOKENS_DARK)
    // }

    const {theme, setTheme} = useTheme();
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    function MyToggle() {
        const [enabled, setEnabled] = useState(false)

        return (
            <>
                {/* <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                </Switch> */}

                <Switch.Group>
                    <div className="flex items-center">
                        <Switch.Label className="mr-4">Enable notifications</Switch.Label>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${
                                enabled ? 'bg-blue-600' : 'bg-gray-200'
                            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            <span
                                className={`${
                                    enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                            />
                            <span
                                /* Transition the Switch's knob on state change */
                                className={`transform transition ease-in-out duration-200
                                ${enabled ? "translate-x-9" : "translate-x-0"}
                                `}
                            />
                        </Switch>
                    </div>
                </Switch.Group>

            </>
        )
    }

    return (
        <>
            {/*<StyledNavbar className={`nav ${props.className}`}>
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
            </StyledNavbar>*/}

            {/*<nav className="flex flex-grow">
                <ul className="flex flex-grow justify-end flex-wrap items-center">
                    <li>
                    <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                    </li>
                    <li>
                    <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                        <a>
                        <span>Sign up</span>
                        <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                        </svg>
                        </a>
                    </Link>
                    </li>
                </ul>
            </nav>*/}

            <nav hidden className="nav backdrop-blur xbg-white xborder-gray-200 xdark:bg-gray-800 px-2 sm:px-4 py-5 py-2.5 z-10">

                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link href="/">
                        <a className="flex">
                            {/*<img src="/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo"/>*/}
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Kitten</span>
                        </a>
                    </Link>

                    <div className="flex md:order-2">
                        {/*<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>*/}
                        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>

                        {/*<button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>*/}


                        <button
                            aria-label="Toggle Dark Mode"
                            type="button"
                            xclassName="w-10 h-10 p-3 rounded focus:outline-none"
                            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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

                        {/*<label className="swap swap-rotate">
                            <input type="checkbox"/>
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                            </svg>
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                            </svg>
                        </label>*/}

                        <input type="checkbox" class="toggle toggle-lg" checked />


                        {/*<button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
                  <svg id="theme-toggle-dark-icon" className={`${theme === "dark" ? '' : 'hidden'} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                  <svg id="theme-toggle-light-icon" className={`${theme === "dark" ? 'hidden' : ''} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clip-rule="evenodd"></path></svg>
              </button>*/}

                        {/*<MyToggle/>*/}

                    </div>

                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {children}
                        </ul>
                    </div>
                    
                    <label className="btn btn-circle swap swap-rotate">
                        <input type="checkbox"/>        
                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                    </label>

                    {/*<div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2"><div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"><a href="/" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Home</a> <a href="/components" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Components</a> <div className="relative inline-block hidden lg:block"><div><button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"><span>Components</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div> <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style="display: none;"><div className="w-36"><a href="/components" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                    All Components
                </a> <a href="/awesome" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                    awesome
                </a> <a href="/components/alpinejs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Alpinejs
                    </a> <a href="/components/buttons" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Buttons
                    </a> <a href="/components/cards" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Cards
                    </a> <a href="/components/dropdowns" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Dropdowns
                    </a> <a href="/components/forms" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Forms
                    </a> <a href="/components/inputs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Inputs
                    </a> <a href="/components/logins" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Logins
                    </a> <a href="/components/modals" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Modals
                    </a> <a href="/components/navigations" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Navigations
                    </a> <a href="/components/pages" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Pages
                    </a> <a href="/components/selects" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Selects
                    </a> <a href="/components/tabs" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Tabs
                    </a> <a href="/components/tables" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Tables
                    </a> <a href="/components/widget" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                        Widget
                    </a></div></div></div> <a href="/premium" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Premium</a> <a href="/cheatsheet" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Cheatsheet</a> <a href="/gradient-generator" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Gradient Generator</a> <div className="relative inline-block hidden lg:block"><div><button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"><span>Tools</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button></div> <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style="display: none;"><div className="w-40"><a target="_blank" href="/cheatsheet" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                    Cheatsheet
                </a> <a target="_blank" href="/gradient-generator" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                    Gradient Generator
                </a></div></div></div></div> <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-4"><button type="button" aria-label="Color Mode" className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 transform -rotate-90"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></button> <form action="/search" className="flex flex-wrap justify-between md:flex-row"><input type="search" name="query" placeholder="Search" required="required" className="w-full h-12 px-4 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg lg:w-20 xl:transition-all xl:duration-300 xl:w-36 xl:focus:w-44 lg:h-10 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-teal-500 dark:focus:border-teal-500 focus:outline-none focus:ring focus:ring-primary dark:placeholder-gray-400 focus:ring-opacity-40"/></form> <a href="/submit-component" className="flex items-center justify-center h-12 px-4 text-sm font-semibold text-center text-white rounded-md lg:h-10 bg-primary hover:bg-teal-300">
              Submit <span className="lg:hidden 2xl:inline">&nbsp;new component</span></a> <a href="/login" className="flex items-center justify-center h-12 px-4 mt-2 text-sm text-center text-gray-600 transition-colors duration-200 transform border rounded-lg lg:h-10 dark:text-gray-300 dark:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
            Login
            </a></div></div>*/}
                </div>
            </nav>

        
            {/*<div className="max-w-screen-xl p-4 mx-auto">
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>*/}

            <div class="navbar bg-base-100">
              <div class="navbar-start">
                <div class="dropdown">
                  <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li tabindex="0">
                      <a class="justify-between">
                        Parent
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                      </a>
                      <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                      </ul>
                    </li>
                    <li><a>Item 3</a></li>
                  </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
              </div>
              <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/blog"><a>Blog</a></Link></li>
                    <li><Link href="/projects"><a>Projects</a></Link></li>
                    <li><Link href="/movies"><a>Movies</a></Link></li>
                    <li><Link href="/books"><a>Books</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
              </div>
              <div class="navbar-end">
                <a class="btn">Get started</a>
              </div>
            </div>

        </>
    );
};