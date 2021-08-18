/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import TodoItem from './TodoItem';

export default function Todos(props) {
    let myStyle = {
        minHeight:"60vh"
    }
    return (
        <div className="container my-3" style = {myStyle}>
            <h3 className="my-3">Todo's List</h3> <hr />
            { 
                props.todos.length === 0 ? "No Todo to display" : 
            
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
            
        </div>
    )
}
