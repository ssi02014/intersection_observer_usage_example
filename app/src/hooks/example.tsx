import React, { useEffect, useState } from "react";

const Example = () => {
  const [itemList, setItemList] = useState([1, 2, 3, 4, 5]); // ItemList
  const [target, setTarget] = useState(); // target
  const [isLoding, setIsLoding] = useState(false); // isloding

  const onIntersect = async ([entry]: any, observer: any) => {
    if (entry.isIntersecting && !isLoding) {
      observer.unobserve(entry.target);
      setIsLoding(true);
      // 데이터를 가져오는 부분
      setIsLoding(false);
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: any;
    if (target) {
      // callback 함수, option
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target); // 타겟 엘리먼트 지정
    }
    return () => observer && observer.disconnect();
  }, [target]);
  return <div></div>;
};

export default Example;
