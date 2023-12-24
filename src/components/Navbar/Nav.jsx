import React, { Fragment, useContext, useState, useEffect } from 'react'
import Link from "next/link"
import styled from 'styled-components'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
// import { Disclosure, Menu, Transition, Switch } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { TOKENS_DARK, TOKENS_LIGHT } from '../../lib/Tokens'

// import { ThemeContext } from '../lib/Theme'
// import ThemeToggleContext from '../lib/ThemeToggleContext'

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

export default function Nav({ children }) {
    const router = useRouter();
    const {theme, setTheme} = useTheme();
    // const { theme, setTheme } = useContext(ThemeContext);
    // const {
    //   isDarkTheme,
    //   toggleTheme
    // } = useContext(ThemeToggleContext);

    // function handleChangeTokens() {
    //   setTheme(theme === TOKENS_DARK ? TOKENS_LIGHT : TOKENS_DARK)
    // }
    function handleSwitchDarkMode() {
      setTheme(theme === "dark" ? "light" : "dark");
    }
    const [mounted, setMounted] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    function openMobileMenu() {
      setToggle(!toggle)
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

            <nav className={`xbackdrop-blur xbg-white xborder-gray-200 xdark:bg-gray-800 px-2 sm:px-4 py-5 py-2.5 z-10 `}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">

                    <Link href="/">
                        <a className="flex">
                            {/*<img src="/images/logo.svg" className="mr-3 h-6 sm:h-10" alt="Flowbite Logo"/>*/}
                            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">kitten</span>
                        </a>
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
                            className="w-10 h-10 p-3 rounded focus:outline-none"
                            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                            onClick={() => handleSwitchDarkMode() }
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

                    </div>

                    <div className={`${toggle === true ? "md:block" : "hidden"} w-full md:w-auto`} id="mobile-menu">
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

                    {/*<div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2"><div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center"><a href="/" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Home</a> <a href="/components" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Components</a> <div className="relative inline-block hidden lg:block"><div><button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"><span>Components</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div> <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style="display: none;"><div className="w-36"><a href="/components" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
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
                            </a></div></div></div> <a href="/premium" className="text-gray-500 dark:text-gray-200 hover:text-gray-800">Premium</a> <a href="/cheatsheet" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Cheatsheet</a> <a href="/gradient-generator" target="_blank" className="text-gray-500 dark:text-gray-200 hover:text-gray-800 lg:hidden">Gradient Generator</a> <div className="relative inline-block hidden lg:block"><div><button className="text-gray-500 dark:text-gray-200 hover:text-gray-800 flex items-center space-x-1 focus:outline-none"><span>Tools</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button></div> <div className="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl dark:border-gray-700 lg:left-auto lg:right-0 dark:bg-gray-800" style="display: none;"><div className="w-40"><a target="_blank" href="/cheatsheet" className="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:text-primary dark:hover:text-primary">
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
            </div>

            <Disclosure as="nav" className="bg-gray-800">
              {({ open }) => (
                <>
                  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*}
                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                      <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                          <img
                            className="block lg:hidden h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                          />
                          <img
                            className="hidden lg:block h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                          <div className="flex space-x-4">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'px-3 py-2 rounded-md text-sm font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                          type="button"
                          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown *}
                        <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  <Disclosure.Panel className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block px-3 py-2 rounded-md text-base font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>*/}

        </>
    );
};
