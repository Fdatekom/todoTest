import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items/Items.js';
import ItemsForm from './Components/ItemsForm/ItemsForm.js';
import ToDoItem from './Components/ToDoItem/ToDoItem.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      text: [],
      newText: 'asd'
    }
  }

  handleSend=(todo)=>{
    const {text} = this.state;

    this.setState({
      text: text.concat([todo])
    })
  }


  render() {
    const { text} = this.state;
    return (
      
      <div>
      <ItemsForm onSend={this.handleSend}/>
      <ToDoItem text={this.state.newText} />
      <Items items={ text } onSend={this.hendleChangeSend}/>
      </div>
    );
  }
}

export default App;
