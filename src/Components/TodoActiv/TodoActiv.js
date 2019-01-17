import React, { Component } from 'react'
import Items from '../Items/Items'

export default class TodoActiv extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 'todos'
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
      const todos =this.props.items
      const activTodo = this.props.itemsActive
      const complitedTodo = this.props.itemsCompleted
      console.log(todos)
    return (
      <div>
        {this.state.active === 'todos' ? (
          <Items
            items={todos}
            onChange={this.props.onChange}
            onRemove={this.props.onRemove}
            onAchieved={this.props.onAchieved}
            

          />
        ) : this.state.active === 'activTodo' ? (
          <Items
            items={ activTodo}
            onChange={this.props.onChange}
            onRemove={this.props.onRemove}
            onAchieved={this.props.onAchieved}
            

          />
        ) : this.state.active === 'complitedTodo' ? (
          <Items
            items={complitedTodo}
            onChange={this.props.onChange}
            onRemove={this.props.onRemove}
            onAchieved={this.props.onAchieved}
            
          />
        ) : (
          <div>Error</div>
        )}
        <button onClick={this.onActiveAll('todos')}>All</button>
        <button onClick={this.onActiveAll('activTodo')}>Active</button>
        <button onClick={this.onActiveAll('complitedTodo')}>Compited</button>
      </div>
    )
  }
}
