import React from 'react'

import api from "../lib/api";
import Layout from "../components/Layout";

export default function Books({stars}) {
    return (
        <Layout title="Profile">
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                    <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                        Books
                    </h1>
                </div>
                <div className="bg-[#F1F1F1] dark:bg-gray-900">
                    <div>Next stars: {stars}</div>
                </div>
            </section>
        </Layout>
    )
}

Books.getInitialProps = async (ctx) => {
    // const {data} = await api.get('/repos/vercel/next.js');
    // console.log(data)
    // return { stars: data.stargazers_count }

    // https://openlibrary.org/search/lists.json?q=rich+dad+poor+dad&limit=1&offset=0

    fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&callback=mycallback")
        .then(({data}) => {
            console.log(data)
        })
        // .then(({ data }) => {
        //   return { profile: data }
        // })
        .catch(error => {
            return { error }
        })

    // console.log(data)

    return {
        props: {
            // ...data,
        },

        revalidate: 10080, // one week
    }
}
