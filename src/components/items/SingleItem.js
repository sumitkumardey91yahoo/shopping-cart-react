import React from 'react';
import './style/style.css'

export default class SingleItem extends React.Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    componentWillMount() {
       // console.log("componentWillMount 1")
      }
      componentDidMount() {
        //console.log("componentDidMount 1")
      }
      addToCart(data) {
          console.log(data)
          let obj = {};
          let statusData = {};
            
          if (data === 'add') {
            obj.counter = this.state.counter  + 1;
          } else {
            if (this.state.counter == 0) return;
            obj.counter = this.state.counter - 1;
          }

          console.log(obj)
          this.setState(obj)
          statusData.item = this.props.number
          statusData.action = data
          this.props.receiveDataCB(statusData);
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
                    <div className="item-quntity">{this.props.number.unit}</div>
                    <div className="item-price-mrp">MRP {this.props.number.mrp}</div>

                    <div className="item-price">Rs {this.props.number.price}</div>
                    <div style={{display: 'flex'}}>
                        <button type="button" onClick={() => this.addToCart("add")}>Add cart</button>
                         <div style={{display: 'flex', 'margin-left': '32px', 'margin-top': '2px'}}>
                             <div>
                                <button type="button" className="plus-minus" onClick={() => this.addToCart("add")}>+</button>
                             </div>
                              <div className="item-quantity">
                                  {this.state.counter}
                              </div>
                             <div>
                                 <button type="button" className="plus-minus"  onClick={() => this.addToCart("sub")}>-</button>                                
                             </div>
                         </div>
                    </div>
                 </div> 
            </div>
        )
        
    }
}