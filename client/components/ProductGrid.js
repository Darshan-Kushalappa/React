import React from 'react'
import ShopProduct from './ShopProduct'

export default class ProductGrid extends React.Component { 

    render() {
        return(
            <div>
                {this.props.products.map((product, i) => <div  key={i} style={{"height": "300px", "width":"300px", "position": "relative", "display": "inline-block"}}><ShopProduct {...this.props} product={product}/></div>)}
            </div>
        )
    }
} 