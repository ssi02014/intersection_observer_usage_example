import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ImageLazy from "./ImageLazy";
import InfiniteScroll from "./InfiniteScroll";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infinite-scorll" element={<InfiniteScroll />} />
      <Route path="/image-lazy" element={<ImageLazy />} />
    </Routes>
  );
};

export default Router;
