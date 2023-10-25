import React from "react"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from "../components/Layout"
import sparkel from "../images/sparkle.svg"
import skills from '../db/skills.json'
import api from '../lib/api'
import Img from "../images/projects.png"

const Projects = ({projects = []}) => {
    return (
        <Layout title="Projects">

            {/*<button className="rounded-2xl py-2 px-10 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                hello
            </button>*/}

            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
                    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                        Projects
                    </h1>
                </div>

                <div className="bg-[#F1F1F1] dark:bg-gray-900 mt-20 mb-20 p-4 md:p-10 lg:p-20 relative rounded-2xl shadow-md max-w-6xl mx-auto">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-20 pb-40">
                        {
                            projects.map((project, i) => (
                                <Link href={project.html_url} key={i}>
                                    <a className="card w-96 glass bg-base-100 shadow-xl image-full dark:bg-blend-darken">
                                        <figure><img src="https://api.lorem.space/image/ai?w=400&h=225" alt={project.name} /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title font-bold font-medium">{project.name}</h2>
                                            <p className="font-light my-2">{project.description}</p>
                                            <div className="card-actions justify-end">
                                                <div className="badge badge-outline bg-red-100 p-1 rounded-md m-1">Languages: {project.language}</div> 
                                                <div className="badge badge-outline bg-red-100 p-1 rounded-md m-1">Stars: {project.stargazers_count}</div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            ))
                        }
                    </div>

                    {/*</div><div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                        {/* Single card *}
                        {
                            projects.map((project, i) => (
                                <a
                                    href={project.html_url}
                                    className="w-full block shadow-2xl"
                                >
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={Img}
                                            alt="portfolio"
                                            className="transform hover:scale-125 transition duration-2000 ease-out"
                                        />
                                        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                                            {project.name}
                                        </h1>
                                        <h1 className="absolute background-blur bottom-10 left-10 text-gray-50 font-bold text-xl">
                                            {project.description}
                                        </h1>
                                    </div>
                                </a>
                            ))
                        }
                    </div>*/}
                </div>
            </section>

            {/*<div className="flex min-h-screen justify-center items-center">
//         </div>

//             {/*<section id="projects">
//                 <div className="projects__wrapper">

//                     <div className="projects__list">
//                         <div className="projects__list_item">
//                             <img src={sparkel} className="projects_list_item_img" alt="image"/>
//                             <div className="projects__list_text">Hello World</div>
//                         </div>

//                         {skills.map(skill => (
//                             <div className="projects__list_item" key={skill.id}>
//                                 <img src={sparkel} className="projects_list_item_img" alt="image"/>
//                                 <div className="projects__list_text">{skill.title}</div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </section>
//             <section>
//                 <div className="container mx-auto">
//                     {/*<div className="columns-3xs">
//                       <img className="w-full aspect-video" src="" />
//                       <img className="w-full aspect-square" src="" />
//                     </div>
//                     <div className="grid sm:grid-cols-2 md:grid-cols-4 hover:grid-cols-4 gap-4">
//                         {skills.map(skill => (
//                             <div 
//                                 className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" 
//                                 key={skill.id}>
//                                 <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//                                     <img src={sparkel} className="rounded-t-lg" alt="image"/>
//                                     <div className="">{skill.title}</div>
//                                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//                                     <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                                 </div>
//                                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//                                 <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                                     Read more
//                                     <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                 </a>

//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


// <section className="text-gray-700 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="flex flex-wrap -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
//           <div className="p-6">
//             <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
//             <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
//             <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
//             <div className="flex items-center flex-wrap ">
//               <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
//               </a>
//               <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=1049&q=80" alt="blog"/>
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//             <div className="flex items-center flex-wrap ">
//               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M5 12h14"></path>
//                   <path d="M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//               <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                   <circle cx="12" cy="12" r="3"></circle>
//                 </svg>1.2K
//               </span>
//               <span className="text-gray-600 inline-flex items-center leading-none text-sm">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>6
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
//           <div className="p-6">
//             <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
//             <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
//             <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
//             <div className="flex items-center flex-wrap ">
//               <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
//               </a>
//               <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <section className="text-gray-700 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div>Loading</div>
//     <div className="flex flex-wrap -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
//           <div className="p-6">
//             <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
//             <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
//             <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
//             <div className="flex items-center flex-wrap ">
//               <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
//               </a>
//               <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
//           <div className="p-6">
//             <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
//             <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
//             <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
//             <div className="flex items-center flex-wrap ">
//               <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
//               </a>
//               <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
//           <div className="p-6">
//             <h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2"></h2>
//             <h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
//             <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
//             <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
//             <div className="flex items-center flex-wrap ">
//               <a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0">
                
//               </a>
//               <span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1">
                
//               </span>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <hr/>

// <section className="text-gray-700 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div>After Loading</div>
//     <div className="flex flex-wrap -m-4">
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=1049&q=80" alt="blog"/>
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//             <div className="flex items-center flex-wrap ">
//               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M5 12h14"></path>
//                   <path d="M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//               <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                   <circle cx="12" cy="12" r="3"></circle>
//                 </svg>1.2K
//               </span>
//               <span className="text-gray-600 inline-flex items-center leading-none text-sm">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>6
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=1050&q=80" alt="blog"/>
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
//             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//             <div className="flex items-center flex-wrap">
//               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M5 12h14"></path>
//                   <path d="M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//               <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                   <circle cx="12" cy="12" r="3"></circle>
//                 </svg>1.2K
//               </span>
//               <span className="text-gray-600 inline-flex items-center leading-none text-sm">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>6
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 md:w-1/3">
//         <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
//           <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1593642703055-4b72c180d9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=crop&w=1050&q=80" alt="blog"/>
//           <div className="p-6">
//             <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
//             <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
//             <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//             <div className="flex items-center flex-wrap ">
//               <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
//                 <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
//                   <path d="M5 12h14"></path>
//                   <path d="M12 5l7 7-7 7"></path>
//                 </svg>
//               </a>
//               <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                   <circle cx="12" cy="12" r="3"></circle>
//                 </svg>1.2K
//               </span>
//               <span className="text-gray-600 inline-flex items-center leading-none text-sm">
//                 <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>6
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>*/}

        </Layout>
    )
}

Projects.getInitialProps = async (ctx) => {
    // const res = await api.get('/search/repositories?q=user:chrisaugu+sort:author-date-asc')
    const res = await fetch('https://api.github.com/search/repositories?q=user:chrisaugu+sort:author-date-asc')
    const json = await res.json()
    return { projects: json.items }
}

// "https://api.github.com/repos/chrisaugu/Test/contents/abc.txt"

// This function gets called at build time
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()
//
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default Projects