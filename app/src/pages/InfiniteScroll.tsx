import React from "react";
import styled from "styled-components";
import InfiniteScrollTemplate from "../components/templates/InfiniteScrollTemplate";

const InfiniteScroll = () => {
  return (
    <>
      <Box>Intersection Observer 무한 스크롤 예제</Box>
      <InfiniteScrollTemplate />
    </>
  );
};

const Box = styled.div`
  width: 1000px;
  height: 1000px;
`;
export default InfiniteScroll;
