import {  createContext,  useState } from "react";
import DeleModelopen from "../components/DeleModelopen";
import EditModelOpen from "../components/EditModelOpen";

export const UserContext=createContext();



export const UserProvider=({children})=>{

    const [todo,setTodo]=useState([]);
    const [input,setInput]=useState("");
    const [selectid,setSelectid]=useState(null);
    const [deletemodel,setDeleteModel]=useState(false);
    const [editModel,setEditModel]=useState(false)
       const addtodo=(input)=>{
         setTodo([...todo,{id:Date.now(),value:input} ])
       }
       const deletepopup=(id)=>{
          setSelectid(id) 
          setDeleteModel(true)   
       }
       const closedeleteopoup=()=>{
        setSelectid(null);
       setDeleteModel(false)
       }
       const confimdelitem=()=>{
        setTodo(todo.filter((item)=>item.id!==selectid));
        setDeleteModel(false)
       } 
       const editModelpopup=(id)=>{
        setEditModel(true);
     setSelectid(id)
       }
     const  closeeditmodel=()=>{
        setEditModel(false);
        setSelectid(null)
       }
        const currentvalue = todo.find((item) => item.id === selectid);
        const confimedit=(newtext)=>{

    setTodo(todo.map((item)=>item.id===selectid ?{...item,value:newtext}:item));
    setEditModel(false);


        }
      
      
       
 
         
         
    return (
<UserContext.Provider value={{todo,setTodo,input,setInput,addtodo,deletepopup,closedeleteopoup,confimdelitem,currentvalue,editModelpopup,closeeditmodel,confimedit}}>
 {children}
 {deletemodel && <DeleModelopen/>}
 {editModel && <EditModelOpen/>}

</UserContext.Provider>
    )
}

