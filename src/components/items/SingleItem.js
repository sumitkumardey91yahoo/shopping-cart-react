import React from 'react';
import './style/style.css'

export default class SingleItem extends React.Component {
    componentWillMount() {
       // console.log("componentWillMount 1")
      }
      componentDidMount() {
        //console.log("componentDidMount 1")
      }
      addToCart() {
          this.props.receiveDataCB(this.props.number);
      }
    render() {
        return (
            <div className="cart-body row "> 
                <div className="col-4">
                    <img src={this.props.number.image_url} alt={this.props.number.name}></img>
                    <div>{this.props.number.offer}</div>
                    </div> 
                <div className="col-8">
                   <div className="item-brand">{this.props.number.brand}</div>
                    <div className="item-title">{this.props.number.name}</div>
                    {/* <div className="item-quntity">{this.props.number.name}</div> */}
                    <div className="item-price-mrp">MRP {this.props.number.mrp}</div>

                    <div className="item-price">Rs {this.props.number.price}</div>

                    <button type="button" onClick={() => this.addToCart()}>Add cart</button>
                 </div> 
            </div>
        )
        
    }
}