import { combineReducers }  from 'redux'
import { routerReducer } from 'react-router-redux'

import TrolleyReducer from './TrolleyReducer'
import ProductsReducer from './ProductsReducers'

export default combineReducers({Trolley: TrolleyReducer, products: ProductsReducer,routing: routerReducer});