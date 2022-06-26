import React from "react";
import styled from "styled-components";
import ImageCat from "../assets/images/cat.jpg";
import ImageCheetah from "../assets/images/cheetah.jpg";
import ImageTree from "../assets/images/tree.jpg";
import LazyImage from "../components/atoms/LazyImage";

const ImageLazy = () => {
  return (
    <div>
      <Section1 bg="red" />
      <Section1 bg="blue" />
      <Section1>
        <LazyImage src={ImageCat} alt="1" />
        <LazyImage src={ImageTree} alt="1" />
        <LazyImage src={ImageCheetah} alt="1" />
      </Section1>
    </div>
  );
};

const Section1 = styled.div<{ bg?: string }>`
  width: 100%;
  height: 500px;
  background-color: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  img {
    width: 400px;
  }
`;

export default ImageLazy;
