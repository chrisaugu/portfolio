import React from "react";
// import Fade from "react-reveal/Fade";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlighter } from "../RainbowHighlighter";
import Highlighter from "../Highlighter";
// import Typewriter from "../utils/Typewriter"
import Typewriter from 'typewriter-effect';

import styles from "./Hero.module.scss";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];

  return (
    <section className="hero-section">
      {/*<div className="hero min-h-screen" style={{backgroundImage: 'url(../kalibobo.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"/>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h4 className="mb-5 text-5xl font-bold">Hello World</h4>
            <h1 className="mb-5 text-5xl font-bold">I'm Christian Augustyn</h1>
            <p className="mb-5">A software engineer, web developer, and open-source advocate enjoying the sunny life in Beautiful Madang, Papua New Guinea.</p>
          </div>
        </div>
      </div>*/}
      
      {/*<div className="flex flex-row justify-center items-start overflow-hidden">

        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <RoughNotationGroup show={true}>
            <RainbowHighlighter color={colors[0]}>
              <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Developer.
              </h1>
            </RainbowHighlighter>
         </RoughNotationGroup>
       </div>
      </div>*/}

      {/*<Typewriter
        speed={88}
        tag="pre"
        text={["Hello world.", "What do I do now?"]}
        randomSpeed={true} />*/}

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.box}>
            <h1 className={styles.headingOne}>Hi there👋, I'm Christian Augustyn.</h1>

            {/*<h1 className={styles.headingTwo}>
              Frontend <Highlighter color="#93ffdd">Developer</Highlighter>
            </h1>*/}
            <h1 className={styles.headingTwo}>
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Software Developer', 'Software Engineer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <h1 className={styles.headingThree}>
              I love making simple and beautiful user-friendly apps for the web
              with HTML, CSS, {" "}
              
              <Highlighter color="#fff600">JavaScript</Highlighter> and {" "}
              <Highlighter color="#42c3ff">React</Highlighter>

            </h1>
            
            <section id="skills" className="astro-FbNQJnBY">
              <h2 className="astro-FbNQJnBY">These are skills I've mastered over the years</h2>
              <strong className="astro-FbNQJnBY">Skills I'm super comfortable with</strong>
              <br className="astro-FbNQJnBY"/>
              <div className="skills astro-FbNQJnBY">
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">HTML5</span>
                  <i className="devicon-html5-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">CSS3</span>
                  <i className="devicon-css3-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">JavaScript</span>
                  <i className="devicon-javascript-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">TypeScript</span>
                  <i className="devicon-typescript-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">PHP</span><i className="devicon-php-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Laravel</span><i className="devicon-laravel-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Angular</span><i className="devicon-angularjs-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Ionic</span><i className="devicon-ionic-original astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Node.js</span><i className="devicon-nodejs-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Git</span><i className="devicon-git-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">MySQL</span><i className="devicon-mysql-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">SASS</span><i className="devicon-sass-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Bootstrap</span><i className="devicon-bootstrap-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Tailwind</span><i className="devicon-tailwindcss-plain astro-nYZ90F6b"></i>
                </div>
              </div>
              
              <strong className="astro-FbNQJnBY">Skills I'm mastering</strong>
              <br className="astro-FbNQJnBY"/>
              <div className="skills astro-FbNQJnBY">
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Flutter</span>
                  <i className="devicon-flutter-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">React</span><i className="devicon-react-plain astro-nYZ90F6b"></i>
                </div>
                <div className="skills-item tooltip-container astro-nYZ90F6b">
                  <span className="tooltip astro-nYZ90F6b">Next.js</span>
                  <i className="devicon-nextjs-plain astro-nYZ90F6b"></i>
                </div>
              </div>
            </section>
            {/*<section id="journey" className="astro-wluucauC"><h2 className="astro-wluucauC">A hitchhiker's guide to Chris's life</h2><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2030</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Senior full stack remote developer ☁️</strong></div><div className="timeline-item--paragraph astro-wluucauC">It's my dream to be a senior full-stack developer who can work remotely.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2021</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Got married 🍾</strong></div><div className="timeline-item--paragraph astro-wluucauC">We got married in the mountains of South Africa</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Blogged for a year non-stop</strong></div><div className="timeline-item--paragraph astro-wluucauC">Every single day one article!</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2020</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Got engaged 💍</strong></div><div className="timeline-item--paragraph astro-wluucauC">My beautiful wife Nicole said, Yes!</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Started daily-dev-tips 🚀</strong></div><div className="timeline-item--paragraph astro-wluucauC">I started my blog, where I write daily development tips to help new people!</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Moved back to South Africa ✈️</strong></div><div className="timeline-item--paragraph astro-wluucauC">This time for Laméco I moved back to South-Africa and fell in love with the country again.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2016</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Senior developer 💪🏻</strong></div><div className="timeline-item--paragraph astro-wluucauC">I started as a senior developer at Laméco, working mainly on Symfony, Angular, and node.js projects. I also was responsible for mentoring students and new employees.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2015</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Full-time app developer 📱</strong></div><div className="timeline-item--paragraph astro-wluucauC">I got hired by Bengees, a mobile app startup, to be the lead developer on an Ionic app!</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2014</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">First time to South-Africa 🇿🇦</strong></div><div className="timeline-item--paragraph astro-wluucauC">A nice perk of Engagement Factory was a work trip to South Africa, little did I know I would fall in love with the country.</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Medior developer at engagement factory 🤓</strong></div><div className="timeline-item--paragraph astro-wluucauC">My hard work paid off, and I became a Medior Developer at Engagement Factory, picked up a lot of JavaScript, PHP and Marketing skills.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2013</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Started my own company 🤯</strong></div><div className="timeline-item--paragraph astro-wluucauC">The moment I Graduated I also started my own company, which I still have on the side.</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Graduated at Fontys 🎓</strong></div><div className="timeline-item--paragraph astro-wluucauC">Graduated the communication and multi-media Design course at Fontys Eindhoven.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">2012</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">Won the Atos IT challenge 🏆</strong></div><div className="timeline-item--paragraph astro-wluucauC">In 2012 we entered the ATOS IT challenge, our team "MultiLens" finished first in this worldwide competition. My role in this project was project managing, development en thinking on features, and the global idea.</div></div><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">First tech job 🥳</strong></div><div className="timeline-item--paragraph astro-wluucauC">Started working as a PHP Developer for ScriptMotion, programming in CodeIgniter.</div></div></div><div className="timeline astro-wluucauC"><strong className="title astro-wluucauC">1989</strong><div className="timeline-item astro-wluucauC"><div className="timeline-item--checkbox astro-wluucauC"><svg viewBox="0 0 24 24" className="astro-wluucauC"><path d="M21 11.080v0.92c-0.001 2.485-1.009 4.733-2.64 6.362s-3.88 2.634-6.365 2.632-4.734-1.009-6.362-2.64-2.634-3.879-2.633-6.365 1.009-4.733 2.64-6.362 3.88-2.634 6.365-2.633c1.33 0.001 2.586 0.289 3.649 0.775 0.502 0.23 1.096 0.008 1.325-0.494s0.008-1.096-0.494-1.325c-1.327-0.606-2.866-0.955-4.479-0.956-3.037-0.002-5.789 1.229-7.78 3.217s-3.224 4.74-3.226 7.777 1.229 5.789 3.217 7.78 4.739 3.225 7.776 3.226 5.789-1.229 7.78-3.217 3.225-4.739 3.227-7.777v-0.92c0-0.552-0.448-1-1-1s-1 0.448-1 1zM21.293 3.293l-9.293 9.302-2.293-2.292c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3 3c0.391 0.391 1.024 0.39 1.415 0l10-10.010c0.39-0.391 0.39-1.024-0.001-1.414s-1.024-0.39-1.414 0.001z" className="astro-wluucauC"></path></svg><strong className="astro-wluucauC">I was born 👶</strong></div><div className="timeline-item--paragraph astro-wluucauC">This is where the whole journey started.</div></div></div></section>*/}

          </div>
        </div>
      </div>

    </section>
  );
};


