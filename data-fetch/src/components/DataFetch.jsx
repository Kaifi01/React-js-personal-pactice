import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
const loadingmassage=<p>todo is loading</p>
const DataFetch = () => {
    const[todos,setTodos]=useState(null);
    const [isloading,setisloading]=useState(true);
    const[error,sesterror]=useState(null);
    useEffect(()=>{
       setTimeout(() => {
         fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            if (!res.ok) {
                throw Error("fetching is not successfully");
                
            }else{
           return res.json()
            }
           
        })
        .then((data)=>{
            setTodos(data)
            console.log(todos);
            setisloading(false)
            sesterror(null)
        }).catch( (error)=>{
            sesterror(error.massege)
        })
       }, 3000);
    },[])
    const todoselement=  todos && todos.map((item)=><div key={item.id}>{item.title} </div>)
    
        
  return (
    <div>
        {error && <p>{Error}</p> }
        {isloading && loadingmassage}
       {todoselement}
    </div>
  )
}

export default DataFetch