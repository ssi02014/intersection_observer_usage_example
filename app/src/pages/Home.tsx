import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={"/image-lazy"}>이미지 LazyLoading</Link>
      </li>
      <li>
        <Link to={"/infinite-scorll"}>무한 스크롤</Link>
      </li>
    </ul>
  );
};

export default Home;
