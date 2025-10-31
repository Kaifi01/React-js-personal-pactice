import React, { useState } from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList';
import DeleteModel from './DeleteModel';

const Perent = () => {
    const [todo,setTodo]=useState([]);
    const [selectId,setSelectId]=useState(null);
    const [delemodel,setDeletemodel]=useState(false);
       
   const addtodo=(value)=>{
   setTodo([...todo,{id:Date.now(),value:value}])
   }
//console.log(todo);
    const opendeleteModel=(id)=>{
         setDeletemodel(true)
        setSelectId(id)
    }    
    const cancildeletemodel=()=>{
        setDeletemodel(false)
    }
    const confimdeletemodel=()=>{
        setTodo(todo.filter((item)=>item.id!==selectId))
        setDeletemodel(false)
    }
  return (
    <>
     <TodoForm addtodo={addtodo}/>
     <TodoList todo={todo} opendeleteModel={opendeleteModel}/>
     { delemodel &&
     <DeleteModel  cancildeletemodel={cancildeletemodel} confimdeletemodel={confimdeletemodel}/>
     }
    </>
  )
}

export default Perent