import React from "react"
import Head from 'next/head'

import api from '../services/api'

import skills from '../db/skills.json'

import Nav from '../components/nav'
import Profile from './profile'
// import Projects from "./projects";

export default function Home({ profile }) {
  return (
    <>
      <Head>
        <title>Xian</title>
        
        <meta name="description" content="I got one life and I intend to live an extraordinary life to be remembered." />
        <meta name="keywords" content="Medina, Developer, Designer, UX, Front-end, Engineer" />
        <meta property="og:title" content="Christian Augustyn: Front-end Engineer" />
        <meta property="og:description" content="I got one life and I intend to live an extraordinary life to be remembered." />
        <meta property="og:image" content="/og.png" />
        
        <link rel="icon" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <Nav/>

      {/*<Profile*/}
      {/*  profile={profile}*/}
      {/*  skills={skills}*/}
      {/*/>*/}

      {/*<Projects*/}
      {/*    projects={[]}*/}
      {/*/>*/}
    </>
  )
}

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
