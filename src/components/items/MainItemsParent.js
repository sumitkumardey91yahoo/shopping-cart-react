import React from 'react';

import SingleItem from './SingleItem'

export default class MainComponentItems extends React.Component {
    constructor() {
        super();
        this.data = ''
        this.state = {
          message: []
        };
      }
      componentWillMount() {
       // console.log("componentWillMount")
        this.fetchService();
      }
      componentDidMount() {
        //console.log("componentDidMount")
      }
      fetchService() {
        fetch('/database.json').then((res) => {
          return res.json();
        }).then((success) => {
          this.data = success.result.products;
          this.setState({ message: this.data });
         // console.log(this.state.message)
        })
      }
      
    
        render() {
          return (  
             <div>
               {
                
                 this.state.message.map((single, index) => {
                  return <SingleItem {...this.props} number={single} key={index}/>
                 })
               }
                 
              </div>
            )
        }
}