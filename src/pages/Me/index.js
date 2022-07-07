// import { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Cursor from "../../components/Cursor";
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'

export default function Me() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Amresh</title>
                <link rel="canonical" href="/" />
                <link rel="icon" href={favicon} />
                <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
                <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
                <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
                <link rel="manifest" href={siteManifest} />

                {/* Meta Info */}
                <meta name="title" content="About Amresh" />
                <meta name="description" content="Amresh Sinha's personal website" />
                <meta name="keywords" content="Amresh Sinha, Personal Website, Developer, Open Sourcer, Devops Engineer, Student" />
                <meta name="author" content="Amresh Sinha" />

                {/* Open Graph */}
                <meta property="og:title" content="About Amresh" />
                <meta property="og:description" content="Amresh Sinha's personal website" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="/" />
                <meta property="og:image" content="images/bgDesktop2.jpg" />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content="Amresh Sinha's personal website" />
                <meta property="og:site_name" content="Amresh Sinha" />
                <meta property="og:locale" content="en_US" />

                {/* twitter meta */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="About Amresh" />
                <meta name="twitter:description" content="Amresh Sinha's personal website" />
                <meta name="twitter:image" content="images/bgDesktop2.jpg" />
                <meta name="twitter:image:alt" content="Amresh Sinha's personal website" />
                <meta name="twitter:site" content="@amreshsinha" />
                <meta name="twitter:creator" content="@aps_codes" />
            </Helmet>
        </>
    )
}