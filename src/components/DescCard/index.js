import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function DescCard({ project, cardRef }) {
  console.log("DescCard", cardRef);
  const [imgLoading, setImgLoading] = useState(true);
  const [img, setImg] = useState(null);

  useEffect(() => {
    if (project) {
      setImgLoading(true);
      axios.get(project.image, { responseType: "blob" }).then((res) => {
        setImgLoading(false);
        setImg(URL.createObjectURL(res.data));
      });
    }
  }, [project]);
  if (project) {
    const { title, description, image } = project;
    return (
      <CardWrapper ref={cardRef} style={{ width: !imgLoading ? '15vw' : "unset" }}>
        {imgLoading ? (
          <div style={{ padding: "1rem", display: "flex", flexDirection: "center", alignItems: "center" }}>
            <p>Loading...</p>
          </div>
        ) : (
          <>
            <ImageWrapper>
              <img src={img} alt="DescCard"/>
            </ImageWrapper>
            <DetailsWrapper>
              <div>
                <h1>{title}</h1>
                <IndDate>
                  <h6>{project.industry}</h6>
                  <h6>{project.year}</h6>
                </IndDate>
              </div>
              <div>
                <p>{description}</p>
              </div>
            </DetailsWrapper>
          </>
        )}
      </CardWrapper>
    );
  } else {
    return <div ref={cardRef} />;
  }
}

const CardWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  max-width: 15vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 4px rgba(255, 255, 255, 0.1);
  color: white;
  font-family: system-ui;
  overflow: hidden;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  div > img {
    width: 100%;
    height: auto;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
      mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  }
  div > div > p {
    font-size: 0.8rem;
  }
`;

const ImageWrapper = styled.div``;

const DetailsWrapper = styled.div`
  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div > h1 {
    font-size: 20px;
    font-weight: 700;
  }
  div > p {
    font-family: system-ui;
    font-size: 8px;
    line-height: 1rem;
  }
`;

const IndDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.5rem;
  h6 {
    color: #CED4DA;
    font-size: 8px;
    font-weight: 700;
  }
`