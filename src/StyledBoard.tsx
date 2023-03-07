import styled from "styled-components";

export const BoardBackgroundColor = styled.div`
background-color: #113753;
height: 100vh;
`

export const AddTaskButton = styled.button`
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
font-size: 35px;
background-color: #05b4ee;
float: left;
`

export const StyledCard = styled.div`
    width: 300px;
    height: auto;
    background: #D3D3D3;
    margin-top: 30px;
    padding: 0px 0px 30px 0px;
    border-radius: 0% 2%;
    ` ;

export const StyledButton = styled.button`
margin-top: 21px;
height: 20px;
;
`
export const StyledInput = styled.input`
    outline: 0;
    border-width: 0 0 2px;
    border-color: #4d4d89;
    width: 80%;
    margin-top: 50px;
  input:focus {
    border-color: green;
    outline: 1px dotted #000
  }`

export const StyledTaskDiv = styled.div`
background: white;
display: flex;
    margin: 0px 16px;
    padding: 0px 16px;
    margin-top: 20px`;

export const StyledTodoName = styled.h5`
width: 90%;
text-align: left;`