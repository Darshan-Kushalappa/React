import React from 'react'
import { Link } from 'react-router'

const strProductAvailableMsg = 'Product is available'
const strProductUnAvailableMsg = 'We are running short on this product.'
export default class ProductInTrolley extends React.Component { 
    shouldComponentUpdate(nextProps, nextState){
        if (this.props.product !== nextProps.product){
            return true;
        }
        return false;
    }
    render() {
        return(
            <div>
                <div style={{"position": "absolute", "left": "5%", "top": "5%", "width": "30%", "height": "100%"}}>
                    <img width="45%" height="auto" src={this.props.product.display_src} alt={this.props.product.title} />
                </div>
                <div style={{"fontSize": "3em", "position": "absolute", "left": "25%", "top": "5%", "width": "30%", "height": "100%"}}>
                    <div>
                        {this.props.product.title}<br/>
                        Price: {this.props.product.price}<br/><br/>
                        <button style={{"fontSize": "20px"}} className="btn btn-danger" onClick={this.props.removeProductFromTrolley.bind(null, this.props.product.id)}>Remove from Trolley</button>
                    </div>
                </div>   
            </div>
        )
    }
} 