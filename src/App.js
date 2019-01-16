import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items/Items.js';
import ItemsForm from './Components/ItemsForm/ItemsForm.js';

function сhangeElement(array, action){
  return array.map((item, index) => {
    if (index !== action.index) {
      return item
    } else {
     return "Поменялось" }

    
  })
};


class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      text: [],
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
    const newText= сhangeElement(text, {index: id, text: lastText})
    console.log(сhangeElement(text, {index: id, text: lastText}))
    this.setState({
      text: newText
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
