import './Items.css';
import React, { Component } from 'react';

export default class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            sendText: 'Send'
        }
    }

    hendlePropertyChange = (propetyName)=> (event) =>{
        this.setState({
            [propetyName]: event.target.value
            
        })
     console.log(propetyName)
    }
    
    onChange = (id)=>(event)=>{
        event.target.remove();
        event.targe.innerHTML()
    }

    render() {
        const {items} = this.props;
        return(<div >
            {items.map((item, idx) => <li key={idx} id={idx}><input  type="checkbox"/><div > {item.text} </div></li>)}
            </div>)

}
}
