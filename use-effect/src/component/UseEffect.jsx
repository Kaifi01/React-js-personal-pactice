import React, { useEffect, useState } from 'react'
const load=<p>Data is loading</p>
const errors= <p> It's have error</p>
const UseEffect = () => {
 const [todos,setTodo]=useState(null);
 const [isloading,setLoading]=useState(true);
 const [error,setError]=useState(false);
    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>{
        if( !res.ok) {
           throw Error (`Data fetching is not successful ${error} `)  
        }
     return res.json()
      }).then((data)=>{
        setTodo(data)
        setLoading(false)
      }).catch((error)=>{
      setError(error.message)
      setError(true)
      setLoading(false)
      })
    },[])
 
  
  return (
    <>
    <h1>Fetch Todos</h1>
    <div>{isloading && load} </div>
    <div>{error && errors}</div>
    <div>
        {todos && todos.map((todos)=>{
       return   ( <div>{todos.title}</div> )
        })}
    </div>
    </>
  )
}

export default UseEffect