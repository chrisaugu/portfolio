import React from "react"
import styled from 'styled-components'

import api from '../lib/api'
import skills from '../db/skills.json'
// import Logo from '../images/sparkle.svg'

// import Sparkles from "../components/Sparkles"
import Layout from "../components/Layout"
import BigLetter from "../components/BigLetter"
import HeroVideo from "../components/HeroVideo"
import {ProductCard, Card} from "../components/Cards"
import CallToAction from "../components/Sections/CallToAction";

// const ContainerDiv = styled.div `
//   background: (props) => props.theme.color.background;
//   color: (props) => props.theme.color.text;
//   width: ''
// `;

const IndexPage = () => {
    return (
        <Layout>

            <section className="hero-section">
                <div className="hero min-h-screen" style={{backgroundImage: 'url(../kalibobo.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"/>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>

            <HeroVideo />

            {/*<div className="bg-yellow-200">*/}
            {/*    <div className="container flex px-6 py-4 mx-auto lg:h-128 lg:py-16">*/}
            {/*        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">*/}
            {/*            <div className="max-w-lg">*/}
            {/*                <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">Set your title</h1>*/}
            {/*                <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur*/}
            {/*                    adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae*/}
            {/*                    laudantium quod rem voluptatem eos accusantium cumque.</p>*/}
            {/*                <div className="mt-6">*/}
            {/*                    <a href="#"*/}
            {/*                       className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Download*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">*/}
            {/*            <img className="object-cover w-full h-full max-w-2xl rounded-md"*/}
            {/*                 src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <BigLetter word={"Hello"} lead={"world"} />

            {/*<div className="text-5xl font-extrabold">*/}
            {/*    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">*/}
            {/*      Hello world*/}
            {/*    </span>*/}
            {/*</div>*/}

            {/*<ProductCard/>*/}
            {/*<Card/>*/}

            {/*<div className="flex flex-col w-full lg:flex-row">*/}
            {/*  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> */}
            {/*  <div className="divider lg:divider-horizontal">OR</div> */}
            {/*  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>*/}
            {/*</div>*/}

            {/*<ContainerDiv className="flex flex-col items-center justify-center w-full">*/}
            {/*    /!*<Sparkles>*!/*/}
            {/*    /!*  <img src="gold-cat.png" alt="A golden cat statue" />*!/*/}
            {/*    /!*</Sparkles>*!/*/}

            {/*    <section className="container mx-auto px-6 p-10">*/}
            {/*        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">*/}
            {/*            Features*/}
            {/*        </h2>*/}
            {/*        <div className="flex items-center flex-wrap mb-20">*/}
            {/*            <div className="w-full md:w-1/2">*/}
            {/*                <h4 className="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>*/}
            {/*                <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>*/}
            {/*            </div>*/}
            {/*            <div className="w-full md:w-1/2">*/}
            {/*                <img src="assets/health.svg" alt="Monitoring" />*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="flex items-center flex-wrap mb-20">*/}
            {/*            <div className="w-full md:w-1/2">*/}
            {/*                <img src="assets/report.svg" alt="Reporting" />*/}
            {/*            </div>*/}
            {/*            <div className="w-full md:w-1/2 pl-10">*/}
            {/*                <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>*/}
            {/*                <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="flex items-center flex-wrap mb-20">*/}
            {/*            <div className="w-full md:w-1/2">*/}
            {/*                <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>*/}
            {/*                <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>*/}
            {/*            </div>*/}
            {/*            <div className="w-full md:w-1/2">*/}
            {/*                <img src="assets/sync.svg" alt="Syncing" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}

            {/*    <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">*/}
            {/*        <img*/}
            {/*            className="w-full"*/}
            {/*            src="https://tailwindcss.com/img/card-top.jpg"*/}
            {/*            alt="Sunset in the mountains"*/}
            {/*        />*/}
            {/*        <div className="px-6 py-4">*/}
            {/*            <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>*/}
            {/*            <p className="text-grey-darker text-base">*/}
            {/*                Next and Tailwind CSS are a match made in heaven, check out this article on how*/}
            {/*                you can combine these two for your next app.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</ContainerDiv>*/}

            {/*<section style={{backgroundColor: '#667eea'}}>*/}
            {/*    <div className="container mx-auto px-6 text-center py-20">*/}
            {/*        <h2 className="mb-6 text-4xl font-bold text-center text-white">*/}
            {/*            Limited in Stock*/}
            {/*        </h2>*/}
            {/*        <h3 className="my-4 text-2xl text-white">*/}
            {/*            Get yourself the Smart Health Monitoring Wristwatch!*/}
            {/*        </h3>*/}
            {/*        <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">*/}
            {/*            Pre Order*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section>
                <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                    <div
                        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
                    >
                        <img
                        className="absolute inset-0 object-cover w-full h-full"
                        src="https://www.hyperui.dev/photos/man-1.jpeg"
                        alt="Man using a computer"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

                        <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <a
                        className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        href="/get-started"
                        >
                        <span className="text-sm font-medium"> Get Started </span>

                        <svg
                            className="w-5 h-5 ml-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
            </section>

            <section className="text-white bg-gray-900">
                <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        Understand User Flow.

                        <span className="sm:block">
                        Increase Conversion.
                        </span>
                    </h1>

                    <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
                        Get Started
                        </a>

                        <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
                        Learn More
                        </a>
                    </div>
                    </div>
                </div>
            </section>

            <CallToAction/>

            <aside className="p-12 bg-gray-900 sm:p-16 lg:p-24">
                <div className="max-w-xl mx-auto text-center">
                    <p className="text-sm font-medium text-gray-300">
                    Don't let big companies own your data
                    </p>

                    <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                    Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
                    </p>

                    <form className="mt-8 sm:flex">
                    <div className="sm:flex-1">
                        <label for="email" className="sr-only">Email</label>

                        <input
                        type="email"
                        placeholder="Email address"
                        className="w-full p-3 text-white bg-gray-800 border-2 border-gray-700 rounded-lg"
                        />
                    </div>

                    <button
                        type="submit"
                        className="flex items-center justify-between w-full px-5 py-3 mt-4 font-medium text-white bg-blue-600 rounded-lg sm:w-auto sm:mt-0 sm:ml-4 hover:bg-blue-500"
                    >
                        Sign up

                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="flex-shrink-0 w-4 h-4 ml-3"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                        </svg>
                    </button>
                    </form>
                </div>
            </aside>

        </Layout>
    )
}

export default IndexPage

// export async function getStaticProps() {
//   const responseProfile = await api.get('/users/chrisaugu')
//     .then(({ data }) => {
//       return { profile: data }
//     })
//     .catch(error => {
//       return { error }
//     })
//
//   return {
//     props: {
//       ...responseProfile,
//     },
//     revalidate: 10080, // one week
//   }
// }
