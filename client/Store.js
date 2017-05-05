import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, compose } from 'redux'
import {browserHistory} from 'react-router'
import rootReducer from './reducer'
import products from './data/products'

const defaultState = {Trolley: [], products: products};
const store =  createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;