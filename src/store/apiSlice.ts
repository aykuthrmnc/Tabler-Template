import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "~/store";
import { logoutUserHandle } from "~/utils/storeHandle";

// apiSlice.injectEndpoints şeklinde parçalı kısımlara ayrılabilir.
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.user?.[import.meta.env.VITE_AUTH_TOKEN_NAME];

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },

    validateStatus: (response: any) => {
      switch (response?.status) {
        case 401:
          logoutUserHandle();
          return;
      }
      return response?.ok;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    //! AUTH
    // Giriş yapma isteği
    login: builder.mutation({
      query: (value: { username: string; password: string }) => ({
        url: "/login",
        method: "POST",
        body: value,
      }),
    }),
    // Kayıt olma isteği
    register: builder.mutation({
      query: (value: { name: string; surname: string; username: string; email: string; password: string }) => ({
        url: "/register",
        method: "POST",
        body: value,
      }),
    }),
    // Şifremi unuttum isteği
    forgotPassword: builder.mutation({
      query: (value: { email: string }) => ({
        url: "/forgot-password",
        method: "POST",
        body: value,
      }),
    }),
    // Şifre sıfırlama isteği
    resetPassword: builder.mutation({
      query: (value: { email: string; password: string; repassword: string }) => ({
        url: "/reset-password",
        method: "PUT",
        body: value,
      }),
    }),
  }),
});

export const {
  //! AUTH
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = apiSlice;
