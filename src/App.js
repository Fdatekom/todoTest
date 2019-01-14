import React, { Component } from 'react';
import './App.css';
import Items from './Components/Items/Items.js';
import ItemsForm from './Components/ItemsForm/ItemsForm.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state= {
      text: [],
      newText: '',
      value: 'asd'
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

      <Items items={ text } onSend={this.hendleChangeSend}/>
      </div>
    );
  }
}

export default App;
