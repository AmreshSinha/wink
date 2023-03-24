import styled from "styled-components";

export default function WorksCard({ item }) {
    return (
        <CardWrapper href={item.link} target="_blank">
            <span></span>
            <Card>
                <h3>
                    {item.year}
                </h3>
                <h1>
                    {item.title}
                </h1>
                <div>
                    <h3>
                        {item.category}
                    </h3>
                    <h3>
                        {item.industry}
                    </h3>
                    <div style={{ width: "50px", height: "50px" }}></div>
                </div>
            </Card>
        </CardWrapper>
    )
}

const CardWrapper = styled.a`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
    height: fit-content;
    padding: 50px;
    color: #fff;
    text-decoration: none;
    border-left: 1px solid #8f8f90;
    transition: .3s cubic-bezier(0.25,0.8,0.25,1) 0s;
    span{
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #8f8f90;
        left: 0;
        top: 0;
    }
    :hover {
        background: rgb(251, 133, 0);
        h3 {
            transform: translateX(32px);
        }
        h1 {
            transform: translateX(32px);
        }
        div > h3 {
            transform: translateX(32px);
        }
    }
    @media screen and (max-width: 1000px) {
        border: unset;
        span {
            display: none;
        }
        :focus-visible {
            background: rgb(251, 133, 0);
        }
        ::before {
            content: "";
            top: 0;
            right: 0;
            width: 15px;
            height: 15px;
            position: absolute;
            border-top: 1pt solid  #8f8f90;
            border-right: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        ::after {
            content: "";
            top: 0;
            left: 0;
            width: 15px;
            height: 15px;
            position: absolute;
            border-top: 1pt solid #8f8f90;
            border-left: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        :hover {
            background: unset;
            ::before {
                width: 50px;
                height: 50px;
                /* border-width: 5pt; */
            }
            ::after {
                width: 50px;
                height: 50px;
            }
        }
    }
`

const Card = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 200px;
    height: fit-content;
    box-sizing: border-box;
    h3 {
        font-size: 12px;
        font-family: system-ui;
        text-transform: uppercase;
        white-space: pre-wrap;
        line-height: 14px;
        font-weight: 300;
        letter-spacing: 0;
        max-width: 500px;
        transition: .3s cubic-bezier(0.25,0.8,0.25,1) 0s;
    }
    h1 {
        font-size: 5rem;
        font-weight: 700;
        font-family: system-ui;
        transition: .3s cubic-bezier(0.25,0.8,0.25,1) 0.1s;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: .3s cubic-bezier(0.25,0.8,0.25,1) 0.15s;
    }
    @media screen and (max-width: 1000px) {
        ::before {
            content: "";
            bottom: 0;
            right: 0;
            width: 15px;
            height: 15px;
            position: absolute;
            border-right: 1pt solid  #8f8f90;
            border-bottom: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        ::after {
            content: "";
            bottom: 0;
            left: 0;
            width: 15px;
            height: 15px;
            position: absolute;
            border-bottom: 1pt solid #8f8f90;
            border-left: 1pt solid #8f8f90;
            transition: .35s cubic-bezier(0.25,0.8,0.25,1);
        }
        :hover {
            ::before {
                width: 50px;
                height: 50px;
            }
            ::after {
                width: 50px;
                height: 50px;
            }
        }
    }
    @media screen and (max-width: 767px) {
        h1 {
            font-size: 3rem;
        }
    }
`