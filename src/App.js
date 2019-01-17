import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items/Items.js';
import ItemsForm from './Components/ItemsForm/ItemsForm.js';

function updateArrayItem(array, action){
  return array.map((item) => {
    if (item.id !== action.id) {
      return item
    } else if(item.id === action.id) {
     return ({text: action.text, id: action.id}) }   
  })
};

function removeArrayItem(array, id){
  return array.filter((item)=>{
    return item.id !==id
  })

}

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      text: [
        ],
    }
  }
  
  onRemove=(  id )=>{
    const {text} =this.state;
    const newText=removeArrayItem(text, id )
    this.setState({
      text: newText
    })

    
  }

  handleSend=(todo)=>{
    const {text} = this.state;

    this.setState({
      text: text.concat([todo])
    })
  }

  onChange=(lastText, id)=>{
    const text=this.state.text;
    const newTodo= updateArrayItem(text, {id: id, text: lastText})
    this.setState({
      text: newTodo
    })
  }

  render() {
    const { text } = this.state;
    return (
      
      <div>
      <ItemsForm onSend={this.handleSend}/>
      <Items items={ text } onSend={this.hendleChangeSend} onChange={this.onChange} onRemove={this.onRemove}/>
      </div>
    );
  }
}

export default App;
