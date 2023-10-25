import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
import Helmet from 'react-helmet';
import config from '../config/website';


const Seo = ({ title, ...customMeta }) => {
    const router = useRouter();
    // const title = config.siteTitle;
    const description = config.siteDescription;
    const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
    const image = config.siteUrl + realPrefix + config.siteLogo;
    const blogURL = config.siteUrl + config.pathPrefix;
    const schemaOrgJSONLD = [
        {
            '@context': 'http://schema.org',
            '@type': 'Website',
            url: blogURL,
            name: title,
            alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        }
    ];
    const meta = {
        title: "Christian Augustyn",
        description: `I've been developing websites for 10 years straight. Get in touch with me to know more.`,
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };

    return (
        <>
            <Helmet>
                <html lang={config.siteLanguage} />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="image" content={image} />
                
                <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="icon" href="/favicons/favicon.svg" />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
                <meta name="msapplication-TileColor" content={config.backgroundColor} />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                
                <meta property="og:locale" content={config.ogLanguage} />
                <meta property="og:site_name" content={config.ogSiteName} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
            
                <title>{title ? title : "😎 Xian"} | Web & Mobile Developer</title>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                  property="og:url"
                  content={`https://www.christianaugustyn.me${router.asPath}`}
                />
                <link
                  rel="canonical"
                  href={`https://www.christianaugustyn.me${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Manu Arora" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@mannupaaji" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && (
                  <meta property="article:published_time" content={meta.date} />
                )}
            </Helmet>
        </>
    )
}

export default Seo;