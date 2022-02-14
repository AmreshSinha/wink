import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

export default function TrailingPointerCircle() {
  const cursor = useRef();
  useEffect(() => {
    console.log(cursor.current);
    let mouse = { x: 300, y: 300 };
    let pos = { x: 0, y: 0 };
    const speed = 0.1; // between 0 and 1

    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursor.current.style.transform =
        `translate3d( ${pos.x}px, ${pos.y}px, 0)`;
    };

    const updateCoordinates = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", updateCoordinates);

    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }, []);
  return (
    <div className={styles.cursor} ref={cursor}>
      <div className={styles.cursorInner}></div>
    </div>
  );
}
