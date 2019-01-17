import React, { Component } from 'react'
import './App.css'
import Items from './Components/Items/Items.js'
import ItemsForm from './Components/ItemsForm/ItemsForm.js'

function updateArrayItem (array, action) {
  return array.map(item => {
    if (item.id !== action.id) {
      return item
    } else if (item.id === action.id) {
      return { text: action.text, id: action.id }
    }
  })
}

function removeArrayItem (array, id) {
  return array.filter(item => {
    return item.id !== id
  })
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  onRemove = id => {
    const { todos } = this.state
    const newText = removeArrayItem(todos, id)
    this.setState({
      todos: newText
    })
  }

  handleAdd = todo => {
    const { todos } = this.state

    this.setState({
      todos: todos.concat([todo])
    })
  }

  onChange = (lastText, id) => {
    const todos = this.state.todos
    const newTodo = updateArrayItem(todos, { id: id, text: lastText })
    this.setState({
      todos: newTodo
    })
  }

  render () {
    const { todos } = this.state
    return (
      <div>
        <ItemsForm onAdd={this.handleAdd} />
        <Items
          items={todos}
          onChange={this.onChange}
          onRemove={this.onRemove}
        />
      </div>
    )
  }
}

export default App
