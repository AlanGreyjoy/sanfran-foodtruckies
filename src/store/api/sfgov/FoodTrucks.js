import { sfgovBaseApi } from './sfgovApi'

export const foodTrucksApi = sfgovBaseApi.injectEndpoints({
  reducerPath: 'foodTrucksApi',

  endpoints: builder => ({
    // ** Query SFGOV API for food trucks
    getFoodTrucks: builder.query({
      query: ({ query }) => ({
        url: '',
        params: query
      })
    })
  })
})

export const { useGetFoodTrucksQuery } = foodTrucksApi
