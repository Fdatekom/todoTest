import React, { Component } from 'react'
import Items from '../Items/Items'

export default class TodoActiv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: ''
    }
  }
  onActiveAll= propertyName => event =>{
    const  onActive  = this.props.onActive;
    if (typeof onActive === 'function') {
        onActive(propertyName)
        
        this.setState({ active: propertyName})
      }
    }
  

  render () {
    return (
      <div>
        <button onClick={this.onActiveAll('all')}>All</button>
        <button onClick={this.onActiveAll('active')}>Active</button>
        <button onClick={this.onActiveAll('complited')}>Compited</button>
      </div>
    )
  }
}
