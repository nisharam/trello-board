import React, { useState } from "react";
import { StyledButton } from "./StyledBoard";

interface IProp {
    taskName: string;
    isEditTask: boolean;
    setIsEditTask: (val: boolean) => void;
    updateTaskName: (e: any, id: number) => void;
    id: number;
    handleDeleteTodoItem: (id: number) => void;
}

const Task: React.FC<IProp> = (prop) => {
    const { taskName, isEditTask , setIsEditTask, updateTaskName, id, handleDeleteTodoItem} = prop;
    const [todoName, setTodoName] = useState(taskName);
    return (
        <div style={{display: 'flex'}} draggable={true}>
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
                <h5>{taskName}</h5>
                <StyledButton onClick={() => setIsEditTask(true)}>Edit</StyledButton>
                <StyledButton onClick={() => handleDeleteTodoItem(id)}>Delete</StyledButton>
                </>
            )}
        </div>
    )
}

export default Task;