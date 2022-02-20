import React from 'react'

import Layout from "../components/Layout"

import skills from "../db/skills.json"

export default function Profile({ profile }) {
  return (
      <Layout title="Profile">
        <section className="bg-white dark:bg-gray-800">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              About me
            </h1>
          </div>
          <div className="bg-[#F1F1F1] dark:bg-gray-900">
          hel
          </div>
        </section>
        
        {/*<section className="profile">
          <div className="profile__wrapper">
            <header className="profile__header">
              <figure className="profile__figure">
                <img
                    className="profile__img"
                    alt="Foto de perfil"
                    src={profile.avatar_url}
                />
              </figure>
              <h1 className="profile__title">{profile.name}</h1>
              <h2 className="profile__subtitle">{profile.bio}</h2>
            </header>

            <p className="profile__text">
              I got one life and I intend to live an extraordinary life to be remembered.
            </p>

            <footer className="profile__footer">
              <h1 className="utils--hidden-screen-only">Competências</h1>

              <ul className="profile__skills">
                {skills.map(skill => (
                    <li
                        className="profile__skills-item"
                        key={skill.id}
                    >
                      {skill.title}
                    </li>
                ))}
              </ul>
            </footer>
          </div>
        </section>*/}
      </Layout>
  )
}

Profile.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/users/chrisaugu')
  const json = await res.json()
  return { profile: json }
}