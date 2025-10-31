import React, { useState } from 'react'

const TodoForm = ({addtodo}) => {
    const [input,setInput]=useState("")
    const addvalue=()=>{
        if(!input.trim()){
            return setInput("")
        }
        addtodo(input)
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
         value={input}
        type="text"
        id="taskInput"
        placeholder="Enter a task"
        className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
       onClick={addvalue}
        className="bg-indigo-500 text-white px-4 py-2 rounded-r-md hover:bg-indigo-600"
      >
        Add
      </button>
    </div>
    <ul id="taskList" className="space-y-2">
      {/* Tasks will appear here */}
    </ul>
  </div>
</>

   
  )
}

export default TodoForm