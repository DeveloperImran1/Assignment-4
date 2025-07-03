import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
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
