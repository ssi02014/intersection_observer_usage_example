import React, { useCallback, useMemo } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ImageResponse } from "../../interfaces/image";
import ImageItem from "../molecules/ImageItem";

interface Props {
  images: ImageResponse[];
  getNextPage: () => void;
}

const ImageList = ({ images, getNextPage }: Props) => {
  const [observer] = useIntersectionObserver(getNextPage);
  const lastElementRef = useMemo(() => observer, [images]);

  const isLastElement = useCallback(
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
            ref={isLastElement(idx) ? lastElementRef : null}
          />
        ))}
    </>
  );
};

export default ImageList;
