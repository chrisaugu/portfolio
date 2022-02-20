import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { GTM_ID, pageview } from '../lib/gtm'
import * as gtag from '../lib/gtag'

// import { CssBaseline, ThemeProvider, NextUIThemes } from '@nextui-org/react';

// import { ThemeContext } from '../lib/Theme';

import { TOKENS_DARK, TOKENS_LIGHT } from '../lib/Tokens';

import '../styles/globals.css'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
    const router = useRouter()
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

    useEffect(() => {
        router.events.on('routeChangeComplete', pageview)
        return () => {
            router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*<link href="/dist/css/output.css" rel="stylesheet" />*/}
                <meta name="color-scheme" content="light dark"/>
                <meta name="theme-color" content="#fafafa"/>
                <meta name="theme-color" content="#319197" media="(prefers-color-scheme: light)"/>
                <meta name="theme-color" content="#872e4e" media="(prefers-color-scheme: dark)"/>
            </Head>

            {/* Google Tag Manager - Global base code */}
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
                }}
            />

            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Script strategy="afterInteractive" src={"../script.js"} />

            {/*<ThemeContext.Provider value={value}>
                <ThemeContext.Consumer>
                    {value => (
                        <div className={`theme ${value.theme}`}>
                            <Component {...pageProps} />
                        </div>
                    )}
                </ThemeContext.Consumer>
            </ThemeContext.Provider>*/}

            <ThemeProvider defaultTheme="light" attribute="class">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp