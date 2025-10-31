import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';

const TodoParent = () => {
  const [todo, setTodo] = useState([]);

  // POST
  const addtodo = async (value) => {
    const data = { title: value };
    try {
      const res = await axios.post("http://localhost:8001/todo/create", data);
     // console.log("Todo added successfully", res.data);
      // Option 1: Add to state directly
      setTodo([...todo,{id:Date.now(),res}]);
      // Option 2: Refetch all todos
      // await getall();
    } catch (error) {
      console.log(error.response || error);
    }
  };

  // GET
  const getall = async () => {
    try {
      const res = await axios.get("http://localhost:8001/todo/getAll");
      console.log("Fetched todos successfully", res.data.data);
      setTodo(res.data.data);
    } catch (error) {
      console.log(error.response || error);
    }
  };

  useEffect(() => {
    getall();
  }, []);

  return (
    <>
      <TodoForm addtodo={addtodo} />
      <TodoList todo={todo} />
    </>
  );
};

export default TodoParent;
