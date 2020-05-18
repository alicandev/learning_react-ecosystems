import { createStore, combineReducers } from 'redux';

const reducers = {};

//put reducers into a form that we can pass to `createStore`
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);