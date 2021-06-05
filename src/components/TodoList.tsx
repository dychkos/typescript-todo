import React from 'react';
import {Todo }from "../interfaces"

type TodoListProps = {
    todos:Todo[],
    onToggle(id:number):void,
    onRemove:(id:number)=>void
}

const TodoList : React.FC<TodoListProps>=({todos,onToggle,onRemove})=>{
    if(todos.length===0){
        return <p className="center">Список дел пуст!</p>
    }

    const removeHandler = (event:React.MouseEvent,id:number)=>{
        event.preventDefault();

        onRemove(id);
    }

    return(
        <ul>
            {todos.map(todo=>{
                const classes = ['todo'];
                
                if(todo.completed){
                    classes.push('completed');
                }
                console.log(classes)
                return (
                    <li key={todo.id} className={classes.join(' ')}>
                <label>
                    <input type="checkbox" onChange={()=>{onToggle(todo.id)}} checked={todo.completed} />
                    <span >{todo.title}</span>
                    <i className="material-icons red-text" onClick={event=>removeHandler(event,todo.id)}>delete</i>
                </label>
            </li>
                )
            })
            
        }
        </ul>
    )


}


export default TodoList;