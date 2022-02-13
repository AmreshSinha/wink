import styles from "./index.module.scss";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";

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
      <div className={styles.backdropShade} ref={backdropShade}></div>
      <div className={styles.navbarWrapper}>
        <Link href="/">
          <a className={styles.aLetterWrapper}>
            <img
              src="./aCircleLeft.svg"
              className={styles.aCircleLeft}
              alt="aCircle"
              ref={aCircleLeft}
            />
            <img
              src="./aRectRight.svg"
              className={styles.aRectRight}
              alt="aRect"
              ref={aRectRight}
            />
            <div className={styles.aSquare} ref={aSquare}>
              <img
                src="./aSquare.svg"
                className={styles.aSquareItem}
                alt="aSquare"
              />
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
              <a>Skills</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={showcases}>
            <Link href="/showcases">
              <a>Showcases</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={aboutMe}>
            <Link href="/about">
              <a>About me</a>
            </Link>
          </div>
        </li>
        <li>
          <div ref={contact}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </li>
        <li className={styles.socialIcons}>
          <a href="https://github.com/AmreshSinha" ref={githubCircle}>
            <img
              src="./githubCircle.svg"
              className={styles.githubCircle}
              alt="githubCircle"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aps-amresh/"
            ref={linkedinCircle}
          >
            <img
              src="./linkedinCircle.svg"
              className={styles.linkedinCircle}
              alt="linkedinCircle"
            />
          </a>
          <a href="#" ref={twitterCircle}>
            <img
              src="./twitterCircle.svg"
              className={styles.twitterCircle}
              alt="twitterCircle"
            />
          </a>
          <a href="https://ko-fi.com/amresh" ref={kofiCircle}>
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
