import React from "react";
import { Routes, Route } from "react-router-dom";
import InfiniteScroll from "./InfiniteScroll";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<InfiniteScroll />} />
    </Routes>
  );
};

export default Router;
