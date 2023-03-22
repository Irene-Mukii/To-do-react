import React from "react"
import { connect } from "react-redux"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoListItems from "./TodoListItems.jsx"
import { removeTodo } from "./actions.js"
import { completeTodo } from "./actions.js"
import './TodoList.css'

const TodoList = ({todos=[], onRemovePressed, onCompletePressed})=>(
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItems todo={todo} onRemovePressed={onRemovePressed} onCompletePressed={onCompletePressed}/>)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);