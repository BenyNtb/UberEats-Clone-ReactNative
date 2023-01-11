import { createStore, StoreEnhancer } from 'redux';
import reducer from './reducers/index';

export default function configureStore(initialState: StoreEnhancer<unknown, unknown> | undefined) {
    const store = createStore(reducer, initialState);
    return store;
  }


