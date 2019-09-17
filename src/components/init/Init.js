import React from 'react'
import MainItem from '../items/MainItemsParent'
import Footer from '../footer/FooterMain'


export default class Init extends React.Component {

  constructor() {
    super();
    this.items = [];
    this.state = {
      cartItem: []
    } 
  }

  carSystem(data) {
    console.log("reached", data)
    let flag = 0;
    let m = []
    if (data.action != "add") {
      for (let i of this.items) {
        if ((i.product_id == data.item.product_id) && !flag) {
            flag++;
        } else {
          m.push(data.item);
        }
      }
      this.items = m;
    } else {
      this.items.push(data.item)
    }
    this.setState({cartItem: this.items})
  }

 render() {
   return (
     <div>
       <MainItem receiveDataCB={(data) => this.carSystem(data)} />
       <Footer cartSummary={this.state.cartItem}/>
     </div>
   )
 }
}