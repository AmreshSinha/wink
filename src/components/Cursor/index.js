import { useEffect, useRef } from "react";
import styled from "styled-components";

export default function Cursor() {
    const delay = 18;

    const dot = useRef(null)
    const dotOutline = useRef(null)

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
        document.addEventListener('mouseover', (e) => {
          if (e.target.closest('a') || e.target.closest('svg') || e.target.closest('span')) {
            cursorEnlarged.current = true;
            toggleCursorSize();
          } else {
            cursorEnlarged.current = false;
            toggleCursorSize();
          }
        })

        animateDotOutline();
    
        return () => {
          document.removeEventListener('mousedown', mouseOverEvent);
          document.removeEventListener('mouseup', mouseOutEvent);
          document.removeEventListener('mousemove', mouseMoveEvent);
          document.removeEventListener('mouseenter', mouseEnterEvent);
          document.removeEventListener('mouseleave', mouseLeaveEvent);
    
          cancelAnimationFrame(requestRef.current);
        };
    }, []);
    
    const toggleCursorVisibility = () => {
        if (cursorVisible.current) {
          dot.current.style.opacity = 1;
          dotOutline.current.style.opacity = 1;
        } else {
          dot.current.style.opacity = 0;
          dotOutline.current.style.opacity = 0;
        }
    };
    
    const toggleCursorSize = () => {
      if (cursorEnlarged.current) {
        dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };

    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      toggleCursorSize();
    };

    const mouseOutEvent = () => {
      cursorEnlarged.current = false;
      toggleCursorSize();
    };

    const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();
    };

    const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
    };

    const mouseMoveEvent = e => {
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;

      dot.current.style.top = endY.current + 'px';
      dot.current.style.left = endX.current + 'px';
    };
    
    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;
    
        dotOutline.current.style.top = _y.current + 'px';
        dotOutline.current.style.left = _x.current + 'px';
    
        requestRef.current = requestAnimationFrame(animateDotOutline);
    };

    return (
        <>
            <CursorDotOutline ref={dotOutline}></CursorDotOutline>
            <CursorDot ref={dot}></CursorDot>
        </>
    )
}

const CursorDotOutline = styled.div`
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 40px;
    height: 40px;
    background-color: rgba(229, 128, 128, 0.5);
`

const CursorDot = styled.div`
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 1;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 8px;
    height: 8px;
    background-color: #dc5656;
`