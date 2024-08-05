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

      <Banner/>

      <PostCard/>

      {/* <BigLetter word={"Hello"} lead={"world"} /> */}

      {/*<div className="text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Hello world
                </span>
            </div>*/}

      {/*<ProductCard/>*/}
      {/*<Card/>*/}

      {/* <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
      </div> */}

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
        {/*{repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}*/}
      </div>

      <div className="bg-white dark:bg-gray-800 bg-gradient-to-r from-green-200 to-blue-500">
        <h1 className="text-gray-900 dark:text-white">Dark mode</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum...
        </p>
      </div>

      <div className={`xl:max-w-[1280px] w-full`}>
        {/*<Testimonials />*/}
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
