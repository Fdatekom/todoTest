import './Items.css';
import React, { Component } from 'react';

export default class Items extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    hendlePropertyChange = (propetyName)=> (event) =>{
        this.setState({
            [propetyName]: event.target.value
            
        })
     console.log(propetyName)
    }
    
    hendlePropetryFocus=(event)=>{
        event.target.setAttribute("value", this.state.text )

    }

    render() {
        const {items} = this.props;

        return(<div >
            {items.map((item, idx) => <li key={idx} id={idx}><input  type="checkbox"/><input onFocus={this.hendlePropetryFocus} onChange={this.hendlePropertyChange('text')} value={item.text}/></li>)}
            </div>)

}
}
