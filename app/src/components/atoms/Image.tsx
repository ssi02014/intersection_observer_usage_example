import React, { SyntheticEvent } from "react";
import NoImage from "../../assets/images/noImg.png";

interface props {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image = ({ src, alt, width, height }: props) => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = NoImage;
  };
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default Image;
