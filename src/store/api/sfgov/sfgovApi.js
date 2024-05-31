/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const sfgovBaseApi = createApi({
  reducerPath: 'sfgovBaseApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://data.sfgov.org/api/id/rqzj-sfat.json',
    prepareHeaders: (headers, { getState }) => {
      //todo: add auth token to headers if needed
    }
  }),

  tagTypes: ['BaseSfgov'],

  endpoints: () => ({})
})
