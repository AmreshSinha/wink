import Head from "next/head";
import styles from "../styles/Skills.module.scss";
import WhiteNavbar from "../components/Navbar/index.white";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useRef } from "react";
import TrailingPointerCircle from "../components/TrailingPointerCircle";

export default function Skills() {
  const sectionBG = useRef();
  const switchOFF = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(switchOFF.current, {
      duration: 0.8,
      width: 0,
      height: 0,
      ease: "power4.out(1.7)",
    });
    tl.to(switchOFF.current, {
      duration: 0.4,
      attr: { src: "/switchON.svg" },
    })
    tl.to(switchOFF.current, {
      duration: 0.4,
      width: 0,
      height: 0,
      ease: "power4.out(1.7)",
    })
    tl.to(sectionBG.current, {
      duration: 0.4,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000",
      ease: "power4.out(1.7)",
    })
  }, []);
  return (
    <>
      <Head>
        <title>Skills | AmreshSinha 👋</title>
        <meta name="description" content="Passionate Developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section ref={sectionBG}>
        <TrailingPointerCircle />
        <WhiteNavbar />
        <div className={styles.switchWrapper}>
          <img
            src="/switchOFF.svg"
            alt="switch"
            className={styles.switchSize}
            ref={switchOFF}
          />
        </div>
      </section>
    </>
  );
}
