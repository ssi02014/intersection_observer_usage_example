import React from "react";
import styled from "styled-components";
import { ImageResponse } from "../../interfaces/image";
import Image from "../atoms/Image";

interface Props {
  item: ImageResponse;
}
const ImageItem = ({ item }: Props) => {
  return (
    <ImageItemWrapper>
      <Image
        src={item.download_url}
        alt="이미지"
        width="300px"
        loading="lazy"
      />
      <p>{item.author}</p>
    </ImageItemWrapper>
  );
};

const ImageItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ImageItem;
