import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import TrailingPointerCircle from "../components/TrailingPointerCircle";
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
  const lowerArrowsDiv = useRef();
  const heyIAm = useRef();
  const myName = useRef();

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
    let heyIAmText = heyIAm.current.innerHTML.replace(/&nbsp;/g, "").split("");
    for (let i = 0; i < heyIAmText.length; i++) {
      if (heyIAmText[i] === " ") {
        heyIAmText[i] = "<span>&nbsp;</span>";
      } else {
        heyIAmText[i] = `<span>${heyIAmText[i]}</span>`;
      }
    }
    heyIAmText.push("<span>&nbsp;</span>");
    heyIAm.current.innerHTML = heyIAmText.join("");
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
  }, []);

  return (
    <>
      <Head>
        <title>AmreshSinha 👋</title>
        <meta name="description" content="Passionate Developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.wrapper} ref={firstSection}>
        <TrailingPointerCircle />
        <div className={styles.blur} ref={boxRef1}></div>
        <div className={styles.blur} ref={boxRef2}></div>
        <div className={styles.blur} ref={boxRef3}></div>
        <Navbar />
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
            <span ref={heyIAm}>Hey, I am&nbsp;</span>
            <u className={styles.waveUnderline} ref={myName}>
              Amresh
            </u>
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
    </>
  );
}
