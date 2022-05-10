import { MutableRefObject, useCallback, useRef } from "react";

type UseIntersectionObserver = (
  action: any,
  threshold?: number
) => (node: HTMLElement) => void;

const useIntersectionObserver: UseIntersectionObserver = (
  action,
  threshold = 1
) => {
  const target = useRef() as MutableRefObject<IntersectionObserver>;

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        action();
      }
    },
    [action]
  );

  const observerElementRef = useCallback(
    (node: HTMLElement) => {
      // ref 초기화
      if (target.current) {
        target.current.disconnect();
      }
      target.current = new IntersectionObserver(onIntersect, {
        threshold,
      });

      if (node) target.current.observe(node);
    },
    [onIntersect, threshold]
  );

  return observerElementRef;
};

export default useIntersectionObserver;
