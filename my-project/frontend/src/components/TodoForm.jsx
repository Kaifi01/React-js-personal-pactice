import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
    const [input,setInpt]=useState("");
        const addinput=()=>{
            if (!input.trim()) { 
              return setInpt("")  
             }
               addtodo(input);
                setInpt("")
            
              
        } 
  return (
    <div>
  <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 m-auto">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
      📝 To-Do List
    </h1>
    <div className="flex mb-4">
      <input
      value={input}
        onChange={(e)=>setInpt(e.target.value)}
        id="taskInput"
        placeholder="Enter a task"
        className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
       onClick={addinput}
        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
      >
        Add
      </button>
    </div>
    <ul id="taskList" className="space-y-2">
      {/* Tasks will appear here */}
    </ul>
  </div>


    </div>
  )
}

export default TodoForm