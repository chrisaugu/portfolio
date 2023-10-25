import React from "react";
import Articles from "../components/Articles";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { fetchAPI } from "../lib/api";

const Blog = ({ articles, categories, homepage }) => {
  return (<div/>)
  // return (
  //     <Layout title="Blog" categories={categories}>
  //       <Seo seo={homepage.attributes.seo} />

  //       <section className="bg-white dark:bg-gray-800">
  //         <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
  //           <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
  //             {homepage.attributes.hero.title}
  //           </h1>
  //         </div>
  //         <div className="bg-[#F1F1F1] dark:bg-gray-900">

  //           <Articles articles={articles} />

  //         </div>

  //       </section>

  //     </Layout>
  // );
};

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articles, categories, homepage] = await Promise.all([
//     fetchAPI("/articles"),
//     fetchAPI("/categories"),
//     fetchAPI("/homepage"),
//   ]);

//   return {
//     props: { articles, categories, homepage },
//     revalidate: 1,
//   };
// }

// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
//     fetchAPI("/articles", { populate: ["image", "category"] }),
//     fetchAPI("/categories", { populate: "*" }),
//     fetchAPI("/homepage", {
//       populate: {
//         hero: "*",
//         seo: { populate: "*" },
//       },
//     }),
//   ]);

//   return {
//     props: {
//       articles: articlesRes.data,
//       categories: categoriesRes.data,
//       homepage: homepageRes.data,
//     },
//     revalidate: 1,
//   };
// }

export default Blog;