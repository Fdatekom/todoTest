import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            ifEdit: false,
            text: this.props.text,
            id: this.props.id,

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
        const { id } =this.state;
        console.log(id)
        return(
            <div >
                {this.state.ifEdit ? <input id={id} onKeyDown={this.onKeyDown} value={text} onChange={this.hendlerPropertyChange} autoFocus/> :  <div id={id} onDoubleClick={this.onDoubleClick}> {text} <button>Delete</button></div>}
            </div>
        )
        
    }
}