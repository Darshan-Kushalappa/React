import React from 'react'

import ProductInTrolley from './ProductInTrolley'

export default class ShopTrolley extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        if (this.props.Trolley !== nextProps.Trolley){
            return true;
        } else if (this.props.products !== nextProps.products){
            return true;
        }
        return false;
    }
    render(){
        let trolleyProducts = this.props.Trolley;
        let renderedComponent = [];
        if (trolleyProducts.length > 0){
            this.props.products.map(
                (product, index) => {
                    for (let trolleyIndex = 0; trolleyIndex < trolleyProducts.length; trolleyIndex++)
                    {
                        if (product.id === trolleyProducts[trolleyIndex]){
                            renderedComponent.push(<div key={index} style={{"position": "relative", "height": "250px", "width": "100%"}}>
                                <ProductInTrolley {...this.props} product={product} showDetails={true}/>
                                </div>
                            );
                        }
                    }
                }
            )
        }
        if (renderedComponent.length === 0){

        }
        return(
            <div>
                {renderedComponent.length ? renderedComponent: <div style={{"margin": "10px", "fontSize": "5em", "textAlign":"center"}}>Your Trolley Is Empty.</div>}
            </div>
        )
    }
}