import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import Typed from 'typed.js';
import DesktopNav from "../../components/DesktopNav"
import ShowMoreButton from "../../components/ShowMoreButton"
import bgDesktop from "../../images/bgDesktop_Optimized.webp"
import SocialIcons from "../../components/SocialIcons";
import Cursor from "../../components/Cursor";
import {Helmet} from "react-helmet";
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default function Home() {
    // Moving Background WIP
    // const movingBackground = useRef()
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

    // useEffect(() => {
    //   const handleWindowMouseMove = event => {
    //     console.log(event.screenX, event.screenY);
    //     movingBackground.current.style.backgroundPosition = `top ${event.screenY} left ${event.screenX}`
    //   };
    //   window.addEventListener('mousemove', handleWindowMouseMove);

    //   return () => {
    //     window.removeEventListener('mousemove', handleWindowMouseMove);
    //   };
    // }, []);

    const el = useRef(null)
    const elParent = useRef(null)

    useEffect(() => {
        var temp = 0;
        const stringColors = ['#47FFE9', '#00FFAB', '#F7EC09', '#F9D371']
        const typed = new Typed(el.current, {
            strings: ['developer', 'open sourcer', 'devops eng.', 'student'],
            shuffle: false,
            startDelay: 500,
            typeSpeed: 60,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            preStringTyped: function(arrayPos, self) {
                elParent.current.style.color = stringColors[temp];
                temp += 1; 
            },
            onLastStringBackspaced: function(self) { temp = 0 },
        });
      
        // Destroying
        return () => {
            typed.destroy();
        };      
    }, [])

    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Amresh Sinha</title>
            <link rel="canonical" href="/" />
            <link rel="icon" href={favicon} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="manifest" href={siteManifest} />

            {/* Meta Info */}
            <meta name="title" content="Amresh Sinha" />
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
            <meta name="twitter:site" content="@amreshsinha" />
            <meta name="twitter:creator" content="@aps_codes" />
        </Helmet>
        <HeroWrapper>
            <DesktopNav />
            <MainAreaWrapper>
                <IntroWrapper>
                    <h1>Hi, I'm<br />Amresh Sinha,<br />a <div style={{display: "inline"}} ref={elParent}><span ref={el} id="cursorHover">developer</span></div></h1>
                    {!mobile ? <h2>I make immersive software that moves<br />people.</h2> : <h2>I make immersive software<br />that moves people.</h2>}
                    <ShowMoreButton />
                </IntroWrapper>
                <WorkAndEmailWrapper>
                    <WorkLink to="/works">Works</WorkLink>
                    <TriangleDiv><a href="mailto:amresh@duck.com">amresh@duck.com</a></TriangleDiv>
                </WorkAndEmailWrapper>
            </MainAreaWrapper>
            <FooterWrapper>
                {!mobile ? <SocialIcons /> : <SocialIcons email="amresh@duck.com" />}
                {/* email={'amresh@duck.com'} */}
                <Year>20<br/>22</Year>
            </FooterWrapper>
            {!tablet ? <Cursor /> : null}
        </HeroWrapper>
        </>
    )
}

const HeroWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    background-image: url(${bgDesktop});
    background-position: top -10vh left;
    @media screen and (max-width: 1200px) {
        background-position: top left;
    }
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(95%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const MainAreaWrapper = styled.div`
    flex: 1;
    margin-left: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 767px) {
        margin-left: 34px;
    }
`

const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: baseline;
    gap: 28px;
    h1 {
        font-weight: 700;
        font-size: 64px;
        color: #fff;
    }
    h2 {
        font-size: 32px;
        font-weight: 400;
        color: #fff;
    }
    @media screen and (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
        h2 {
            font-size: 24px;
        }
    }
`

const WorkAndEmailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5em;
    @media screen and (max-width: 1023px) {
        display: none;
    }
`

const WorkLink = styled(Link)`
    font-size: 48px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    mix-blend-mode: difference;
    position: relative;
    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to right, #8a2387, #e94057, #f27121);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        }
        :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        }
`

const TriangleDiv = styled.div`
    /* position: absolute; */
    height: 40vh;
    width: 40vh;
    background: linear-gradient(110deg, rgb(254, 198, 141) 0%, rgb(255, 63, 80) 50%, rgba(255, 52, 155, 0.976) 100%);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -20vh;
    a {
        position: relative;
        transform: rotate(45deg) translateY(40px);
        text-decoration: none;
        color: #fff;
        font-size: 24px;
        font-weight: 600;
        :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to right, #8a2387, #e94057, #f27121);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        }
        :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        }
    }
    a {
        transition: all 0.2s ease-in-out;
            
        :hover {
            color: #fff;
            transform: rotate(45deg) translateY(40px) scale(1.1);
        }
    }
`

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1em;
`

const Year = styled.span`
    font-size: 32px;
    font-weight: 700;
    line-height: 75%;
    color: #fff;
    margin-right: 1rem;
    @media screen and (max-width: 767px) {
        display: none;
    }
`