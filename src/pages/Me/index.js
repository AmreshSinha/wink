import { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, Sticky, batch, Fade, MoveOut, StickyIn, FadeIn, ZoomIn, Move, MoveIn, ZoomOut } from 'react-scroll-motion';
import Cursor from "../../components/Cursor";
import favicon from '../../images/favicon.ico'
import appleIcon from '../../images/apple-touch-icon.png'
import favicon32 from '../../images/favicon-32x32.png'
import favicon16 from '../../images/favicon-16x16.png'
import siteManifest from '../../images/site.webmanifest'
import SocialIcons from '../../components/SocialIcons';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

export default function Me() {
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

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);
    // console.log((offsetY/(500*windowSize.innerHeight) * 100))
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
        
    //     return () => window.addEventListener('scroll', handleScroll);
    // }, [])
    
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
            <Wrapper>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -2000))}>
                        <Text2>Hi.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2>I am Amresh.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#748DA6', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
                        <Text2 style={{color: '#F2D7D9'}}>I am a Web Developer,</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#635666', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade())}>
                        <Text2 style={{color: '#D3EBCD'}}>DevOps Engineer,</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#576F72', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(StickyIn(), Fade())}>
                        <Text2 style={{color: '#F0EBE3'}}>Open Source Enthusiast,</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Sticky(0,0), Fade())}>
                        <div style={{position: 'absolute', zIndex: -1, background: '#E7AB79', height: '100vh', width: '100vw'}}></div>
                    </Animator>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
                        <Text2 style={{color: '#4C3A51'}}>and a Student.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '3rem'}}>Grab something to eat as this is going to be long.</Text2>
                    </Animator>
                </ScrollPage>

                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '3rem'}}>Keep scrollin'!</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '3rem'}}>Here's my journey.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>I got my first computer 🖥️ in 2011.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <Text2 style={{fontSize: '2rem'}}>I was in 4th standard at that time.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>I started out with BASIC, QBASIC and Turtle.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2 style={{fontSize: '2rem'}}>🐢 was awesome!</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '2rem'}}>In 5th standard my dad bought me a dongle.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>I never knew how the Internet would look like.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Till that time I just read about Internet in the books 📚 only.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>I plugged it. Opened IE and 💥!</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                        <Text2 style={{fontSize: '2rem'}}>The Internet was so awesome! I can literally go anywhere,</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(StickyIn(), Fade(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>search about any info, chat with friends, and play games.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Transitioning to 6th standard.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>I got introduced to HTML <img alt='' style={{width: '32px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />, CSS <img alt='' style={{ width: '32px' }} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> and JavaScript <img alt='' style={{width: '32px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>                    
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn())}>
                        <Text2 style={{fontSize: '2rem'}}>It was cool!</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn())}>
                        <Text2 style={{fontSize: '1.5rem'}}>I thought I am one step closer to making my own billion $ site like</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Google xD</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn())}>
                        <Text2 style={{fontSize: '2rem'}}>In 7th or 8th (can't recall that correctly) I learned more about Python.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), StickyIn())}>
                        <Text2 style={{fontSize: '2rem'}}>Later in 9th standard I was introduced to C++.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '2rem'}}>Sadly after 10th, I was not in touch with programming for 2 years, all thnx to</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), ZoomOut())}>
                        <Text2 style={{fontSize: '2rem'}}>JEE <img alt='' style={{ width: '32px' }} src="https://cdn3.emoji.gg/emojis/2982-pepecry.png"/></Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '2rem'}}>I got into IIT Guwahati.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>When I was preparing for JEE I had the plans to fully devote my time to coding after I enter college.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn())}>
                        <Text2 style={{fontSize: '2rem'}}>So yeah, in 1st yr I learned NodeJS, React, Express and MongoDB.</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '2rem'}}>Made some good friends :)</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '2rem'}}>Transitioning to 2nd yr.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveIn(-200, 0), MoveOut(200, 0))}>
                        <Text2 style={{fontSize: '2rem'}}>Got into our college's Coding Club.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '2rem'}}>Learned more about Web Frameworks like NextJS.</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), ZoomIn(10))}>
                        <Text2 style={{fontSize: '4rem'}}>BTW I forgot to told u.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '4rem'}}>I used to love Cloud stuff from way back in 8th stnd.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '4rem'}}>Playing with Virtual Machines, Linux VMs, Deploying and experimenting with new new stuff.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>In the starting of 2nd year I started out with DevOps.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>Though I had some knowledge about Docker I brushed <img alt='' style={{width: '2.5rem'}} src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1faa5.png" /> it up again.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>Learned more about Linux.<br />(I use Arch BTW! <img alt='' style={{width: '3rem'}} src="https://cdn3.emoji.gg/emojis/5498_catJAM.gif" />)</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>In 4th Semester I took part in Inter IIT in a Team.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Text2 style={{fontSize: '3.25rem'}}>We placed 3rd position <img alt='' style={{ width: '3.1rem' }} src="https://cdn3.emoji.gg/emojis/5163-95-crythumbsup.png" />.</Text2>
                    </Animator>
                </ScrollPage>
                
                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <Text2 style={{fontSize: '3.25rem'}}>...</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>
                
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>I also post about Tech on my blog <a style={{ color: '#F9F9F9' }} href="https://fossian.com" target="_blank" without rel="noreferrer">Fossian</a>.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut())}>
                        <Text2 style={{fontSize: '3.25rem'}}>Recently I started out using Traefik instead of Nginx.</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky(), Move())}>
                        <Text2 style={{fontSize: '3.25rem'}}>And this brings us to the present</Text2>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={batch(Sticky(), FadeIn())}>
                        <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: "100%" }} >
                            <Text2 style={{fontSize: '3.25rem'}}>Me.</Text2>
                            <span style={{marginTop: '1rem'}}><SocialIcons color="#999" email="amresh@duck.com" /></span>
                        </div>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
            <GoBack to="/" id="home">← Home</GoBack>
            <ScrollDown>Scroll ↓</ScrollDown>
            {!tablet ? <Cursor /> : null}
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    * {
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    }
    /* width: 100%; */
    /* height: 5000vh; */
    background: #111;
`

const GoBack = styled(Link)`
    position: fixed;
    top: 1rem;
    left: 1rem;
    color: #999;
    text-decoration: none;
`

const ScrollDown = styled.div`
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    color: #999;
`

// const HeroBackground = styled.div`
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background: url(${HeroImage}) no-repeat center center;
//     top: 0;
//     background-size: cover;
//     z-index: -1;
// `

// const Text = styled.div`
//     font-family: 'Space Grotesk', sans-serif;
//     font-size: 8rem;
//     color: #999;
//     mix-blend-mode: difference;
//     font-weight: 600;
//     position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// `

const Text2 = styled.h2`
    font-family: 'Space Grotesk', sans-serif;
    font-size: 8rem;
    color: #F6FBF4;
    mix-blend-mode: difference;
    font-weight: 600;
    @media screen and (max-width: 768px) {
        font-size: 3rem !important;
    }
    @media screen and (max-width: 480px) {
        font-size: 2rem !important;
    }
`
