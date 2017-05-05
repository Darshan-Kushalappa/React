import { render } from 'react-dom'
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import { Provider } from 'react-redux'


import css from './styles/style.styl'

import App from './components/App'
import SingleProduct from './components/SingleProduct'
import ProductGrid from './components/ProductGrid'
import Store, {history} from './Store'
import ShopTrolley from './components/ShopTrolley'

const router = (
    <Provider store={Store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ProductGrid}></IndexRoute>
                <Route path="/view/:ProductId" component={SingleProduct}></Route>
                <Route path="/Trolley" component={ShopTrolley}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))