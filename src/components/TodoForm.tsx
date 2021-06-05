import React from "react";

interface TodoFormProps{
    onAdd(title:string):void
}

const TodoForm:React.FC<TodoFormProps>=(props)=>{

    let [todo,setTodo] = React.useState<string>("");
    let changeHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setTodo(event.target.value);
    }
    let keyPressHandler=(event:React.KeyboardEvent)=>{
        if(event.key==="Enter"){
            props.onAdd(todo);
            setTodo("");
        }
    }

    return(
    <div className="input-field mt2">
        <input type="text" id="title"
        onChange={changeHandler} 
        onKeyPress={keyPressHandler}
        value={todo} 
        placeholder="мне нужно сделать..."/>
        <label htmlFor="title" className="active">Введите задачу:</label>
    </div>
    )
}

export default TodoForm;
