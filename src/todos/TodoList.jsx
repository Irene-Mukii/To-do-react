import React, { useEffect} from "react"
import { connect } from "react-redux"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoListItems from "./TodoListItems.jsx"
import './TodoList.css'
import { loadTodos, removeTodoRequest, completeTodoRequest } from "./thunks.js"
import {  getTodosLoading, getCompletedTodos, getIncompleteTodos } from "./selectors.js"

const TodoList = ({completedTodos,incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos})=>{
    useEffect(()=>{
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
    const content =  (
        <div className="list-wrapper">
            <NewTodoForm/>
            <h3>Incomplete: </h3>
            {incompleteTodos.map(todo => <TodoListItems 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onCompletePressed}/>)}
            <h3>Completed: </h3>
            {completedTodos.map(todo => <TodoListItems 
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onCompletePressed={onCompletePressed}/>) }
        </div>
        );

    return isLoading ? loadingMessage : content;
}


const mapStateToProps = state => ({
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
    isLoading: getTodosLoading(state) ///not sure why this is till here shouldnt it be in todos - no because reducers receive this , they dont give...
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);