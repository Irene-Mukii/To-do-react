import { createSelector } from "reselect";
//takes selectors as arguments (when they are needed in the creation of other another selector) and returns new selector via a function that defines the transformation(using the argument-selectors return values as its arguments).
//use memoization hence not wasting computational power


//lower order selectors hiding exact structure of data in redux store
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;


// higher order selectors transforming redux data into more specific data (list of completed and incompleted todos)
export const getIncompleteTodos = createSelector([getTodos],(todos) => todos.filter(todo => !todo.isCompleted),
);//return values are passed to the transformation function

export const getCompletedTodos = createSelector([getTodos],(todos) => todos.filter(todo => todo.isCompleted),
);