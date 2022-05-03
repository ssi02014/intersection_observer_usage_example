import React from "react";
import { ImageResponse } from "../../interfaces/image";
import ImageItem from "../molecules/ImageItem";

interface Props {
  images: ImageResponse[];
}

const ImageList = ({ images }: Props) => {
  return (
    <>
      {images && images.map((item) => <ImageItem key={item.id} item={item} />)}
    </>
  );
};

export default ImageList;
