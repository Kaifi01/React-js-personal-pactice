import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [openDelModel, setDelModel] = useState(false);
  const [openEditModel, setEditModel] = useState(false);
  const [selectId, setSelectId] = useState(null);

  const addTodo = async (value) => {
    const data = { title: value };

    try {
      const res = await axios.post("http://localhost:8001/todo/create", data);
     
      setTodo((prev) => [...prev, res.data.data]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

 
  const getAll = async () => {
    try {
      const res = await axios.get("http://localhost:8001/todo/getAll");
      console.log("Fetched todos successfully:", res.data.data);
      setTodo(res.data.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  
  useEffect(() => {
    getAll();
  }, []);


  const openDeleteModal = (_id) => {
    setDelModel(true);
    setSelectId(_id);
  };

  const closeDeleteModal = () => {
    setDelModel(false);
  };

  const openEditModal = (_id) => {
    setEditModel(true);
    setSelectId(_id);
  };

  const closeEditModal = () => {
    setEditModel(false);
  };

  
  return (
    <TodoContext.Provider
      value={{
        todo,
        openDelModel,
        openEditModel,
        selectId,
        addTodo,
        getAll,
        openDeleteModal,
        closeDeleteModal,
        openEditModal,
        closeEditModal,
        setDelModel
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};


export const useTodo = () => useContext(TodoContext);
