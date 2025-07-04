import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const serverApi = import.meta.env.VITE_SERVER_API_URL;
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://level2-assignment-2-cyan.vercel.app/api",
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSingleBook: builder.query({
      query: (bookId) => `/books/${bookId}`,
      providesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: `/books`,
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["books"],
    }),
    updateBook: builder.mutation({
      query: ({ bookId, updatedData }) => ({
        url: `/books/${bookId}`,
        method: "PUT",
        body: updatedData,
      }),
      invalidatesTags: ["books"],
    }),
    getBorrows: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    createBorrow: builder.mutation({
      query: (borrowData) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useDeleteBookMutation,
  useCreateBookMutation,
  useGetSingleBookQuery,
  useUpdateBookMutation,
  useGetBorrowsQuery,
  useCreateBorrowMutation,
} = baseApi;
