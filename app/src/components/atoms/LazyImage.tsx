import React, { useEffect, useRef } from "react";

interface Props {
  src: string;
  alt: string;
}

const LazyImage = ({ src, alt }: Props) => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;

          if (target.dataset.src) {
            target.src = target.dataset.src;
          }
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {};
    const observer = new IntersectionObserver(callback, options);

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
  }, []);

  return (
    <div>
      <img data-src={src} alt={alt} ref={imgRef} />
    </div>
  );
};

export default LazyImage;
