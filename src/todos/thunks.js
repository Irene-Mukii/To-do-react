import { createTodo ,loadTodosFailure, loadTodosInProgress, loadTodosSuccess } from "./actions";
// does redux thunk automatically connect our side effects to the component? no, call in component

export const loadTodos = () => async dispatch  =>{
    try{
    dispatch(loadTodosInProgress());
    const response = await fetch('http://localhost:5000/todos');
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
    } catch (e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const addTodoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:5000/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        console.log(response)
        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const displayAlert = text => ()=>{
    alert(text)
};