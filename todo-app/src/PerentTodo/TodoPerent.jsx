import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList';
import DeleteModel from './DeleteModel';
import EditModel from './EditModel';

const TodoPerent = () => {
     const [todo,setTodo]=useState([]);
     const[deletemodel,setDeleteModel]=useState(false);
     const [editModel,setEditModel]=useState(false);
     const [selectId,setSelectid]=useState(null);
    // const [edittext,setEditext]=useState("")

         const opendeletemodel=(id)=>{
            setDeleteModel(true);
            setSelectid(id);
         }
        
         const openeditmodel=(id)=>{
            setEditModel(true);
            setSelectid(id)
         }
         const cancileditModel=()=>{
            setEditModel(false)
         }

     const  addtodo=(value)=>{
     setTodo ([...todo,{id:Date.now(),value:value}])
     }

     const confimdelete=()=>{
      setTodo(todo.filter(item=>item.id!==selectId))
      setDeleteModel(false)
     }
     const cancildelete=()=>{
      setDeleteModel(false)
     }
   //  console.log(todo);
   const currentvalue=todo.find((item)=>item.id===selectId);
  // console.log(currentvalue);
   
   const confimedit=(newval)=>{
   setTodo(todo.map(item=>item.id===selectId ?{...item,value:newval}:item));
   setEditModel(false);
   }
  return (
   <>
   <TodoForm addtodo={addtodo}/>
    <TodoList todo={todo}    opendeletemodel={opendeletemodel} openeditmodel={openeditmodel}/>
    {deletemodel &&
     <DeleteModel confimdelete={confimdelete} cancildelete={cancildelete}/>
    }
      {editModel &&
      <EditModel cancileditModel={cancileditModel} currentvalue={currentvalue.value} confimedit={confimedit}/>

      }
   </>
  )
}

export default TodoPerent