import React, { Component } from 'react'
import './App.css'
import ItemsForm from './Components/ItemsForm/ItemsForm.js'
import TodoActive from './Components/TodoActiv/TodoActiv.js'
import Items from './Components/Items/Items';

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


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      todos: [],
      active: 'all'
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

  onAchieved=(id, isAchieved)=> {
    const todos = this.state.todos
    const newTodo = achievedArrayItem(todos, {id: id, isAchieved: isAchieved})
    this.setState({
      todos: newTodo
    })
  }
  
  onActive = propertyName => {
    this.setState({
      active: propertyName
    })
    console.log(this.state.active)
  }

  render () {
    const { todos } = this.state
    console.log(this.state)
    return (
      <div>
        <ItemsForm onAdd={this.handleAdd} />
         <Items
          items={todos.filter((item) => {
            if(this.state.active === 'all'){
              return item
            } else if(this.state.active === 'active' && item.isAchieved===false){
              return item
            } else if(this.state.active === 'complited' && item.isAchieved === true){
              return item
            }
          })}
          onChange={this.onChange}
          onRemove={this.onRemove}
          onAchieved={this.onAchieved}
        />
        <TodoActive onActive={this.onActive} /> 
      </div>
    )
  }
}

export default App
