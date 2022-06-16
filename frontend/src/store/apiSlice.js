import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  tagTypes: ['Dogs'],
  endpoints: (builder) => ({
    getDogs: builder.query({
      query: () => '/dogs',
      providesTags: (result) => (result ? [...result.map(({ id }) => ({ type: 'Dogs', id })), { type: 'Dogs', id: 'LIST' }] : [{ type: 'Dogs', id: 'LIST' }]),
    }),
    getDog: builder.query({
      query: (dogId) => `/dogs/${dogId}`,
    }),
    createDog: builder.mutation({
      query: (dogObj) => ({
        url: '/dogs',
        method: 'POST',
        body: dogObj,
      }),
    }),
    updateDog: builder.mutation({
      query: (dog) => ({
        url: `dogs/${dog.id}`,
        method: 'PATCH',
        body: dog,
      }),
    }),
    deleteDog: builder.mutation({
      query: (dogId) => ({
        url: `dogs/${dogId}`,
        method: 'DELETE',
        invalidatesTags: ['Dogs'],
      }),
    }),
  }),
});

export const { useGetDogsQuery, useGetDogQuery, useCreateDogMutation, useUpdateDogMutation, useDeleteDogMutation } = apiSlice;
