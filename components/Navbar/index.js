import styles from "./index.module.scss";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import YAMLData from "../../content.yaml";

export default function Navbar() {
  const aCircleLeft = useRef();
  const aRectRight = useRef();
  const aSquare = useRef();
  const navbarList = useRef();
  const hamburger = useRef();
  const backdropShade = useRef();
  const hamburgerStick1 = useRef();
  const hamburgerStick2 = useRef();
  const hamburgerStick3 = useRef();
  const skills = useRef();
  const showcases = useRef();
  const aboutMe = useRef();
  const contact = useRef();
  const githubCircle = useRef();
  const linkedinCircle = useRef();
  const twitterCircle = useRef();
  const kofiCircle = useRef();

  useEffect(() => {
    // Repeating Logo Animation
    let tl = gsap.timeline({ repeat: -1 });
    tl.from([aCircleLeft.current, aRectRight.current, aSquare.current], {
      duration: 1.8,
      y: 200,
      ease: "power4.out",
      delay: 2,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to([aCircleLeft.current, aRectRight.current, aSquare.current], {
      duration: 1.8,
      delay: 10,
      y: -100,
      ease: "power4.inOut",
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });

    // Reveal Animation of Hamburger Sticks
    // gsap.from(hamburger.current, {
    //   duration: 1.8,
    //   y: 200,
    //   ease: "power4.out",
    //   delay: 2,
    //   skewY: 7,
    //   stagger: {
    //     amount: 0.3,
    //   },
    // });
    gsap.from(
      [
        hamburgerStick1.current,
        hamburgerStick2.current,
        hamburgerStick3.current,
      ],
      {
        duration: 1.8,
        y: 200,
        ease: "power4.out",
        delay: 2,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      }
    );

    // Animating navbarList, navbarList items and backdropShade
    navbarList.current.anim = gsap
      .from(navbarList.current, {
        duration: 1,
        // delay: 1.2,
        x: 1000,
        padding: 0,
        ease: "power4.out",
      })
      .reversed(true);
    skills.current.anim = gsap
      .from(skills.current, {
        duration: 1,
        y: 250,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    showcases.current.anim = gsap
      .from(showcases.current, {
        duration: 1,
        y: 250,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    aboutMe.current.anim = gsap
      .from(aboutMe.current, {
        duration: 1,
        y: 250,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    contact.current.anim = gsap
      .from(contact.current, {
        duration: 1,
        y: 250,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    githubCircle.current.anim = gsap
      .from(githubCircle.current, {
        duration: 1,
        y: 400,
        ease: "power4.out",
        rotateZ: 180,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    linkedinCircle.current.anim = gsap
      .from(linkedinCircle.current, {
        duration: 1,
        y: 400,
        ease: "power4.out",
        rotateZ: 180,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    twitterCircle.current.anim = gsap
      .from(twitterCircle.current, {
        duration: 1,
        y: 400,
        ease: "power4.out",
        rotateZ: 180,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    kofiCircle.current.anim = gsap
      .from(kofiCircle.current, {
        duration: 1,
        y: 400,
        ease: "power4.out",
        rotateZ: 180,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      })
      .reversed(true);
    backdropShade.current.anim = gsap
      .to(backdropShade.current, {
        duration: 1,
        display: "block",
        translateX: () => {
          if (innerWidth < 700) {
            return `-100vw`;
          } else if (innerWidth < 1300 && innerWidth > 900) {
            return `-40vw`;
          } else if (innerWidth < 900 && innerWidth > 700) {
            return `-50vw`;
          } else {
            return `-25vw`;
          }
        },
        // padding: 0,
        ease: "power4.out",
      })
      .reversed(true);
    hamburgerStick1.current.anim = gsap
      .to(hamburgerStick1.current, {
        duration: 1,
        rotateZ: 45,
        marginBottom: -5,
      })
      .reversed(true);
    hamburgerStick2.current.anim = gsap
      .to(hamburgerStick2.current, {
        duration: 1,
        x: 100,
      })
      .reversed(true);
    hamburgerStick3.current.anim = gsap
      .to(hamburgerStick3.current, {
        duration: 1,
        rotateZ: -45,
        marginTop: -5,
      })
      .reversed(true);
    hamburger.current.addEventListener("click", openNavbarList);

    // function openNavbarList
    function openNavbarList() {
      navbarList.current.anim.reversed(!navbarList.current.anim.reversed());
      skills.current.anim.reversed(!skills.current.anim.reversed());
      showcases.current.anim.reversed(!showcases.current.anim.reversed());
      aboutMe.current.anim.reversed(!aboutMe.current.anim.reversed());
      contact.current.anim.reversed(!contact.current.anim.reversed());
      githubCircle.current.anim.reversed(!githubCircle.current.anim.reversed());
      kofiCircle.current.anim.reversed(!kofiCircle.current.anim.reversed());
      linkedinCircle.current.anim.reversed(
        !linkedinCircle.current.anim.reversed()
      );
      twitterCircle.current.anim.reversed(
        !twitterCircle.current.anim.reversed()
      );
      backdropShade.current.anim.reversed(
        !backdropShade.current.anim.reversed()
      );
      hamburgerStick1.current.anim.reversed(
        !hamburgerStick1.current.anim.reversed()
      );
      hamburgerStick2.current.anim.reversed(
        !hamburgerStick2.current.anim.reversed()
      );
      hamburgerStick3.current.anim.reversed(
        !hamburgerStick3.current.anim.reversed()
      );
    }
  }, []);
  return (
    <>
      <Head>
        <link href="https://use.typekit.net/skn8ash.css" rel="stylesheet" />
      </Head>
      <div className={styles.backdropShade} ref={backdropShade}></div>
      <div className={styles.navbarWrapper}>
        <Link href="/">
          <a className={styles.aLetterWrapper}>
            {/* <img
              src="./aCircleLeft.svg"
              className={styles.aCircleLeft}
              alt="aCircle"
              ref={aCircleLeft}
            /> */}
            <svg
              className={styles.aCircleLeft}
              ref={aCircleLeft}
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="20" />
            </svg>
            {/* <img
              src="./aRectRight.svg"
              className={styles.aRectRight}
              alt="aRect"
              ref={aRectRight}
            /> */}
            <svg
              className={styles.aRectRight}
              ref={aRectRight}
              width="20"
              height="100"
              viewBox="0 0 20 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="4.37114e-07"
                x2="10"
                y2="100"
                stroke="black"
                strokeWidth="20"
              />
            </svg>
            <div className={styles.aSquare} ref={aSquare}>
              {/* <img
                src="./aSquare.svg"
                className={styles.aSquareItem}
                alt="aSquare"
              /> */}
              <svg
                className={styles.aSquareItem}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" fill="black" />
              </svg>
            </div>
          </a>
        </Link>
        <div className={styles.hamburger} ref={hamburger}>
          <div className={styles.hamburgerList1} ref={hamburgerStick1}></div>
          <div className={styles.hamburgerList2} ref={hamburgerStick2}></div>
          <div className={styles.hamburgerList3} ref={hamburgerStick3}></div>
        </div>
      </div>
      <ul className={styles.navbarList} ref={navbarList}>
        <li>
          <div ref={skills}>
            <Link href="/skills">
              <a className={styles.leftToRight}>Skills</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={showcases}>
            <Link href="/showcases">
              <a className={styles.leftToRight}>Showcases</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={aboutMe}>
            <Link href="/about">
              <a className={styles.leftToRight}>About me</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={contact}>
            <Link href="/contact">
              <a className={styles.leftToRight}>Contact</a>
            </Link>
          </div>
        </li>
        <li className={styles.socialIcons}>
          <a
            href={
              YAMLData.main[1].githubProfileLink
                ? YAMLData.main[1].githubProfileLink
                : "https://github.com/AmreshSinha"
            }
            target="_blank"
            rel="noreferrer"
            ref={githubCircle}
          >
            {/* <img
              src="./githubCircle.svg"
              className={styles.githubCircle}
              alt="githubCircle"
            /> */}
            <svg
              className={styles.githubCircle}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.685 28.205c.556 0 .53-1.12.53-1.493 0-.334-.012-1.217-.019-2.39-3.894.85-4.716-1.885-4.716-1.885-.636-1.623-1.554-2.055-1.554-2.055-1.271-.873.096-.855.096-.855 1.405.1 2.144 1.449 2.144 1.449 1.25 2.148 3.277 1.527 4.075 1.167.127-.908.489-1.528.889-1.879-3.109-.355-6.377-1.56-6.377-6.946 0-1.535.545-2.79 1.441-3.772-.144-.356-.625-1.784.137-3.72 0 0 1.176-.377 3.85 1.441a13.39 13.39 0 013.505-.473c1.189.006 2.387.161 3.505.473 2.672-1.818 3.846-1.44 3.846-1.44.764 1.935.283 3.363.139 3.719.898.983 1.44 2.237 1.44 3.772 0 5.4-3.274 6.588-6.393 6.936.503.434.95 1.29.95 2.602 0 1.88-.017 3.395-.017 3.856 0 .376 0 1.495.529 1.493 0 .002-8 0-8 0z"
                fill="#fff"
              ></path>
            </svg>
          </a>
          <a
            href={
              YAMLData.main[2].linkedinProfileLink
                ? YAMLData.main[2].linkedinProfileLink
                : "#"
            }
            target="_blank"
            rel="noreferrer"
            ref={linkedinCircle}
          >
            {/* <img
              src="./linkedinCircle.svg"
              className={styles.linkedinCircle}
              alt="linkedinCircle"
            /> */}
            <svg
              className={styles.linkedinCircle}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 310 310"
              fill="#fff"
              xmlSpace="preserve"
            >
              <g id="XMLID_801_">
                <path
                  id="XMLID_802_"
                  d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73   C77.16,101.969,74.922,99.73,72.16,99.73z"
                />
                <path
                  id="XMLID_803_"
                  d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4   c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                />
                <path
                  id="XMLID_804_"
                  d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599   c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319   c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995   C310,145.43,300.549,94.761,230.454,94.761z"
                />
              </g>
            </svg>
          </a>
          <a
            href={
              YAMLData.main[3].twitterProfileLink
                ? YAMLData.main[3].twitterProfileLink
                : "#"
            }
            target="_blank"
            rel="noreferrer"
            ref={twitterCircle}
          >
            <img
              src="./twitterCircle.svg"
              className={styles.twitterCircle}
              alt="twitterCircle"
            />
          </a>
          <a
            href={
              YAMLData.main[4].kofiLink
                ? YAMLData.main[4].kofiLink
                : "https://ko-fi.com/amresh"
            }
            target="_blank"
            rel="noreferrer"
            ref={kofiCircle}
          >
            <img
              src="./ko-fi.svg"
              className={styles.kofiCircle}
              alt="twitterCircle"
            />
          </a>
        </li>
      </ul>
    </>
  );
}
