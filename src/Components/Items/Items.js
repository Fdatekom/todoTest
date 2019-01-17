import './Items.css'
import React, { Component } from 'react'
import ToDoItem from '..//ToDoItem/ToDoItem.js'

export default class Items extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const items = this.props.items
    console.log(items)
    return (
      <div>
        {items.map((item, idx) => (
          <ToDoItem
            text={item.text}
            id={item.id}
            isAchieved = {item.isAchieved}
            key={idx}
            onChange={this.props.onChange}
            onRemove={this.props.onRemove}
            onAchieved={this.props.onAchieved}
          />
        ))}
      </div>
    )
  }
}
