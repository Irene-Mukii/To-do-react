import React, { useEffect} from "react"
import { connect } from "react-redux"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoListItems from "./TodoListItems.jsx"
import { removeTodo } from "./actions.js"
import { completeTodo } from "./actions.js"
import './TodoList.css'
import { loadTodos } from "./thunks.js"

const TodoList = ({todos=[], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos})=>{
    useEffect(()=>{
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content =  (
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo => <TodoListItems 
            todo={todo} 
            onRemovePressed={onRemovePressed} 
            onCompletePressed={onCompletePressed}/>)}
        </div>
        );

    return isLoading ? loadingMessage : content;
}


const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
    startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);