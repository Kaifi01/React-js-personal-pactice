import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
  
const [input,Setinput]=useState("");
   
   const addvalue=()=>{
    if (!input.trim()){
        return Setinput("")
    }
    addtodo(input);
    Setinput("")
   }



  return (
   <>
  
  <div className="bg-white shadow-2xl rounded-2xl w-[30%] m-auto  p-6">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
      📝 To-Do List
    </h1>
    <div className="flex mb-4">
      <input
        type="text"
        id="taskInput"
        placeholder="Enter a task"
        className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
        onChange={(e)=>Setinput(e.target.value)}
        value={input}
      />
      <button
       onClick={addvalue}
        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
      >
        Add
      </button>
    </div>
   
  </div>
  
</>


  )
}

export default TodoForm