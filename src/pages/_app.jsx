import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script'
// import { CssBaseline, ThemeProvider, NextUIThemes } from '@nextui-org/react';

import { ThemeContext } from '../contexts/Theme';

import { TOKENS_DARK, TOKENS_LIGHT } from '../constants/Tokens';


// add bootstrap css 
// import 'bootstrap/dist/css/bootstrap.css'
// own css files here
// import "../css/customcss.css";
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  const [theme, setTheme] = useState(TOKENS_DARK)
  const value = { theme, setTheme }

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches
      ? TOKENS_DARK
      : TOKENS_LIGHT)
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"/>

      <ThemeContext.Provider value={value}>
        <ThemeContext.Consumer>
          {value => (
            <div className={`theme ${value.theme}`}>
              <Component {...pageProps} />
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  )
}

export default MyApp


// import { useEffect } from 'react'
// import Script from 'next/script'
// import { useRouter } from 'next/router'
// import { GTM_ID, pageview } from '../lib/gtm'

// function MyApp({ Component, pageProps }) {
//   const router = useRouter()
//   useEffect(() => {
//     router.events.on('routeChangeComplete', pageview)
//     return () => {
//       router.events.off('routeChangeComplete', pageview)
//     }
//   }, [router.events])

//   return (
//     <>
//       {/* Google Tag Manager - Global base code */}
//       <Script
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer', '${GTM_ID}');
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default MyApp


// import { useEffect } from 'react'
// import Script from 'next/script'
// import { useRouter } from 'next/router'
// import * as gtag from '../lib/gtag'

// const App = ({ Component, pageProps }) => {
//   const router = useRouter()
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       gtag.pageview(url)
//     }
//     router.events.on('routeChangeComplete', handleRouteChange)
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange)
//     }
//   }, [router.events])

//   return (
//     <>
//       {/* Global Site Tag (gtag.js) - Google Analytics */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
//       />
//       <Script
//         id="gtag-init"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${gtag.GA_TRACKING_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//     </>
//   )
// }

// export default App