import Head from "next/head";
import styles from "../styles/Skills.module.scss";
import Navbar from "../components/Navbar";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import TrailingPointerCircle from "../components/TrailingPointerCircle";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const coolText = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(coolText.current, {
      duration: 0.4,
      text: "s",
    });
  }, []);
  return (
    <>
      <Head>
        <title>Skills | AmreshSinha 👋</title>
        <meta name="description" content="Passionate Developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <TrailingPointerCircle />
        <Navbar />
        {/* <div className={styles.animTextWrapper}>
          <h1 ref={coolText}>skills</h1>
        </div> */}
      </section>
    </>
  );
}
