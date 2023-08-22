import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from '../slice/AuthSlice'
import JobArrSlice from "../slice/JobArrSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist:['job']
}

const rootReducer = combineReducers({auth: AuthSlice, job: JobArrSlice})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

const persistor = persistStore(store)

export {persistor}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch