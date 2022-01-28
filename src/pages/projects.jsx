import React from "react";
import Nav from "../components/nav";
import Head from "next/head";
// import PropTypes from 'prop-types'
// import styled from 'styled-components'

const Projects = ({ projects }) => {
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

            <section id="projects">
                <div className="projects__wrapper">
                    <header className="projects__header">
                        <figure className="projects__figure">
                            {/*<img*/}
                            {/*    className="projects__img"*/}
                            {/*    alt="Foto de perfil"*/}
                            {/*    src={profile.avatar_url}*/}
                            {/*/>*/}
                        </figure>
                        {/*<h1 className="projects__title">{profile.name}</h1>*/}
                        {/*<h2 className="projects__subtitle">{profile.bio}</h2>*/}
                    </header>

                    <p className="projects__text">
                        I got one life and I intend to live an extraordinary life to be remembered.
                    </p>
                </div>
            </section>

            <Nav />

            <Projects
                projects={[]}
            />
        </>
    )
}

// Projects.propTypes = {
//     projects: PropTypes
// }

// Page.getInitialProps = async (ctx) => {
//   const res = await api.get('/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }

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