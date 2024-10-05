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
      {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(../kalibobo.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"/>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h4 className="mb-5 text-5xl font-bold">Hello World</h4>
            <h1 className="mb-5 text-5xl font-bold">I'm Christian Augustyn</h1>
            <p className="mb-5">A software engineer, web developer, and open-source advocate enjoying the sunny life in Beautiful Madang, Papua New Guinea.</p>
          </div>
        </div>
      </div> */}
      
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

      <div className={`${styles.section} bg-gradient-to-r from-pink-500 to-yellow-500`}>
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

          </div>
        </div>
      </div>

    </section>
  );
};


