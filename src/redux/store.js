import {configureStore, combineReducers} from '@reduxjs/toolkit'

import toolkitSlice from './reducer'

export const rootReducer = combineReducers({film: toolkitSlice})
configureStore({
    reducer: rootReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
