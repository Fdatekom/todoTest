import './ItemsForm.css'
import React, {Component} from 'react';

export default class ItemsForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
            id: '',

        }
    };

    hendlerPropertyChange = (propetyName)=> (event) =>{
        this.setState({
            [propetyName]: event.target.value 
        })

    }

    handleSendClick = (propetyName)=>(event) => {
        const { onSend } = this.props;
        
            if(typeof onSend === 'function' && this.state.text.length >=1) {
                onSend(this.state);
    
                this.setState({ text: ''});
                }
        
        
        event.preventDefault();
      }
    
    render(){
        const {text} = this.state;
        let id=1;

        return (
            <form>
                Text: <input type='text' onChange={this.hendlerPropertyChange('text')} value={text} placeholder='What needs to be done?' autoFocus /><br/>
                <button onClick={this.handleSendClick(id)}>Send</button>
            </form>
        );
    }
}