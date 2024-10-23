const Task = (props: any) =>{

    return(
        
        <div className="taskLayout">

            <input type="checkbox" className="checkBox"/>
            <p className="taskText">{props.text}</p>

        </div>
    )
}

export default Task