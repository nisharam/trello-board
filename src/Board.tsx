import React, { useState } from "react";
import TaskCard from "./Card";
import { AddTaskButton, BoardBackgroundColor } from "./StyledBoard";
import { TaskType } from "./types";

interface IProp {};

const TrelloBoard: React.FC<IProp> = () => {
    const [taskList, setTaskList] = useState<any>([]);
    const [isTitleEditVisible, setIsTitleEditVisible] = useState(false);

    const handleAddTask = (taskName: string) => {
        let count = taskList?.length;
        const tempTask: TaskType = 
            {
                name: taskName,
                id: count++
            }
        
        setTaskList((prev: any) => [...prev, tempTask]);

    }

    const handleDeleteTask = (id: number) => {
       let deletedTask = taskList.filter((task: TaskType) => {
        return task.id !== id
       });
      setTaskList(deletedTask);
    }

    const handleSaveBoardTitle = (event: any, id: number) => {
        let updatedTasks: TaskType[] = [];
        if(event.key === 'Enter'){
            updatedTasks = taskList.filter((task: TaskType) => 
                task.id === id ? task.name = event.target.value : task
            )
            setIsTitleEditVisible(false);
            setTaskList(updatedTasks);
        }
    }

    return (
        <BoardBackgroundColor>
           <AddTaskButton onClick={() => handleAddTask('New Task')}>
            <span className="add-icon"> + </span>
           </AddTaskButton>
           <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'row', flexWrap: 'wrap'}}>
        {taskList.map((task: any) => {
            return (
                <>
                <TaskCard header={task?.name} handleDeleteTask={handleDeleteTask} id={task.id} handleSaveBoardTitle={handleSaveBoardTitle}
                isTitleEditVisible={isTitleEditVisible} setIsTitleEditVisible={setIsTitleEditVisible} />
                </>
            )
            })}
    </div>

        </BoardBackgroundColor>
    )
}

export default TrelloBoard;