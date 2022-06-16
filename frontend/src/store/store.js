import { configureStore } from '@reduxjs/toolkit';
// import dogSlice from '@/store/slices/dogSlice';

import { apiSlice } from './apiSlice';

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
