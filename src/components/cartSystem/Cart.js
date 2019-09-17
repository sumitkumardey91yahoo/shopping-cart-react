import React , { Component } from 'react'

export default class Cart extends Component {
    constructor() {
        super()
        this.total = 0
        this.state = {
            qty: 0,
            total: 0
        }
    }
    componentWillReceiveProps(cartData) {
        console.log(cartData)
        let obj = {}
        obj.total = 0
        obj.qty = 0;
        this.total= 0;
        (cartData.finalData).map(item => {
            this.total += item.price;
            return item;
        });
      
        obj.total = this.total
        obj.qty = (cartData.finalData).length;
        this.setState(obj)
    }

    render () {
     return (
         <div className="cart-main">
             <div>Qty {this.state.qty} </div>
             <div>Total {this.state.total} </div>
         </div>
     )
    }
}