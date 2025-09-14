import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './adsSlice';
import authReducer from './authSlice';
import languageReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ads: adsReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;