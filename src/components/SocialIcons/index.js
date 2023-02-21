import styled from "styled-components";
import { FiAtSign, FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

export default function SocialIcons({ email, color, pageType }) {
    return (
        <SocialIconsContainer pageType={pageType}>
            {email ? 
            <a href={`mailto:${email}`}>
                <FiAtSign color={color ? `${color}` : null} />
            </a> : null
            }
            <a href="https://github.com/AmreshSinha">
                <FiGithub color={color ? `${color}` : null} />
            </a>
            <a href="https://twitter.com/aps_codes">
                <FiTwitter color={color ? `${color}` : null} />
            </a>
            <a href="https://www.linkedin.com/in/amresh-sinha/">
                <FiLinkedin color={color ? `${color}` : null} />
            </a>
        </SocialIconsContainer>
    )
}

const SocialIconsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.pageType === "Works" ? "column" : "row"};
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
