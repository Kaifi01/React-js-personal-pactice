import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
    const[input,setInput]=useState("");
    const addclick=()=>{
        addtodo(input);
        setInput("")
    }

  return (
  <>
  <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 m-auto">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
      📝 To-Do List
    </h1>
    <div className="flex mb-4">
      <input
        onChange={(e)=>setInput(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
        value={input}
      />
      <button
       onClick={addclick}
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