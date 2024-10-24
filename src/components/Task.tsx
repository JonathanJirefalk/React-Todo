const Task = (props: any) =>{
    //id: props.id

    return(
        
        <div className="taskLayout">

            <input type="checkbox" className="checkBox"/>
            <p className="taskText">{props.text}</p>

        </div>
    )
}

export default Task