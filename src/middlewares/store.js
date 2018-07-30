import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../state';
import epicMiddleware from './epics';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(epicMiddleware)
  );
}
