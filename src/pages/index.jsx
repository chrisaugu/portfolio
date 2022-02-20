import React from "react"
import styled from 'styled-components'

import api from '../lib/api'
import skills from '../db/skills.json'
// import Logo from '../images/sparkle.svg'

import Sparkles from "../components/Sparkles"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HeroVideo from "../components/HeroVideo"

const ContainerDiv = styled.div `
  background: (props) => props.theme.color.background;
  color: (props) => props.theme.color.text;
  width: ''
`;

const IndexPage = () => {
    return (
        <Layout>


            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
                <div className="hero-overlay bg-opacity-60"/>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            <HeroVideo />

            <header>
                {/*<nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                  </path>
                </svg>
              </button>
            </div>
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Pricing</a>
                </li>
                <li className="nav-item mb-2 lg:mb-0">
                  <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>*/}

                <div className="relative overflow-hidden bg-no-repeat bg-cover" style={{
                    backgroundPosition: "50%",
                    backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
                    height: 350,
                }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                         style={{backgroundColor: "rgba(0, 0, 0, 0.75)"}}>
                        <div className="flex justify-center items-center h-full">
                            <div className="text-center text-white px-6 md:px-12">
                                <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                                <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                                <button type="button"
                                        className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="py-20" style={{background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'}}>
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Smart Health Monitoring Wristwatch!
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-200">
                        Monitor your health vitals smartly anywhere you go.
                    </h3>

                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                        Headless UI In React
                    </span>

                    <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Pre Order
                    </button>
                </div>
            </div>

            <div className="bg-yellow-200">
                <div className="container flex px-6 py-4 mx-auto lg:h-128 lg:py-16">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg">
                            <h1 className="text-3xl tracking-wide text-white text-gray-800 lg:text-4xl">Set your title</h1>
                            <p className="mt-4 text-gray-300 text-gray-600">Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae
                                laudantium quod rem voluptatem eos accusantium cumque.</p>
                            <div className="mt-6">
                                <a href="#"
                                   className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md lg:inline hover:bg-blue-400">Download
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover w-full h-full max-w-2xl rounded-md"
                             src="https://source.unsplash.com/user/erondu/1600x900" alt="apple watch photo"/>
                    </div>
                </div>
            </div>

            <Hero />

            <div className="text-5xl font-extrabold ...">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Hello world
        </span>
            </div>

            <ContainerDiv className="flex flex-col items-center justify-center w-full">
                <head>
                    <title>Create Next App</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </head>

                {/*<Sparkles>*/}
                {/*  <img src="gold-cat.png" alt="A golden cat statue" />*/}
                {/*</Sparkles>*/}

                {/*<Profile*/}
                {/*  profile={profile}*/}
                {/*  skills={skills}*/}
                {/*/>*/}

                <section className="container mx-auto px-6 p-10">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Features
                    </h2>
                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
                            <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="assets/health.svg" alt="Monitoring" />
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <img src="assets/report.svg" alt="Reporting" />
                        </div>
                        <div className="w-full md:w-1/2 pl-10">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
                            <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
                        </div>
                    </div>

                    <div className="flex items-center flex-wrap mb-20">
                        <div className="w-full md:w-1/2">
                            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
                            <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/Linux or Windows OS.</p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src="assets/sync.svg" alt="Syncing" />
                        </div>
                    </div>
                </section>

                <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                    <img
                        className="w-full"
                        src="https://tailwindcss.com/img/card-top.jpg"
                        alt="Sunset in the mountains"
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Next + Tailwind ❤️</div>
                        <p className="text-grey-darker text-base">
                            Next and Tailwind CSS are a match made in heaven, check out this article on how
                            you can combine these two for your next app.
                        </p>
                    </div>
                </div>
            </ContainerDiv>

            <section style={{backgroundColor: '#667eea'}}>
                <div className="container mx-auto px-6 text-center py-20">
                    <h2 className="mb-6 text-4xl font-bold text-center text-white">
                        Limited in Stock
                    </h2>
                    <h3 className="my-4 text-2xl text-white">
                        Get yourself the Smart Health Monitoring Wristwatch!
                    </h3>
                    <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                        Pre Order
                    </button>
                </div>
            </section>
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
