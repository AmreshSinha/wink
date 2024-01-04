import styled from "styled-components";
import { FiAtSign, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { a } from "@react-spring/web";

export default function SocialIcons({ email, color, pagetype, style }) {
    return (
        <SocialIconsContainer style={style} pagetype={pagetype}>
            {email ? 
            <a href={`mailto:${email}`} aria-label="Email">
                <FiAtSign color={color ? `${color}` : null} />
            </a> : null
            }
            <a href="https://github.com/AmreshSinha" target="_blank" rel="noreferrer" aria-label="Github">
                <FiGithub color={color ? `${color}` : null} />
            </a>
            <a href="https://twitter.com/aps_codes" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FiTwitter color={color ? `${color}` : null} />
            </a>
            <a href="https://www.linkedin.com/in/amresh-sinha/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin color={color ? `${color}` : null} />
            </a>
        </SocialIconsContainer>
    )
}

const SocialIconsContainer = styled(a.div)`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.pagetype === "Works" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    gap: 1em;
    font-size: 24px;
    a {
        color: #fff;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
        :hover {
            color: #fff;
            transform: scale(1.1);
        }
    }
`
