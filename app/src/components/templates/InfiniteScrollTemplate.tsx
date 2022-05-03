import React, { useCallback, useEffect, useState } from "react";
import ImageList from "../organisms/ImageList";
import { ImageResponse } from "../../interfaces/image";
import { requestAxios } from "../../utils/axios";

const InfiniteScrollTemplate = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [page, setPage] = useState(1);

  const getImages = useCallback(async () => {
    const response = await requestAxios({
      url: "/v2/list",
      method: "GET",
      params: {
        page,
        limit: 10,
      },
    });

    setImages([...images, ...response]);
  }, [images, page]);

  const getNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  useEffect(() => {
    getImages();
  }, [page]);

  return (
    <>
      <ImageList images={images} getNextPage={getNextPage} />
    </>
  );
};

export default InfiniteScrollTemplate;
