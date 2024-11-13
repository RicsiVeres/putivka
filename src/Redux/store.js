import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ticketsReducer from '../Redux/ticketsSlice.js';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, ticketsReducer);

const store = configureStore({
    reducer: {
        tickets: persistedReducer,
    },
});

export const persistor = persistStore(store);
export default store;
