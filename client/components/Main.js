import React from 'react'
import Store from '../Store'

import { Link } from 'react-router'

export default class ShoppingApp extends React.Component { 

    render() {
        return(
            <div>
                <div className="heading">
                    <Link to="/">Daily Shopping Store</Link>
                </div>
                <h1 style={{'textAlign':'right'}}>
                    <Link to="/Trolley">My Trolley: {this.props.Trolley.length ? this.props.Trolley.length : "0"}</Link>
                </h1>
                <div>{React.cloneElement(this.props.children, this.props)}</div>
            </div>

        )
    }
} 