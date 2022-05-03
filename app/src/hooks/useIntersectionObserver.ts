import { MutableRefObject, useCallback, useRef } from "react";

type UseIntersectionObserver = (
  action: any,
  threshold?: number
) => [(node: HTMLElement) => void];

const useIntersectionObserver: UseIntersectionObserver = (
  action,
  threshold = 1
) => {
  const target = useRef() as MutableRefObject<IntersectionObserver>;

  const onIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      console.log(entry);
      if (entry.isIntersecting) {
        action();
      }
    },
    [action]
  );

  const lastElementRef = useCallback(
    (node: HTMLElement) => {
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

  return [lastElementRef];
};

export default useIntersectionObserver;
