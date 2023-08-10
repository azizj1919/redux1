import { ADDTASK, CHANGEDONE, DELETETASK } from "./ActionTypes"


export const AddTask = (payload)=> {
    return(

    {
    type : ADDTASK ,
    payload
    }
    )
}

export const deleteTask =(payload)=>{
    return (
        {
    type : DELETETASK ,
    payload
        }
    )

}

export const changeDone =(payload)=>{
    return(
        {
            type : CHANGEDONE ,

            payload
        }
    )
}