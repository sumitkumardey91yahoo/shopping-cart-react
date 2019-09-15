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

  carSystem(item) {
    console.log("reached", item)
    this.items.push(item)
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