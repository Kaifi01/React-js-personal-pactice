import React from 'react'

const TodoList = ({todo}) => {
  //  console.log(todo);
    
  return (
 <>
 
{todo.map((item)=><li>{item.title}</li>)

}

 </>
  )
}

export default TodoList