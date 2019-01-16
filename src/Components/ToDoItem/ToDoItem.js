import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            isEdit: false,
            newText: ''

        }
    }
    onRemove=()=>{

    }

    onChange =(event)=>{
       
    }

    hendlerPropertyChange=(event)=> {
        this.setState({
            newText: event.target.value 
        })
    }

    onDoubleClick =(event)=>{
        const {isEdit} = this.state.isEdit;
        const {text} = this.props;
        this.setState({
            isEdit: !isEdit,
            newText: text,
        })
    }

    onKeyDown=(event)=>{
        const  onChange = this.props.onChange;

        if(event.keyCode === 13 && typeof onChange === 'function' && this.state.newText.length >=1){
            const {isEdit} = this.state;
            this.setState({
                isEdit: !isEdit
            });
            onChange(this.state.newText, event.target.id);
            this.setState({ newText: ''});
        }

    }

    render( ) { 
        const {text, id, idx}=this.props;
        const {newText} = this.state;
        return(
            <div >
                {this.state.isEdit ? <input id={id} key={idx} onKeyDown={this.onKeyDown} value={newText} onChange={this.hendlerPropertyChange} autoFocus/> :  <div id={id} key={idx} onDoubleClick={this.onDoubleClick}> {text} <button onClick={this.onRemove}>Delete</button></div>}
            </div>
        )
        
    }
}