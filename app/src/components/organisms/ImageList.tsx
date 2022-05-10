import React, { useCallback } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ImageResponse } from "../../interfaces/image";
import ImageItem from "../molecules/ImageItem";

interface Props {
  images: ImageResponse[];
  getNextPage: () => void;
}

const ImageList = ({ images, getNextPage }: Props) => {
  const observerElementRef = useIntersectionObserver(getNextPage);

  const isObserverElement = useCallback(
    (idx: number) => {
      return images.length > 8 && images.length - 2 === idx;
    },
    [images]
  );
  return (
    <>
      {images &&
        images.map((item, idx) => (
          <ImageItem
            key={item.id}
            item={item}
            ref={isObserverElement(idx) ? observerElementRef : null}
          />
        ))}
    </>
  );
};

export default ImageList;
