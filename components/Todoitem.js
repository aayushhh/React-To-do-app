import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Todoitem extends Component {
    getStyle=()=>{
        return{
            background:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'Line-through': 'none'    
        }
        
    }
    // alternative method to line-thrugh the todos items
    /*if(this.props.todo.completed){
         return{
    textDecoration: 'Line-through'
}}
else{
    return{
        textDecoration: 'none'
    }
}}*/
//checkbox 

    render() {
        const { id, title}= this.props.todo;  //to get the values in id and title from line 39
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange= {this.props.markComplete.bind(this, id)}/>{' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)}style={btnStyle}>X</button>
                </p>
            </div>
        )
        }
    }
    //Proptypes first name will be same as class name
    Todoitem.propTypes= {
        todo: PropTypes.object.isRequired
    }
    const btnStyle ={
        background: '#ff0000',
        color: '#fff',
        border: '30px',
        padding: '5px 10px',
        borderRadius: '30%',
        cursor: 'pointer',
        float: 'right'
    }
export default Todoitem
