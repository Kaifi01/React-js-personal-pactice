import React from "react";
import { useTodo } from "./context/Context";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DeleteModel from "./components/DeleteModel";
import EditModel from "./components/EditModel";

function App() {
  const {
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
  } = useTodo();

  return (
    <>
    
      <TodoForm addtodo={addTodo} />

    
      <TodoList
        todo={todo}
        openDeletemod={openDeleteModal}
        editmodel={openEditModal}
      />

    
      {openDelModel && (
        <DeleteModel
          closeDelmod={closeDeleteModal}
          getall={getAll}
          selectid={selectId}
        />
      )}


      {openEditModel && (
        <EditModel closeeditmodel={closeEditModal} />
      )}
    </>
  );
}

export default App;
