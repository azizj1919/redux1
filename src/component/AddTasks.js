import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddTask } from "../Redux/Action"


const AddTasks =()=> {
    const dispatch = useDispatch ()
    const [textP,setTextP]= useState("")
    return (
        <div>
            <input type="text" onChange = {(e)=>setTextP(e.target.value)}/>
            <button onClick={()=>dispatch(AddTask ({text:textP,id :Math.random(),isDone: false}))}>Add</button>
            

        </div>
    )
}
export default AddTasks