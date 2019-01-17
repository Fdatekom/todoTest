import React, { Component } from 'react'

export default class ToDoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEdit: false,
      newText: '',
      isAchieved: true,
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
    if (this.state.isAchieved) {
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
    }
  }

  onClickRemove = (event, id) => {
    const { onRemove } = this.props
    if (typeof onRemove === 'function') {
      onRemove(id)
    }
  }

  checkboxChange = event => {
    if (this.state.isAchieved) {
      this.setState({
        isAchieved: !this.state.isAchieved,
        className: 'achived'
      })
    } else {
      this.setState({
        isAchieved: !this.state.isAchieved,
        className: 'notAchived'
      })
    }
  }

  render () {
    const { text, id, idx } = this.props
    console.log(text)
    const { newText } = this.state
    return (
      <div>
        {this.state.isEdit ? (
          <input
            id={id}
            key={idx}
            onKeyDown={this.onKeyDown}
            value={newText}
            onChange={this.hendlerPropertyChange}
            autoFocus
          />
        ) : (
          <div
            id={id}
            key={idx}
            onDoubleClick={this.onDoubleClick}
            className={this.state.className}
          >
            <input
              type='checkbox'
              className='notAchieved'
              onChange={this.checkboxChange}
            />{' '}
            {text}{' '}
            <button onClick={() => this.props.onRemove(id)}>Delete</button>
          </div>
        )}
      </div>
    )
  }
}
