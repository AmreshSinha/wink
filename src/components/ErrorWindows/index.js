import styled from "styled-components";
import QRCode from '../../images/qr-code.png';

export default function ErrorWindows() {
    return (
        <Wrapper>
            <h1>:)</h1>
            <p>Your Project ran into a problem that it couldn't handle. &gt;W&lt;</p>
            <p>Let me help you! Whether it's a chit chat or discussion over something crucial, I am always available!</p>
            <img alt='' src={`${QRCode}`} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    gap: 4rem;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: rgb(57, 146, 255);
    padding-left: 9rem;
    @media screen and (max-width: 480px) {
        gap: 2.5rem;
    }
    h1 {
        font-family: 'Inter', sans-serif;
        font-size: 120px;
        color: #fff;
        @media screen and (max-width: 600px) {
            font-size: 96px;
        }
        @media screen and (max-width: 480px) {
            font-size: 72px;
        }
    }
    p {
        font-family: 'Inter', sans-serif;
        font-size: 30px;
        line-height: 40px;
        max-width: 56rem;
        color: #fff;
        @media screen and (max-width: 1000px) {
            max-width: 40rem;
        }
        @media screen and (max-width: 768px) {
            max-width: 30rem;
        }
        @media screen and (max-width: 600px) {
            max-width: 24rem;
            font-size: 24px;
        }
        @media screen and (max-width: 480px) {
            max-width: 18rem;
            font-size: 18px;
        }
    }
    img {
        width: 96px;
    }
`