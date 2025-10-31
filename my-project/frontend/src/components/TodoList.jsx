import React from 'react'

const TodoList = ({todo,openDeletemod,editmodel}) => {
  return (
    <div>{todo.map((item)=><li key={item._id}>{item.title} <button onClick={editmodel}>Edit</button> <button onClick={()=>openDeletemod(item._id)}>Del</button></li>)}</div>
  )
}

export default TodoList