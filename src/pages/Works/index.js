import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DesktopNav from "../../components/DesktopNav"
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'
import Cursor from "../../components/Cursor";
import SocialIcons from "../../components/SocialIcons";

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default function Works() {
    const [windowSize, setWindowSize] = useState(getWindowSize())
    const [mobile, setMobile] = useState(false)
    const [tablet, setTablet] = useState(false)

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [])

    useEffect(() => {
        if(windowSize.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false)
        }
        if(windowSize.innerWidth < 1024) {
            setTablet(true)
        } else {
            setTablet(false)
        }
    }, [windowSize])
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Works | AmreshSinha</title>
            <link rel="canonical" href="/" />
            <link rel="icon" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="manifest" href={siteManifest} />
            
            {/* Meta Info */}
            <meta name="title" content="Works | Amresh Sinha" />
            <meta name="description" content="Amresh Sinha's personal website" />
            <meta name="keywords" content="Amresh Sinha, Personal Website, Developer, Open Sourcer, Devops Engineer, Student" />
            <meta name="author" content="Amresh Sinha" />

            {/* Open Graph */}
            <meta property="og:title" content="Amresh Sinha" />
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
            <meta name="twitter:title" content="Amresh Sinha" />
            <meta name="twitter:description" content="Amresh Sinha's personal website" />
            <meta name="twitter:image" content="images/bgDesktop2.jpg" />
            <meta name="twitter:image:alt" content="Amresh Sinha's personal website" />
            <meta name="twitter:site" content="@aps_codes" />
            <meta name="twitter:creator" content="@aps_codes" />
        </Helmet>
        <WorksWrapper>
            <DesktopNav />
            <MainWrapper>
                <div>

                </div>
            </MainWrapper>
            <FooterWrapper>
                {!mobile ? <SocialIcons pageType="Works" /> : <SocialIcons email="amresh@duck.com" />}
                {/* email={'amresh@duck.com'} */}
                <Year>20<br/>23</Year>
            </FooterWrapper>
            {!tablet ? <Cursor /> : null}
        </WorksWrapper>
        </>
    )
}

const WorksWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    padding-top: 52px;
    nav {
        margin-top: 0;
    }
`

const MainWrapper = styled.div`
    width: 100%;
    
`

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

const Year = styled.span`
    font-size: 32px;
    font-weight: 700;
    line-height: 75%;
    color: #fff;
    /* margin-right: 1rem; */
    @media screen and (max-width: 767px) {
        display: none;
    }
`
