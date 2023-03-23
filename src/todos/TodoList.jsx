import React, { useEffect} from "react"
import { connect } from "react-redux"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoListItems from "./TodoListItems.jsx"
import './TodoList.css'
import { loadTodos, removeTodoRequest, completeTodoRequest } from "./thunks.js"

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
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);