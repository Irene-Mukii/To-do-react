import React from "react";
import TodoList from "./todos/TodoList.jsx";
import styled from "styled-components";

const AppContainer = styled.div`
margin: 1rem;
color: #222222;
font-family: 'Courier New', Courier, monospace;`

const App = ()=> (
    <AppContainer>
        <TodoList />
    </AppContainer>
)

export default App