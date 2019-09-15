import React , { Component } from 'react'
import Cart from '../cartSystem/Cart'
import Checkout from '../checkout/CheckoutSystem'

import './style/style.css';

export default class FooterMain extends Component {

    render () {
     return (
         <div className="footer-main">
             <Cart finalData={this.props.cartSummary}/>
             <Checkout/>

         </div>
     )
    }
}