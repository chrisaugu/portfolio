import React from "react";

import Layout from "../components/Layout";

const feeds = ({data}) => {

  return (
    <Layout>
      <div id="navbar"></div>

      <div id="mainContainer" className="w-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div id="sidebar"></div>


      <div className="flex justify-center w-screen h-screen px-4 text-gray-700">
        <div className="flex w-full max-w-screen-lg">
          <div className="flex flex-col w-64 py-4 pr-3">
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Home</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Discover</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Notifications</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Inbox</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Saved Posts</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Groups</a>
            <a className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300" href="#">Profile</a>
            <a className="flex px-3 py-2 mt-2 mt-auto text-lg rounded-sm font-medium hover:bg-gray-200" href="#">
              <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
              <div className="flex flex-col ml-2">
                <span className="mt-1 text-sm font-semibold leading-none">Username</span>
                <span className="mt-1 text-xs leading-none">@username</span>
              </div>
            </a>
          </div>
          <div className="flex flex-col flex-grow border-l border-r border-gray-300">
            <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
              <h1 className="text-xl font-semibold">Feed Title</h1>
              <button className="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">New post</button>
            </div>
            <div className="flex-grow h-0 overflow-auto">
              <div className="flex w-full p-8 border-b-4 border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <textarea className="p-3 bg-transparent border border-gray-500 rounded-sm" name="" id=""  rows="3" placeholder="What's happening?"></textarea>
                  <div className="flex justify-between mt-2">
                    <button className="flex items-center h-8 px-3 text-xs rounded-sm hover:bg-gray-200">Attach</button>
                    <button className="flex items-center h-8 px-3 text-xs rounded-sm bg-gray-300 hover:bg-gray-400">Post</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                    <span className="font-semibold text-gray-500">Image</span>
                  </div>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                    <span className="font-semibold text-gray-500">Image</span>
                  </div>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
              <div className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="flex">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                    <span className="ml-auto text-sm">Just now</span>
                  </div>
                  <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                  <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                    <span className="font-semibold text-gray-500">Image</span>
                  </div>
                  <div className="flex mt-2">
                    <button className="text-sm font-semibold">Like</button>
                    <button className="ml-2 text-sm font-semibold">Reply</button>
                    <button className="ml-2 text-sm font-semibold">Share</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
            <input className="flex items-center h-8 px-2 border border-gray-500 rounded-sm" type="search" Placeholder="Search…"/>
            <div>
              <h3 className="mt-6 font-semibold">Trending</h3>
              <div className="flex w-full py-4 border-b border-gray-300">
                <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-2">
                  <div className="flex text-sm">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                  </div>
                  <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                </div>
              </div>
              <div className="flex w-full py-4 border-b border-gray-300">
                <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-2">
                  <div className="flex text-sm">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                  </div>
                  <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                </div>
              </div>
              <div className="flex w-full py-4 border-b border-gray-300">
                <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-2">
                  <div className="flex text-sm">
                    <span className="font-semibold">Username</span>
                    <span className="ml-1">@username</span>
                  </div>
                  <p className="mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. <a className="underline" href="#">#hashtag</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" href="https://twitter.com/lofiui" target="_top">
        <div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" className="r-jwli3a r-4qtqp9 r-yyyyoo r-16y2uox r-1q142lx r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </div>
        <span className="text-sm ml-1 leading-none">@tailwind</span>
      </a>
    </Layout>
  )
}

export default feeds;
