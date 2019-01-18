import React, { Component } from 'react'
import './ToDoItem.css'

export default class ToDoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit: false,
      newText: '',
      className: 'notAchived'
    }
  }

  hendlerPropertyChange = event => {
    this.setState({
      newText: event.target.value
    })
  }

  onDoubleClick = event => {
    const { isEdit } = this.state.isEdit
    const { text } = this.props
    console.log(this.state.isEdit)
    if (!this.props.isAchieved) {
      this.setState({
        isEdit: !isEdit,
        newText: text
      })
    }
  }

  onKeyDown = event => {
    const onChange = this.props.onChange

    if (
      event.keyCode === 13 &&
      typeof onChange === 'function' &&
      this.state.newText.length >= 1
    ) {
      const { isEdit } = this.state
      this.setState({
        isEdit: !isEdit
      })
      onChange(this.state.newText, event.target.id)
      this.setState({ newText: '' })
    } else {
        
    }
  } 

  onClickRemove = (event, id) => {
    const { onRemove } = this.props
    if (typeof onRemove === 'function') {
      onRemove(id)
    }
  }

  checkboxChange = event => {
    const onAchieved = this.props.onAchieved
    if(typeof onAchieved === 'function'){
        onAchieved(this.props.id, this.props.isAchieved)
       
    }
  }

  render () {
    const { text, id, idx } = this.props
    const { newText } = this.state
    console.log(this.props.isAchieved)
    return (
      <div className="todo_Items">
        {this.state.isEdit ? (
          <input
            id={id}
            key={idx}
            onKeyDown={this.onKeyDown}
            value={newText}
            onChange={this.hendlerPropertyChange}
            autoFocus
          />
        ) :  (
          <div
            id={id}
            key={idx}
            onDoubleClick={this.onDoubleClick}
            className={this.props.isAchieved? ('achived'):('notAchived')}
          >
            <input
              type='checkbox'
              className='checkbox_item'
              onChange={this.checkboxChange}
              checked={this.props.isAchieved}
            />{' '}
            {text}{' '}
            <button onClick={() => this.props.onRemove(id)}>Del</button>
          </div>
        ) }
      </div>
    )
  }
}
