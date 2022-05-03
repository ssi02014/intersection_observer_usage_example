import React, { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { ImageResponse } from "../../interfaces/image";
import Image from "../atoms/Image";

interface Props {
  item: ImageResponse;
}
const ImageItem = forwardRef(({ item }: Props, ref: ForwardedRef<any>) => {
  return (
    <ImageItemWrapper ref={ref}>
      <Image src={item.download_url} alt="이미지" width="300px" />
      <p>{item.author}</p>
    </ImageItemWrapper>
  );
});

const ImageItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default ImageItem;
