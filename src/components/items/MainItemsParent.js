import React from 'react';

import SingleItem from './SingleItem'
import Action from '../../services/actions'

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
       let dataAction = new Action();
       dataAction.actGetData().then((response) => {
        this.setState({ message: response });
       }, (error) => {

       })
      
      }
      componentDidMount() {
        //console.log("componentDidMount")
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