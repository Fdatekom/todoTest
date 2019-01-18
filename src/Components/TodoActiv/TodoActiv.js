import React, { Component } from 'react'
import './TodoActiv.css'
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
      <div className='TodoActive'>
        <button onClick={this.onActiveAll('all')}>All</button>
        <button onClick={this.onActiveAll('active')}>Active</button>
        <button onClick={this.onActiveAll('complited')}>Compited</button> <br />
        <button onClick={this.props.onRemove}>Del All Complited</button>
      </div>
    )
  }
}
