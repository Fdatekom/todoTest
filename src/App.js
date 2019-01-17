import React, { Component } from 'react'
import './App.css'
import ItemsForm from './Components/ItemsForm/ItemsForm.js'
import TodoActive from './Components/TodoActiv/TodoActiv.js'

function updateArrayItem (array, action) {
  return array.map(item => {
    if (item.id !== action.id) {
      return item
    } else if (item.id === action.id) {
      return {text: action.text, id: item.id,  isAchived: item.isAchived}
    }
  })
}

function removeArrayItem (array, id) {
  return array.filter(item => {
    return item.id !== id
  })
}
function achievedArrayItem(array, action ){
  return array.map(item=>{
    if(item.id !== action.id){
      return item 
    } else if(item.id===action.id){
      return {text: item.text, id: item.id,  isAchieved: !action.isAchieved}
    }
  })
}

function activeArrayTodo(array, propertyName) {
  return array.filter(item=>{
    if(propertyName ===  'todos'){
      return item
    } else if (propertyName === 'activTodo') {
      return item.isAchieved === false
    } else if (propertyName === 'complitedTodo') {
      return item.isAchieved !== false
    } else {
      console.log(propertyName)
    }
  
  })
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      activTodo: [],
      complitedTodo: [],
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
    console.log(this.state.todos)
  }

  onAchieved=(id, isAchieved)=> {
    const todos = this.state.todos
    const newTodo = achievedArrayItem(todos, {id: id, isAchieved: isAchieved})
    console.log(newTodo)
    this.setState({
      todos: newTodo
    })
  }
  
  onActive = propertyName => {
    const todos = this.state.todos;
    const newTodo = activeArrayTodo(todos, propertyName)
    this.setState({
      [propertyName]: newTodo
    })
    console.log(newTodo)
    console.log(this.state)
  }

  render () {
    const { todos, activTodo, complitedTodo } = this.state
    return (
      <div>
        <ItemsForm onAdd={this.handleAdd} />
        {/* <Items
          items={todos}
          onChange={this.onChange}
          onRemove={this.onRemove}
          onAchieved={this.onAchived}
        /> */}
        <TodoActive 
          items={todos}
          itemsActive={activTodo}
          itemsCompleted={complitedTodo}
          onChange={this.onChange}
          onRemove={this.onRemove}
          onAchieved={this.onAchieved}
          onActive={this.onActive}
        />
      </div>
    )
  }
}

export default App
