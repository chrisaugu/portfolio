import React from 'react'

import Layout from '../components/Layout'
import List from '../components/List'
import ListItem from '../components/ListItem'

export default function Movies({ movies }) {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Movies
          </h1>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
        hel
        </div>
      </section>

      <div className="divide-y divide-slate-100">
        <List>
          {[{
            id:1,
            image:"",
            title:"",
            starRating:"",
            rating:"",
            year:"",
            genre:"",
            runtime:"",
            cast:""
          }].map((movie) => (
            <ListItem key={movie.id} movie={movie} />
          ))}
        </List>
      </div>
    </Layout>
  )
}