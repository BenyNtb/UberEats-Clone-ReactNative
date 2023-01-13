// import { createStore, StoreEnhancer } from 'redux';
import { StoreEnhancer, legacy_createStore as createStore} from 'redux'
import reducer from './reducers/index';

export default function configureStore(initialState: StoreEnhancer<unknown, unknown> | undefined) {
    const store = createStore(reducer, initialState);
    return store;
  }


