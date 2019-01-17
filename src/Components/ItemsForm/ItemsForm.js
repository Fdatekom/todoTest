import './ItemsForm.css'
import React, { Component } from 'react'
const nanoid = require('nanoid')

export default class ItemsForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      id: 'todo' + nanoid(),
      isAchieved: false
    }
  }

  hendlerPropertyChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleAddClick = event => {
    const { onAdd } = this.props

    if (typeof onAdd === 'function' && this.state.text.length >= 1) {
      onAdd(this.state)
      const idName = 'todo' + nanoid()

      this.setState({ text: '', id: idName })
    }
    event.preventDefault()
  }

  render () {
    const { text } = this.state
    return (
      <form>
        Text:{' '}
        <input
          type='text'
          onChange={this.hendlerPropertyChange}
          value={text}
          placeholder='What needs to be done?'
          autoFocus
        />
        <br />
        <button onClick={this.handleAddClick}>Send</button>
      </form>
    )
  }
}
