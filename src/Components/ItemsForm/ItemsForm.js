import './ItemsForm.css'
import React, {Component} from 'react';

let id = 1;

export default class ItemsForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            id: "todoItem1",
        }
    };

    hendlerPropertyChange=(event)=> {
        this.setState({
            text: event.target.value 
        })
    }

    handleSendClick = (event) => {
        const { onSend } = this.props;
        
            if(typeof onSend === 'function' && this.state.text.length >=1) {

                onSend(this.state);
                    id++;
                    const idName="todoItem"+id
                    

                this.setState({ text: '', id:idName});
                }
                
        
        
        event.preventDefault();
      }
    ;
    render(){
        const {text} = this.state;
        return (
            <form>
                Text: <input type='text' onChange={this.hendlerPropertyChange} value={text} placeholder='What needs to be done?' autoFocus /><br/>
                <button onClick={this.handleSendClick}>Send</button>
            </form>
        );
    }
    
}