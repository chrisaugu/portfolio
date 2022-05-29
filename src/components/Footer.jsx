import Link from "next/link"

import Nav from "./Navbar/Nav"
import NavItem from './Navbar/NavItem'

export default () => (
    <>
        {/*<footer className="bg-gray-50 bg-white dark:bg-gray-800">

            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <span className="block w-32 h-10 bg-gray-200 rounded-lg"></span>

                        <p className="max-w-xs mt-4 text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
                        </p>

                        <div className="flex mt-8 space-x-6 text-gray-500">
                            <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Facebook </span>

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Instagram </span>

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Twitter </span>

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>

                            <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span className="sr-only"> GitHub </span>

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                                </svg>
                            </a>

                            <a className="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                                <span className="sr-only"> Dribbble </span>

                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-medium">
                                Company
                            </p>

                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href=""> About </a>
                                <a className="hover:opacity-75" href=""> Meet the Team </a>
                                <a className="hover:opacity-75" href=""> History </a>
                                <a className="hover:opacity-75" href=""> Careers </a>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium">
                                Services
                            </p>

                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href=""> 1on1 Coaching </a>
                                <a className="hover:opacity-75" href=""> Company Review </a>
                                <a className="hover:opacity-75" href=""> Accounts Review </a>
                                <a className="hover:opacity-75" href=""> HR Consulting </a>
                                <a className="hover:opacity-75" href=""> SEO Optimisation </a>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium">
                                Helpful Links
                            </p>

                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href=""> Contact </a>
                                <a className="hover:opacity-75" href=""> FAQs </a>
                                <a className="hover:opacity-75" href=""> Live Chat </a>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium">
                                Legal
                            </p>

                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:opacity-75" href=""> Privacy Policy </a>
                                <a className="hover:opacity-75" href=""> Terms & Conditions </a>
                                <a className="hover:opacity-75" href=""> Returns Policy </a>
                                <a className="hover:opacity-75" href=""> Accessibility </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <p className="mt-8 text-xs text-gray-500">
                &copy; 2022 Company Name
                </p>
            </div>
        


            /*<div className="wrapper">
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

            <div className="container px-6 py-8 mx-auto">
                <div className="text-center">
                    <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>

                    <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                        <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-200 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                            <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                            </svg>

                            <span className="mx-1">View Demo</span>
                        </button>

                        <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
                    </div>
                </div>

                <hr className="my-10 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-400">&copy; Copyright 2021. All Rights Reserved.</p>

                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>
                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>
                        <a href="#" className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
                    </div>
                </div>
            </div>
        </footer>*/}

        <div class="stats shadow">
            <div class="stat">
                <div class="stat-title">Total Page Views</div>
                <div class="stat-value">89,400</div>
                <div class="stat-desc">21% more than last month</div>
            </div>
        </div>

        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>
                <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
            </div>
            <div></div> 
            <div>
                <span class="footer-title">Company</span> 
                <a class="link link-hover">About us</a> 
                <a class="link link-hover">Contact</a>
            </div> 
            <div>
                <span class="footer-title">Legal</span> 
                <a class="link link-hover">Terms of use</a> 
                <a class="link link-hover">Privacy policy</a>
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
                        <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Facebook</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Twitter</a>
                    </Link>
                </li>
                <li>
                    <Link href="/movies">
                        <a className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Instagram</a>
                    </Link>
                </li>
            </ul>

        </footer>

        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
               <p>Made with ❤ in Beautiful Madang</p>
            </div>
            <div className="footer-center p-4 text-base-content">
               <p>Copyright © {new Date().getFullYear()} - All right reserved by Christian Augustyn</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
               <a>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        className="fill-current">
                       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                   </svg>
               </a>
               <a>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        className="fill-current">
                       <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                   </svg>
               </a>
               <a>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        className="fill-current">
                       <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                   </svg>
               </a>
            </div>
        </footer>

    </>
)