import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

//put reducers into a form that we can pass to `createStore`
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);