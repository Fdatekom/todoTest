import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            ifEdit: false,
            text: this.props.text
        }
    }
    onRemove=()=>{

    }

    onChange =(event)=>{
       
    }

    hendlerPropertyChange=(event)=> {
        this.setState({
            text: event.target.value 
        })
    }

    onDoubleClick =(event)=>{
        const {ifEdit} = this.state;
        this.setState({
            ifEdit: !ifEdit
        })
    }

    onKeyDown=(event)=>{
        if(event.keyCode === 13){
            const {ifEdit} = this.state;
            this.setState({
                ifEdit: !ifEdit
         })
        }
    }
    
    render( ) { 
        const {text}=this.state;
        return(
            <div >
                {this.state.ifEdit ? <input onKeyDown={this.onKeyDown} value={text} onChange={this.hendlerPropertyChange} autoFocus/> :  <div onDoubleClick={this.onDoubleClick}> {text} <button>Delete</button></div>}
            </div>
        )
        
    }
}