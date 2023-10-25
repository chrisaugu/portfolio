import React from "react"
import styled from 'styled-components'

import api from '../lib/api'
import skills from '../db/skills.json'
// import Logo from '../images/sparkle.svg'

// import Sparkles from "../components/Sparkles"
import Layout from "../components/Layout"
import BigLetter from "../components/BigLetter"
import HeroVideo from "../components/Heros/HeroVideo"
import Hero from "../components/Heros/Hero"
import {ProductCard, Card} from "../components/Cards"
import CallToAction from "../components/Sections/CallToAction";
import Banner from "../components/Sections/Banner"
import PostCard from "../components/Cards/PostCard"
import GithubRepoCard from "../components/Cards/GithubRepoCard"
import getLatestRepos from "../lib/getLatestRepos"

export default function IndexPage() {
    const names = ["Christian Augustyn", "Xian", "Kitten", "Google"]
    return (
        <>
            <Hero/>

            {/*<div className="bg-deep-purple-accent-700">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                  <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <a href="/" className="mb-6 sm:mx-auto">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400">
                        <svg
                          className="w-10 h-10 text-deep-purple-900"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                        >
                          <polygon
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                        </svg>
                      </div>
                    </a>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                          <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                          >
                            <defs>
                              <pattern
                                id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                                x="0"
                                y="0"
                                width=".135"
                                height=".30"
                              >
                                <circle cx="1" cy="1" r=".7" />
                              </pattern>
                            </defs>
                            <rect
                              fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                              width="52"
                              height="24"
                            />
                          </svg>
                          <span className="relative">The</span>
                        </span>{' '}
                        quick, brown fox jumps over a lazy dog
                      </h2>
                      <p className="text-base text-indigo-100 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae.
                      </p>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>*/}

            <Banner/>

            <PostCard/>


            <BigLetter word={"Hello"} lead={"world"} />

            {/*<div className="text-5xl font-extrabold">*/}
            {/*    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">*/}
            {/*      Hello world*/}
            {/*    </span>*/}
            {/*</div>*/}

            {/*<ProductCard/>*/}
            {/*<Card/>*/}

            <div className="flex flex-col w-full lg:flex-row">
              <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> 
              <div className="divider lg:divider-horizontal">OR</div> 
              <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
                {/* Single github Repo */}

                {/*{repos &&
                  repos.map((latestRepo, idx) => (
                    <GithubRepoCard latestRepo={latestRepo} key="idx" />
                  ))}*/}
            </div>

            {/* <section>
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
            </section> */}

            {/* <section className="text-white bg-gray-900">
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
            </section> */}

            <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>

            <div className="bg-white dark:bg-gray-800">
              <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum...
              </p>
            </div>

            <CallToAction/>

        </>
    )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;
  console.log(token);
  
  let userData = {
    username: 'chrisaugu'
  }

  // const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      // repositories,
    },
  };
};
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

IndexPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
