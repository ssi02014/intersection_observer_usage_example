import React, { useCallback, useEffect, useState } from "react";
import ImageList from "../organisms/ImageList";
import { ImageResponse } from "../../interfaces/image";
import { requestAxios } from "../../utils/axios";
import styled from "styled-components";

const InfiniteScrollTemplate = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getImages = useCallback(async () => {
    const response = await requestAxios({
      url: "/v2/list",
      method: "GET",
      params: {
        page,
        limit: 10,
      },
    });
    setLoading(false);
    setImages([...images, ...response]);
  }, [images, page]);

  const getNextPage = useCallback(() => {
    setPage(page + 1);
    setLoading(true);
  }, [page]);

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <>
      <Banner>
        <h1>Intersection Observer 무한 스크롤 예제</h1>
      </Banner>
      <ImageList images={images} getNextPage={getNextPage} />
    </>
  );
};

const Banner = styled.section`
  width: 100%;
  padding: 300px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfiniteScrollTemplate;
