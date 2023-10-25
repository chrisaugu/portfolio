import React from 'react'

import Layout from "../components/Layout"

import skills from "../db/skills.json"

import api from "../lib/api"

export default function Uses() {

  return (
    <Layout title="Uses">
      <section className="dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Uses
          </h1>
        </div>

        <div className="xbg-[#F1F1F1] dark:bg-gray-900 relative rounded-md shadow-md p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20">
                    

        This site uses;
        <ul>
        <li>hello</li>
        </ul>

        <a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" href="https://twitter.com/lofiui" target="_top">
          <div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" className="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
          </div>
          <span className="text-sm ml-1 leading-none">@tailwind</span>
        </a>

          {/*<div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>*/}

        </div>

      </section>
    </Layout>
  )
}