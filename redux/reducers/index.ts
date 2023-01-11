import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

let reducers = combineReducers({
    cartReducer: cartReducer.cartReducer,
});

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
};

export default rootReducer;