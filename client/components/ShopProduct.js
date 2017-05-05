import React from 'react'
import { Link } from 'react-router'

const strProductAvailableMsg = 'Product is available'
const strProductUnAvailableMsg = 'We are running short on this product.'
export default class ShopProduct extends React.Component { 

    render() {
        return(
            <div>
                <div style={{'position': 'absolute', "top": "0%", "left": "5%","height": "75%", "width": "90%"}}>
                    <Link to={`/view/${this.props.product.id}`}>
                        <img height="100%" width="auto" src={this.props.product.display_src} alt={this.props.product.title} />
                    </Link>
                </div>
                <div style={{'position': 'absolute', "left": "5%","top": "75%", "height": "25%", "fontSize": "2em"}}>
                    {this.props.product.title}
                    {this.props.showDetails? <div>Availability: {this.props.product.availability ? strProductAvailableMsg : strProductUnAvailableMsg}<br/>
                    Price: {this.props.product.price}</div>: null}
                </div>
            </div>
        )
    }
} 