import React from 'react'
import ShopProduct from './ShopProduct'

export default class SingleProduct extends React.Component {
    render() {
        const productId = this.props.params.ProductId;
        const productIndex = this.props.products.findIndex((product) => product.id == productId);
        
        let bIsProductInTrolley = false;
        for(let trolleyIndex = 0; trolleyIndex < this.props.Trolley.length; trolleyIndex++){
            if (this.props.Trolley[trolleyIndex] === productId){
                bIsProductInTrolley = true;
                break;
            }
        }
        let isProductAvailable = this.props.products[productIndex].availability;
        return(
            <div> 
                <div style={{"height": "500px", "width":"500px", "position": "relative","left":"35%"}}>
                    <ShopProduct {...this.props} product={this.props.products[productIndex]} showDetails={true}/>
                </div>
                <div style={{"position": "relative", "marginLeft": "15px","left":"35%"}}>
                    {!isProductAvailable ? <h1>Product not available.</h1> : !bIsProductInTrolley ? 
                    <button className="btn-success" onClick={this.props.addProductToTrolley.bind(null, productId)}>Add to Trolley</button> :
                    <button>Added to Trolley</button>}
                </div>
            </div>
        )
    }
} 