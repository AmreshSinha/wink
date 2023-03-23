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
import Search from "../../components/Search";
import winkConfig from "../../config.json";
import WorksCard from "../../components/WorksCard";

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

    // Quotes Call
    const [quote, setQuote] = useState(null)
    const fetchQuote = async () => {
        setQuote(null)
        const response = await fetch("https://api.quotable.io/random?maxLength=50")
        const data = await response.json()
        setQuote(data)
    }
    useEffect(() => {
        fetchQuote()
    }, [])
    
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
        from: { opacity: 0.5, y: 0 },
        enter: { opacity: 1, y: -10 },
        leave: { opacity: 1 }
    })
    const dividerLineRef = useSpringRef()
    const dividerLineProps = useSpring({
        ref: dividerLineRef,
        config: { mass: 5, tension: 2000, friction: 200 },
        from: { opacity: 0, width: 0},
        to: { opacity: 1, width: 80},
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
    useChain([navRef, socialIconsRef, trailsRef, worksTitleWrapperPropsRef, dividerLineRef, yearRef], [0, 1, 2, 3, 4, 5], 100)

    const [searchObj, setSearchObj] = useState(winkConfig)
    const querychange = obj => {
        if (obj) {
            setSearchObj(obj)
        } else {
            setSearchObj(winkConfig)
        }
    }
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
            <MainWrapper>
                <LeftPart>
                    <div id="MainId" style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                        <WorksTitleWrapper>
                            {worksTitleWrapperProps((style, item) => (
                                <a.div style={style}>
                            <TopDividerLine style={dividerLineProps} />
                            {trails.map(({ height, ...style }, index) => (
                                <WorksTitle style={style}>{worksTitleList[index]}</WorksTitle>
                                ))}
                            </a.div>))}
                        </WorksTitleWrapper>
                        <CountWrapper>
                            <p>{winkConfig.length}/{winkConfig.length}</p>
                        </CountWrapper>
                    </div>
                    <SearchWrapper>
                        <h3>FILTER</h3>
                        <label>SEARCH</label>
                        <Search winkconfig={winkConfig} querychange={querychange} />
                    </SearchWrapper>
                    <QuotesWrapper>
                            {quote ? <span>Quote : [<br />&nbsp;&nbsp;&nbsp;&nbsp;{quote.content}<br />&nbsp;&nbsp;&nbsp;&nbsp;~ {quote.author}<br />] ,<br />Reload : [ <a onClick={fetchQuote}>Yes</a> , No ]</span>
                                : <span>Loading...</span>
                            }
                    </QuotesWrapper>
                </LeftPart>
                <RightPart>
                    {searchObj.map((item, index) => (
                        <WorksCard key={index} item={item} index={index} />
                    ))}
                </RightPart>
            </MainWrapper>
            <FooterWrapper>
                {!mobile ? <><SocialIcons style={socialIconsAnim} pagetype="Works" />
                <Year style={yearAnim}>20<br/>23</Year></> : null}
            </FooterWrapper>
            {!tablet ? <Cursor /> : null}
        </WorksWrapper>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    *::-webkit-scrollbar {
        width: 6px;
        background: #000;
    }
    *::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px grey;
        border-radius: 5px;
    }
    *::-webkit-scrollbar-thumb {
        background: darkcyan;
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #000;
    nav {
        padding-top: 52px;
        margin-top: unset;
    }
    @media screen and (max-width: 1000px) {
        height: unset;
        min-height: 100vh;
    }
`

const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 50vw auto;
    grid-template-rows: 1fr;
    overflow: hidden;
    /* padding: 4rem; */
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 1rem; */
    /* justify-content: space-between; */
    /* @media screen and (max-width: 767px) {
        padding-left: 34px;
        justify-content: flex-start;
        gap: 6rem;
        #MainId {
            gap: 0 !important;
        }
    } */
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`

const LeftPart = styled.div`
    width: 100%;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
    @media screen and (max-width: 767px) {
        padding-left: 34px;
        justify-content: flex-start;
        gap: 6rem;
        #MainId {
            gap: 0 !important;
        }
    }
    @media screen and (max-width: 1000px) {
        gap: 8rem;
    }
`

const RightPart = styled.div`
    position: relative;
    grid-column: 2;
    margin: 0;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    overflow-x: hidden;
    @media screen and (max-width: 1000px) {
        height: unset;
        overflow-y: auto;
        margin: 4rem;
    }
    @media screen and (max-width: 767px) {
        margin: 2rem;
    }
`

// const WorksListWrapper = styled.div`

// `

const CountWrapper = styled.div`
    color: #fff;
    line-height: 14px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0;
    p {
        ::before {
            content: '~ ';
            line-height: 14px;
            font-size: 16px;
            font-weight: 900;
            letter-spacing: 0;
            background: linear-gradient(to right, #8a2387, #e94057, #f27121);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    }
`

const SearchWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    color: #fff;
    margin-top: -6rem;
    h3 {
        font-size: 18px;
        font-weight: 700;
    }
    label {
        line-height: 14px;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0;
    }
    @media screen and (max-width: 767px) {
        margin-top: -4rem;
    }
`

const QuotesWrapper = styled.div`
    box-sizing: content-box;
    position: relative;
    box-sizing: border-box;
    display: block;
    color: #fff;
    width: 30%;
    @media screen and (max-width: 767px) {
        display: none;
    }
    min-height: 102px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ::before {
        position: absolute;
        top: -2rem;
        content: "“ ";
        font-size: 2rem;
        font-weight: 900;
        background: linear-gradient(to right, #8a2387, #e94057, #f27121);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    ::after {
        position: absolute;
        bottom: -1rem;
        content: "”";
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 2rem;
        font-weight: 900;
        background: linear-gradient(to right, #8a2387, #e94057, #f27121);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    /* ::before {
        content: "";
        top: 0;
        right: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-top: 1pt solid  #8f8f90;
        border-right: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    ::after {
        content: "";
        top: 0;
        left: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-top: 1pt solid #8f8f90;
        border-left: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    :hover {
        ::before {
            width: 15px;
            height: 15px;
        }
        ::after {
            width: 15px;
            height: 15px;
        }
    } */
    span {
        position: relative;
        box-sizing: border-box;
        display: block;
        text-transform: uppercase;
        font-family: system-ui;
        letter-spacing: 0;
        line-height: 14px;
        font-size: 12px;
        font-weight: 400;
        padding-left: 1rem;
        /* ::before {
            content: "";
            bottom: 0;
            right: 0;
            width: 5px;
            height: 5px;
            position: absolute;
            border-right: 1pt solid  #8f8f90;
            border-bottom: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        ::after {
            content: "";
            bottom: 0;
            left: 0;
            width: 5px;
            height: 5px;
            position: absolute;
            border-bottom: 1pt solid #8f8f90;
            border-left: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        :hover {
            ::before {
                width: 15px;
                height: 15px;
            }
            ::after {
                width: 15px;
                height: 15px;
            }
        } */
    }
`

const WorksTitleWrapper = styled.div`
    width: fit-content;
    height: fit-content;
`

const TopDividerLine = styled(a.div)`
    position: absolute;
    width: 5rem;
    height: 4px;
    background: rgb(233,64,87);
    background: linear-gradient(to right, #8a2387, #e94057, #f27121);
`

const WorksTitle = styled(a.span)`
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
