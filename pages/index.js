import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef1 = useRef();
  const boxRef2 = useRef();
  const boxRef3 = useRef();
  const firstSection = useRef();
  const secondSection = useRef();
  const headingH1 = useRef();
  const arrowLeft1 = useRef();
  const arrowLeft2 = useRef();
  const arrowLeft3 = useRef();
  const arrowLeft4 = useRef();
  const arrowLeft5 = useRef();
  const arrowLeft6 = useRef();
  const arrowLeft7 = useRef();
  const arrowLeft8 = useRef();
  const arrowLeft9 = useRef();
  const arrowLeft10 = useRef();
  const arrowRight1 = useRef();
  const arrowRight2 = useRef();
  const arrowRight3 = useRef();
  const arrowRight4 = useRef();
  const arrowRight5 = useRef();
  const arrowRight6 = useRef();
  const arrowRight7 = useRef();
  const arrowRight8 = useRef();
  const arrowRight9 = useRef();
  const arrowRight10 = useRef();
  const rectangle1 = useRef();
  const rectangle2 = useRef();
  const rectangle1Right = useRef();
  const rectangle2Right = useRef();
  const subHeading = useRef();
  const myName = useRef();
  const hamburgerWrapper = useRef();
  const aCircleLeft = useRef();
  const aRectRight = useRef();
  const aSquare = useRef();
  const navbarList = useRef();
  const hamburger = useRef();
  const backdropShade = useRef();
  const hamburgerStick1 = useRef();
  const hamburgerStick2 = useRef();
  const hamburgerStick3 = useRef();
  const lowerArrowsDiv = useRef();
  const skills = useRef();
  const showcases = useRef();
  const aboutMe = useRef();
  const contact = useRef();
  const githubCircle = useRef();
  const linkedinCircle = useRef();
  const twitterCircle = useRef();

  useEffect(() => {
    // First Section and Second Section with Layered Pinning Transition
    // [firstSection, secondSection].forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel.current,
    //     start: "top top",
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });

    // Animated Subtle Radial Gradient Background
    const randomX = random(-400, 400);
    const randomY = random(-200, 200);
    const randomDelay = random(0, 50);
    const randomTime = random(6, 12);
    const randomTime2 = random(5, 6);
    const randomAngle = random(-30, 150);

    const blurs = [boxRef1.current, boxRef2.current, boxRef3.current];
    blurs.forEach((blur) => {
      gsap.from(blur, { duration: 2, delay: 1, width: 0, height: 0 });
      gsap.set(blur, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1),
      });

      moveX(blur, 1);
      moveY(blur, -1);
      rotate(blur, 1);
    });

    function rotate(target, direction) {
      gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: "Sine.easeInOut",
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveX(target, direction) {
      gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: "Sine.easeInOut",
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      });
    }

    function moveY(target, direction) {
      gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: "Sine.easeInOut",
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      });
    }

    function random(min, max) {
      const delta = max - min;
      return (direction = 1) => (min + delta * Math.random()) * direction;
    }

    // Arrows Animation
    const leftArrows = [
      arrowLeft1.current,
      arrowLeft2.current,
      arrowLeft3.current,
      arrowLeft4.current,
      arrowLeft5.current,
      arrowLeft6.current,
      arrowLeft7.current,
      arrowLeft8.current,
      arrowLeft9.current,
      arrowLeft10.current,
    ];
    const rightArrows = [
      arrowRight1.current,
      arrowRight2.current,
      arrowRight3.current,
      arrowRight4.current,
      arrowRight5.current,
      arrowRight6.current,
      arrowRight7.current,
      arrowRight8.current,
      arrowRight9.current,
      arrowRight10.current,
    ];
    let lowerArrowsTL = gsap.timeline({ repeat: -1 });
    for (let i = 0; i < 10; i++) {
      // gsap.from(leftArrows[i], {
      //   duration: 2.5,
      //   x: 2000 + 1000 * Math.exp(-i),
      //   ease: "back.out(0.7)",
      // });
      gsap.from(rightArrows[9 - i], {
        duration: 2.5,
        delay: 2,
        x: -2000 - 1000 * Math.exp(-i),
        ease: "back.out(0.7)",
      });
    }
    gsap.from(rectangle1.current, {
      duration: 2,
      y: 200,
      ease: "power4.out",
      delay: 2,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(rectangle2.current, {
      duration: 2,
      y: -200,
      ease: "power4.out",
      delay: 2,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });

    // Reveal Animation of Heading
    gsap.from(subHeading.current, {
      duration: 2,
      y: 250,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
    gsap.from(headingH1.current, {
      duration: 1.8,
      y: 250,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });

    // Animating the a heading svg
    // gsap.from(aCircleLeft.current, {
    //   duration: 1.1,
    //   delay: 1.2,
    //   x: -100,
    //   y: -60,
    //   rotateZ: -90,
    //   ease: "back.out(1.7)",
    //   skew: "15deg",
    //   stagger: {
    //     amount: 0.3
    //   }
    // })

    // gsap.from(aRectRight.current, {
    //   duration: 1.1,
    //   delay: 1,
    //   y: -60,
    //   rotateZ: "-90deg",
    //   ease: "back.out(1.7)",
    //   skewX: 7,
    //   stagger: {
    //     amount: 0.3
    //   }
    // })

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
        duration: 1.2,
        delay: 1.2,
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
        duration: 1.2,
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
        duration: 1.4,
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
        duration: 1.6,
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
        duration: 1.8,
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
        duration: 1.8,
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
        duration: 1.8,
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
        duration: 1.2,
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
        duration: 0.8,
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
        duration: 0.8,
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
        <title>AmreshSinha 👋</title>
        <meta name="description" content="Passionate Developer!" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://use.typekit.net/skn8ash.css" rel="stylesheet" />
      </Head>

      <div className={styles.backdropShade} ref={backdropShade}></div>
      <section className={styles.wrapper} ref={firstSection}>
        <div className={styles.blur} ref={boxRef1}></div>
        <div className={styles.blur} ref={boxRef2}></div>
        <div className={styles.blur} ref={boxRef3}></div>
        <div className={styles.navbarWrapper} ref={hamburgerWrapper}>
          <a className={styles.aLetterWrapper} href="./">
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
          <div className={styles.hamburger} ref={hamburger}>
            <div className={styles.hamburgerList1} ref={hamburgerStick1}></div>
            <div className={styles.hamburgerList2} ref={hamburgerStick2}></div>
            <div className={styles.hamburgerList3} ref={hamburgerStick3}></div>
          </div>
        </div>
        <ul className={styles.navbarList} ref={navbarList}>
          <li>
            <div ref={skills}>
              <a href="#">Skills</a>
            </div>
          </li>
          <li>
            <div ref={showcases}>
              <a href="#">Showcases</a>
            </div>
          </li>
          <li>
            <div ref={aboutMe}>
              <a href="#">About me</a>
            </div>
          </li>
          <li>
            <div ref={contact}>
              <a href="#">Contact</a>
            </div>
          </li>
          <li className={styles.socialIcons}>
            <a href="#" ref={githubCircle}>
              <img
                src="./githubCircle.svg"
                className={styles.githubCircle}
                alt="githubCircle"
              />
            </a>
            <a href="#" ref={linkedinCircle}>
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
          </li>
        </ul>
        <div className={styles.arrowRightWithDottedRectangleBackground}>
          <img
            src="./dottedPattern.png"
            className={styles.rectangle1Right}
            ref={rectangle1Right}
            alt="rectangle1"
          />
          <div className={styles.arrowLeftFlex} ref={lowerArrowsDiv}>
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft1}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft2}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft3}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft4}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft5}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft6}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft7}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft8}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft9}
            />
            <img
              src="./Arrow-left.svg"
              alt="arrow-right"
              className={styles.arrowLeftFlexItems}
              ref={arrowLeft10}
            />
          </div>
          <img
            src="./dottedPattern.png"
            alt="dotted-pattern"
            className={styles.rectangle2Right}
            ref={rectangle2Right}
          />
        </div>
        <div className={styles.centerColumn}>
          <h1 className={styles.centerRow} ref={headingH1}>
            <span>Hey, I am&nbsp;</span>
            <u className={styles.waveUnderline}>Amresh</u>
            <span className={styles.wave}>👋</span>
          </h1>
          <span className={styles.subHeading} ref={subHeading}>
            <span>Passionate about&nbsp;</span>
            <span>Web Development</span>
          </span>
        </div>
        <div className={styles.arrowLeftWithDottedRectangleBackground}>
          <div className={styles.rectangle1Wrapper}>
            <img
              src="./dottedPattern.png"
              className={styles.rectangle1}
              ref={rectangle1}
              alt="rectangle1"
            />
          </div>
          <div className={styles.arrowRightFlex}>
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight1}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight2}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight3}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight4}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight5}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight6}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight7}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight8}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight9}
            />
            <img
              src="./Arrow-right.svg"
              alt="arrow-right"
              className={styles.arrowRightFlexItems}
              ref={arrowRight10}
            />
          </div>
          <div className={styles.rectangle2Wrapper}>
            <img
              src="./dottedPattern.png"
              className={styles.rectangle2}
              ref={rectangle2}
              alt="rectangle2"
            />
          </div>
        </div>
      </section>

      {/* <div ref={secondSection} className={styles.secondSection}>
        <div className={styles.arrowLeftFlex}>
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
          <img src="./Arrow-left.svg" alt="arrow-right" className={styles.arrowLeftFlexItems} />
        </div>
        <h1>Yo!</h1>
        <div className={styles.arrowRightFlex}>
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
          <img src="./Arrow-right.svg" alt="arrow-right" className={styles.arrowRightFlexItems} />
        </div>
      </div> */}
    </>
  );
}
