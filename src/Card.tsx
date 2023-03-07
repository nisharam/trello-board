import React, { useState } from "react";
import { StyledCard } from "./StyledBoard";
import Task from "./Task";

interface IProps {
    header: string;
    handleDeleteTask: (taskName: number) => void;
    id: number;
    handleSaveBoardTitle: (title: any, id: number ) => void;
    isTitleEditVisible: boolean;
    setIsTitleEditVisible: (val: boolean) => void;
} ;

const TaskCard: React.FC<IProps> = (props) => {
    const {header, handleDeleteTask, id, handleSaveBoardTitle, isTitleEditVisible, setIsTitleEditVisible } = props;
    const [todos, setTodos] = useState<any>([]);
    const [isEditTask, setIsEditTask] = useState(false);

    const handleAddTodo = (event: any) => {
        if(event.key === 'Enter') {
            let count = todos.length;
            const todoItem = {
                todoItem: event.target.value,
                id: count++,
            };
            console.log('todod is', todoItem);
            setTodos((prev: any) => [...prev, todoItem]);

        }
    }

const updateTaskName = (e: any, id: number) => {
    if(e.key === 'Enter') {
       let  updatedTasks = todos.filter((task:any ) => 
        task.id === id ? task.todoItem = e.target.value : task
    )
    setTodos(updatedTasks);
    setIsEditTask(false);
    }
}

const handleDeleteTodoItem = (id: number) => {
    let deletedTask = todos.filter((task: any) => {
        return task.id !== id
       });
      setTodos(deletedTask);
}

    
    return (
        <StyledCard>
            {header ? (
                isTitleEditVisible ? (<input onKeyDown={(e) => handleSaveBoardTitle(e, id)} />) : (<h3 onDoubleClick={ () => setIsTitleEditVisible(true)}>{header}</h3>)
            ): (
                <h3>Create  a default task</h3>
            )}
            <input onKeyDown={ (e) => handleAddTodo(e)} />
            <button onClick={() => handleDeleteTask(id)}> Delete</button>
            {todos.map((todo: any) => (
                <Task taskName={todo.todoItem} isEditTask={isEditTask} setIsEditTask={setIsEditTask} updateTaskName={updateTaskName} id={todo.id}
                handleDeleteTodoItem={handleDeleteTodoItem} />
            ))}
        </StyledCard>
    )
}

export default TaskCard;