import axios, { AxiosInstance } from "axios";

const IMAGE_URL = "https://picsum.photos";

const customAxios: AxiosInstance = axios.create({
  baseURL: IMAGE_URL,
});

const requestAxios = async ({
  url = "",
  method = "",
  params = {},
  config = {},
}) => {
  try {
    const response = await customAxios({
      url,
      method,
      params,
      paramsSerializer(paramObj) {
        const params = new URLSearchParams();

        for (const key in paramObj) {
          if (paramObj[key] !== undefined) params.append(key, paramObj[key]);
        }
        return params.toString();
      },
      ...config,
    });

    return response.data;
  } catch (err: any) {
    console.log(err.response);
  }
};

export { requestAxios };
