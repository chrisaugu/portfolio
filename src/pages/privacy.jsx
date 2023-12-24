import React from 'react'

import Layout from "../components/Layout"

import skills from "../db/skills.json"

import api from "../lib/api"

export default function Privacy() {

  return (
      <Layout title="Privacy">
        <section className="bg-white dark:bg-gray-800">

          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              About me
            </h1>
          </div>

          <div className="relative rounded-md shadow-md mt-20 mb-20 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 bg-[#F1F1F1] dark:bg-gray-900">
          {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
            <div className="card w-96 bg-neutral text-neutral-content">
              <div className="card-body items-center text-center">
                <h2 className="card-title">Cookies!</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-ghost">Deny</button>
                </div>
              </div>
            </div>

            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Learn more <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </li>
            </ol>

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
