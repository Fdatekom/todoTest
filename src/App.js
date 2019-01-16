import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items/Items.js';
import ItemsForm from './Components/ItemsForm/ItemsForm.js';

function updateArrayItem(array, action){
  return array.map((item) => {
    if (item.id !== action.id) {
      return item
    } else if(item.id == action.id) {
     return ({text: action.text, id: action.id}) }   
  })
};


class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      text: [
        ],
    }
  }
  


  handleSend=(todo)=>{
    const {text} = this.state;

    this.setState({
      text: text.concat([todo])
    })
  }

  onChange=(lastText, id)=>{
    const text=this.state.text;
    console.log(text)
    const newTodo= updateArrayItem(text, {id: id, text: lastText})
    console.log(updateArrayItem(text, {id: id, text: lastText}))
    this.setState({
      text: newTodo
    })
  }

  render() {
    const { text } = this.state;
    return (
      
      <div>
      <ItemsForm onSend={this.handleSend}/>
      <Items items={ text } onSend={this.hendleChangeSend} onChange={this.onChange}/>
      </div>
    );
  }
}

export default App;
