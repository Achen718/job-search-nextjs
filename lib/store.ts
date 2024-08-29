'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filteredJobsSlice from './features/filteredJobs/filteredJobsSlice';
import recentSearchSlice from './features/recentSearches/recentSearchSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from './storage';
// import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  recentSearch: recentSearchSlice,
});

const persistConfig = {
  key: 'persist',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = () =>
  configureStore({
    reducer: {
      filteredJobs: filteredJobsSlice,
      recentSearch: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
// todos: Add persistor options to flush
export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
          },
        }),
    });

    store.__persistor = persistStore(store);
    return store;
  }
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
