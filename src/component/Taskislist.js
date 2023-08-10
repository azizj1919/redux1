import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDone, deleteTask } from "../Redux/Action"


const Taskislist =()=> {
    const dispatch = useDispatch()
    const tasks = useSelector(state=>state.tasks)
    const [test,setTest] = useState()
    return (
        <div>
            <button onClick={()=>setTest('ALL')}>ALL</button>
            <button onClick={()=>setTest('Done')}>Done</button>
            <button onClick={()=>setTest('isDone')}>isDone</button>
            {
                test == 'All' ?
                tasks . map (task=>
                    <div>
                        <h2>{tasks.text}</h2>
                        <h3>{task.isdone ? "TRUE" : "FALSE"}</h3>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
                        <button onChange={()=>dispatch(changeDone(task.id))}>Done</button>

                    </div>)
                : test == "Done" ?
                tasks.filter(el=>el.isDone == true).map (task=>
                    <div>
                        <h2>{tasks.text}</h2>
                        <h3>{task.isdone ? "TRUE" : "FALSE"}</h3>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
                        <button onChange={()=>dispatch(changeDone(task.id))}>Done</button>

                    </div>)
                : tasks . filter (el=>el.isDone == false).map (task=>
                    <div>
                        <h2>{tasks.text}</h2>
                        <h3>{task.isdone ? "TRUE" : "FALSE"}</h3>
                        <button onClick={()=>dispatch(deleteTask(task.id))}>delete</button>
                        <button onChange={()=>dispatch(changeDone(task.id))}>Done</button>

                    </div>)
                        
            }

        </div>
    )
}
export default Taskislist