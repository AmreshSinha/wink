import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import DesktopNav from "../../components/DesktopNav"
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'
import Cursor from "../../components/Cursor";
import SocialIcons from "../../components/SocialIcons";
import { useTrail, a, useChain, useSpring, useSpringRef, useTransition } from '@react-spring/web'

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

    // React Spring
    const navRef = useSpringRef()
    const navReveal = useSpring({
        ref: navRef,
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, x: -20, y: -200},
        to: { opacity: 1, x: 0, y: 0},
    })
    const trailsRef = useSpringRef()
    const trails = useTrail(5, {
        ref: trailsRef,
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, x: 20, height: 0},
        to: { opacity: 1, x: 0, height: 110 },
    })
    const worksTitleList = "Works".split("")
    const worksTitleWrapperPropsRef = useSpringRef()
    const worksTitleWrapperProps = useTransition([1], {
        ref: worksTitleWrapperPropsRef,
        from: { opacity: 1, y: 0 },
        enter: { opacity: 0.25, y: -10, position: "fixed" },
        leave: { opacity: 0.25 }
    })
    const socialIconsRef = useSpringRef();
    const socialIconsAnim = useSpring({
        ref: socialIconsRef,
        from: { opacity: 0, x: 100},
        to: { opacity: 1, x: 0}
    })
    const yearRef = useSpringRef();
    const yearAnim = useSpring({
        ref: yearRef,
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, x: 20, y: 200},
        to: { opacity: 1, x: 0, y: 0},
    })
    useChain([navRef, socialIconsRef, trailsRef, worksTitleWrapperPropsRef, yearRef], [0, 1, 2, 3, 4], 100)
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
        <GlobalStyle />
        <WorksWrapper>
            <DesktopNav style={navReveal} />
                {worksTitleWrapperProps((style, item) => (
                <WorksTitleWrapper style={style}>
                {trails.map(({ height, ...style }, index) => (
                    <WorksTitle style={style}>{worksTitleList[index]}</WorksTitle>
                    ))}
                </WorksTitleWrapper>))}
            <MainWrapper>
            </MainWrapper>
            <FooterWrapper>
                {!mobile ? <SocialIcons style={socialIconsAnim} pagetype="Works" /> : <SocialIcons style={socialIconsAnim} email="amresh@duck.com" />}
                {/* email={'amresh@duck.com'} */}
                <Year style={yearAnim}>20<br/>23</Year>
            </FooterWrapper>
            {!tablet ? <Cursor /> : null}
        </WorksWrapper>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 8px;
        background: #000;
    }
    *::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px grey;
        border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb {
        background: darkblue;
        border-radius: 15px;
        height: 2px;
    }
    *::-webkit-scrollbar-thumb:hover {
        background: lightblue;
        max-height: 10px;
    }
    *::-webkit-scrollbar-thumb:active {
        display: block;
        background-size: 10px;
    }
    *::-webkit-scrollbar-button:vertical:end:increment {
        display: block;
        background-size: 10px;
    }
    body {
        overflow-x: hidden;
    }
`
const WorksWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    nav {
        padding-top: 52px;
        margin-top: unset;
    }
`

const MainWrapper = styled.div`
    width: 100%;
    
`

const WorksTitleWrapper = styled(a.div)`
    position: absolute;
    left: 50%;
    top: 50%;
`

const WorksTitle = styled(a.span)`
    position: relative;
    left: -50%;
    top: -50%;
    font-size: 5rem;
    font-weight: 700;
    font-family: system-ui;
    color: #fff;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

const Year = styled(a.span)`
    font-size: 32px;
    font-weight: 700;
    line-height: 75%;
    color: #fff;
    /* margin-right: 1rem; */
    @media screen and (max-width: 767px) {
        display: none;
    }
`
