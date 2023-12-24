import React from 'react'

import api from "../lib/api";
import Layout from "../components/Layout";
import Projects from "./projects";

const BookItem = function() {
  return (
    <div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
      <div class="h-64 bg-cover hover:bg-gray" style="background-image: url('https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png')"></div>
      <div class="mx-6 my-4 border-b border-gray-light">
        <div class="font-medium text-base text-gray-darker mb-4">Item name goes here</div>
        <p class="font-normal text-gray-dark text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <p class="font-normal text-gray-dark text-sm mb-4">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>
      <div class="mx-6 my-4 flex">
        <div class="flex-grow">
      <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
        <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
        </svg>
      </span>
          <span class="inline-block bg-red-light rounded-full p-1 pb-0 mr-2">
        <svg fill="white" width="16" height="16" viewBox="0 0 24 24">
        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
        </svg>
      </span>
        </div>
        <div class="flex-grow text-right">

          <a href="#" class="no-underline">
            <svg class="mx-2" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
          </a>
          <a href="#" class="no-underline">
            <svg class="mx-2" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
          </a>
          <a href="#" class="no-underline">
            <svg class="ml-2" fill="gray-dark" width="28" height="28" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Books({books}) {
  console.log(books)

  return (
    <Layout title="Books">
      <section className="bg-white dark:bg-gray-800">

        <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
          <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            Books
          </h1>
        </div>

        <div className="relative rounded-md shadow-md mt-20 mb-20 p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 bg-[#F1F1F1] dark:bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>Next stars: {books}</div>

          </div>
        </div>

      </section>
    </Layout>
  )
}

Books.getInitialProps = async (ctx) => {
  // https://openlibrary.org/search/lists.json?q=rich+dad+poor+dad&limit=1&offset=0
  // https://openlibrary.org/search.json?q=rich%20dad%20poor%20dad

  const response = await fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=viewapi");
  const json = await response.json();

  console.log(json)

  return {
    books: []
  }
}


// <!--
//
// Collector:
//   <img src="https://user-images.githubusercontent.com/5419306/64431443-71823880-d088-11e9-9bd7-1b314f94dc1f.png"/>
//
// Tracker:
//   <img src="https://user-images.githubusercontent.com/5419306/64431475-865ecc00-d088-11e9-8f35-6f95ce3da6dd.png"/>
//
// Workforce:
//   <img src="https://user-images.githubusercontent.com/5419306/64431480-88c12600-d088-11e9-8a0f-3633a0dd3021.png"/>
//
// -->


