import Task from "./Task";
import { useState } from "react";

const ListSection = () => {
    const [tasks, setTasks] = useState([<></>]);
    const [textValue, setTextValue] = useState("");

    function addTask(){
    
        if (textValue.trim() != ""){
            
            setTasks([...tasks, <Task text = {textValue}/>]);
            setTextValue("");
        }
        
    }

    return (
        
        <div>
            <ul className="taskList">
                {tasks}

            </ul>

            <div className="taskInputDiv">

                <input type="text" className="taskInput" value={textValue} onChange={ (event) => {setTextValue(event.target.value)}} placeholder="Type Task"/>
    
                <button className="addButton" onClick={addTask}>Add Task</button>

            </div>
        </div>
    )
}

export default ListSection