import React from "react";
import TodoForm from "../components/TodoForm"
import TodoList from '../components/TodoList';
import { Todo } from "../interfaces";


const TodosPage : React.FC = () =>{
    const [todos,setTodos] = React.useState<Array<Todo>>([]);

    React.useEffect(()=>{
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
      setTodos(saved);
     
    },[]);
  
    React.useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
  
    const addHandler = (title:string)=>{
      let newTodo = {title:title,id:Date.now(),completed:false}
      setTodos(prev=>[newTodo,...prev]);
      console.log("Added TODO",title);
      
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    }
  
    const removeHandler= (id:number)=>{
      let shouldRemove = window.confirm('Вы уверены , что хотите удалить елемент?');
      shouldRemove && setTodos(prev=>prev.filter(todo=>todo.id!==id))
    }
    return(
        <>           
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      
        </>
    )
}

export default TodosPage;