import React from "react";
import styled from "styled-components";

const TodoItemContainer=styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;`

const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;`

const Button = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;`

const CompletedButton = styled(Button)`
display: inline-block;
background-color: #22ee22;`

const RemovedButton = styled(Button)`
display: inline-block;
background-color: #ee2222;
margin-left: 8px;`

export const getBorderStyleForDate = (startingDate, currentDate) => (
    (startingDate > new Date(currentDate - 8640000*4) ? 'none' : '2px solid red')
)


const TodoItemContainerWithWarning = styled(TodoItemContainer)`
border-bottom: ${props => getBorderStyleForDate(new Date(props.createdAt), new Date(Date.now()))};`


const TodoListItems = ({todo, onRemovePressed, onCompletePressed})=> {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning; 

    return (
    <Container createdAt={todo.createdAt}>
        <h3> {todo.text}</h3>
        <p>Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p>
        <ButtonsContainer>
        {console.log(todo)}
        {todo.isCompleted 
        ? null : <CompletedButton 
            onClick={()=>onCompletePressed(todo.id)}
           > Mark As Completed</CompletedButton>}
        <RemovedButton 
            onClick={()=>onRemovePressed(todo.id)}
            >Remove</RemovedButton>
        </ButtonsContainer>
    </Container>
)}

export default TodoListItems;