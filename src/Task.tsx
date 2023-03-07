import React, { useState } from "react";
import { StyledButton, StyledTaskDiv, StyledTodoName } from "./StyledBoard";

interface IProp {
    taskName: string;
    isEditTask: boolean;
    setIsEditTask: (val: boolean) => void;
    updateTaskName: (e: any, id: number) => void;
    id: number;
    handleDeleteTodoItem: (id: number) => void;
    handleDragStart: (e: React.DragEvent<HTMLDivElement>, taskId: number) => void;
}

const Task: React.FC<IProp> = (prop) => {
    const { taskName, isEditTask , setIsEditTask, updateTaskName, id, handleDeleteTodoItem, handleDragStart} = prop;
    const [todoName, setTodoName] = useState(taskName);
    return (
        <StyledTaskDiv draggable={true} onDragStart= {(e) => handleDragStart(e, id)}>
            {isEditTask ? (
                <div>
                    <input  defaultValue={todoName} onKeyDown={(e) => {
                        updateTaskName(e, id);
                        setTodoName((e.target as HTMLInputElement).value);
                    } } />
                    <button onClick={() => setIsEditTask(false)}>Save</button>
                    </div>
            ) : (
                <>
                <StyledTodoName>{taskName}</StyledTodoName>
                <StyledButton onClick={() => setIsEditTask(true)}>Edit</StyledButton>
                <StyledButton onClick={() => handleDeleteTodoItem(id)} style={{marginLeft: '20px'}}>Delete</StyledButton>
                </>
            )}
        </StyledTaskDiv>
    )
}

export default Task;