import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

export default function Transition(props) {
  const element = useRef(null);
  const lottieInstance = useRef();
  const lottieArray = ["4884-coffee.json", "93227-fading-cubes-loader-2.json"]

  useEffect(() => {
    if (element.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: lottieArray[Math.floor(Math.random()*lottieArray.length)],
      });
    }
  }, []);

  return (
    <div className={props.loading ? styles.lottieWrapper : styles.none}>
      <div ref={element}></div>
    </div>
  );
}
