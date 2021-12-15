import { useEffect, useState} from 'react';
import Button from "@mui/material/Button";
import TextField  from '@mui/material/TextField';
function TodoForm(props){
    const[task,setTask]=useState('')
    useEffect(() => {
        setTask(props.fillTodo.text)

    }, [props.fillTodo])
    function submitForm(event){
        event.preventDefault();
        const TodoItem=task;
        console.log(TodoItem);
        if(props.fillTodo.id!=null)
        props.sendToParent({id:props.fillTodo.id,text:TodoItem})
        else
        props.sendToParent({id:null,text:TodoItem})
        setTask("")
    }    

    
    return (
        
        <form onSubmit={submitForm}>
            <div className="flex">
                <div>
                <TextField id="todo" label="Enter your task" variant="standard" value={task} onChange={(e=>setTask(e.target.value))}/>
                </div>
                <div>
                    <Button type="submit" variant="contained" size="small" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </div>
            </div>
            
        </form>
        
        
    );
}
export default TodoForm;