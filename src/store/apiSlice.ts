import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

//! BASE QUERY WITH AXIOS
const axiosBaseQuery =
  (
    { baseURL }: { baseURL: string } = { baseURL: "" },
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
      responseType?: AxiosRequestConfig["responseType"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers, responseType }) => {
    // const token = store.getState().auth[store.getState().auth.type]?.[import.meta.env.VITE_AUTH_TOKEN_NAME];

    try {
      const result = await axios({
        baseURL,
        url,
        method,
        data,
        params,
        headers,
        // headers: {
        //   ...headers,
        //   Authorization: token ? `Bearer ${token}` : undefined,
        // },
        responseType,
        // paramsSerializer: {
        //   indexes: null,
        // },
      });

      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err?.response?.status,
          data: err?.response?.status
            ? err?.response?.data || err?.message
            : {
                message: "Bir ağ hatası oluştu.",
              },
        },
      };
    }
  };
//! BASE QUERY WITH AXIOS END

// apiSlice.injectEndpoints şeklinde parçalı kısımlara ayrılabilir.
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseURL: import.meta.env.VITE_BASE_URL,
  }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_BASE_URL,
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = (getState() as RootState).auth.user?.[import.meta.env.VITE_AUTH_TOKEN_NAME];

  //     if (token) {
  //       headers.set("Authorization", `Bearer ${token}`);
  //     }
  //     return headers;
  //   },

  //   validateStatus: (response: any) => {
  //     switch (response?.status) {
  //       case 401:
  //         logoutUserHandle();
  //         return;
  //     }
  //     return response?.ok;
  //   },
  // }),
  tagTypes: [],
  endpoints: (builder) => ({
    //! AUTH
    login: builder.mutation({
      query: (value: { email: string; password: string }) => ({
        url: `/auth/login`,
        method: "POST",
        data: value,
      }),
    }),
    register: builder.mutation({
      query: (value: { name: string; email: string; password: string }) => ({
        url: `/auth/register`,
        method: "POST",
        data: value,
      }),
    }),
  }),
});

export const {
  //! AUTH
  useLoginMutation,
  useRegisterMutation,
} = apiSlice;
