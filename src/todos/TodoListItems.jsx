import React from "react";
import './TodoListItems.css'

const TodoListItems = ({todo, onRemovePressed, onCompletePressed})=> (
    <div className="todo-item-container">
        <h3> {todo.text}</h3>
        <div className="buttons-container">
        {console.log(todo)}
        {todo.isCompleted 
        ? null : <button 
            onClick={()=>onCompletePressed(todo.id)}
            className="completed-button"> Mark As Completed</button>}
        <button 
            onClick={()=>onRemovePressed(todo.id)}
            className="remove-button">Remove</button>
        </div>
    </div>
)

export default TodoListItems;