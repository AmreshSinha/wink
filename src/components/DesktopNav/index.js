import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom"
import { a, useSpring } from "@react-spring/web"

export default function DesktopNav({ style }) {
    // const navReveal = useSpring({
    //     config: { mass: 5, tension: 2000, friction: 200 },
    //     from: { opacity: 0, x: -20, y: -200},
    //     to: { opacity: 1, x: 0, y: 0},
    // })
    return (
        <NavWrapper style={style}>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}><Logo /></Link>
            <Links>
                <NavLink to="/" id="home"><span>01.</span> Home</NavLink>
                <NavLink to="/works" id="works"><span>02.</span> Works</NavLink>
                <NavLink to="/blog" id="works"><span>03.</span> Blog</NavLink>
                <NavLink to="/me"><span>04.</span> Me</NavLink>
            </Links>
        </NavWrapper>
    )
}

const NavWrapper = styled(a.nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 52px;
    margin-left: 64px;
    margin-right: 64px;
    /* width: 100%; */
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        margin-right: 2rem;
    }
    @media screen and (max-width: 767px) {
        margin-left: 34px;
        margin-top: 50px;
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 64px;
`

const NavLink = styled(Link)`
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: #fff;
    /* mix-blend-mode: difference; */
    font-size: 24px;
    font-weight: 500;
    span {
        font-size: 16px;
    }
    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background: linear-gradient(to right, #8a2387, #e94057, #f27121);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    @media screen and (max-width: 767px) {
        :nth-child(1) {
            display: none;
        }
        :nth-child(2) {
            display: none;
        }
        :nth-child(3) {
            display: none;
        }
        /* :nth-child(3)::before {
            content: '01. Me';
        } */
    }
`