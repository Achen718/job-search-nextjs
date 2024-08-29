import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filteredJobsSlice } from './features/filteredJobs/filteredJobsSlice';
import recentSearchSlice from './features/recentSearches/recentSearchSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persist',
  storage,
};

const rootReducer = combineReducers({
  user: recentSearchSlice,
});

const makeConfiguredStore = () => {
  configureStore({
    reducer: {
      filteredJobs: filteredJobsSlice.reducer,
      recentSearch: rootReducer,
    },
  });
};

export const makeStore = () => {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return makeConfiguredStore();
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
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
