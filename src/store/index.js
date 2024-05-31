// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
//todo: import your reducers here, if needed

// ** Base Api
import { sfgovBaseApi } from './api/sfgov/sfgovApi'

export const store = configureStore({
  reducer: {
    [sfgovBaseApi.reducerPath]: sfgovBaseApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(sfgovBaseApi.middleware)
})

export const rootState = store.getState
