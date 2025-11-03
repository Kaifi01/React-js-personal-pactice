import React from "react";
import { usetodo } from "../context/Context";

const TodoList = () => {
  const { todo, deletemodel, editmodel } = usetodo();

  if (!todo || todo.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No tasks available. Add a new one!
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-5 text-blue-600">
        📝 Todo List
      </h2>

      <ul className="space-y-3">
        {todo.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl hover:bg-gray-100 transition"
          >
            <span className="text-gray-800 font-medium">{item.title}</span>

            <div className="flex gap-2">
              <button
                onClick={() => editmodel(item.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deletemodel(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
