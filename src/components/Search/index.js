import { useState, useEffect } from "react";
import styled from "styled-components";
import searchIcon from "../../images/searchIcon.svg";

export default function Search({ winkconfig, querychange, autofocus }) {
    const [query, setQuery] = useState("");
    const [searchParam] = useState(["title"])
    console.log(autofocus)
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(query.toLowerCase()) > -1
                );
            });
        });
    }
    
    useEffect(() => {
        querychange(search(winkconfig))
    }, [query])
    // const resultObj = search("string 1", array);
    return (
        <Wrapper>
            <InputWrapper>
                <InputBox label="Search" style={{ backgroundImage: `url(${searchIcon})` }} placeholder="Search..." autocomplete="off" autocorrect="off" spellCheck="false" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus={autofocus} />
            </InputWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    display: block;
    ::before {
        content: "";
        top: 0;
        right: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-top: 1pt solid  #8f8f90;
        border-right: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    ::after {
        content: "";
        top: 0;
        left: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-top: 1pt solid #8f8f90;
        border-left: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    :hover {
        ::before {
            width: 15px;
            height: 15px;
        }
        ::after {
            width: 15px;
            height: 15px;
        }
    }
`

const InputWrapper = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
    display: block;
    ::before {
        content: "";
        bottom: 0;
        right: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-right: 1pt solid  #8f8f90;
        border-bottom: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    ::after {
        content: "";
        bottom: 0;
        left: 0;
        width: 5px;
        height: 5px;
        position: absolute;
        border-bottom: 1pt solid #8f8f90;
        border-left: 1pt solid #8f8f90;
        transition: .35s cubic-bezier(0.25,0.8,0.25,1);
    }
    :hover {
        ::before {
            width: 15px;
            height: 15px;
        }
        ::after {
            width: 15px;
            height: 15px;
        }
    }
`

const InputBox = styled.input`
    position: relative;
    box-sizing:border-box;
    padding: 25px 50px;
    height: 0;
    width: 100%;
    border: none;
    color: #fff;
    outline: none;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 15px 50%;
    background-color: transparent;
    writing-mode: horizontal-tb;
`