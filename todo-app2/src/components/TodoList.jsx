import React from "react";

const TodoList = ({ todo, opendeleteModel }) => {
  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {todo.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center px-4 py-3 hover:bg-gray-50 transition"
            >
              {/* Text */}
              <span className="text-gray-800 font-medium truncate">
                {item.value}
              </span>

              {/* Action buttons */}
              <div className="flex gap-2">
                <button
                  className="px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 shadow-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => opendeleteModel(item.id)}
                  className="px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 shadow-sm transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}

          {/* If no todos */}
          {todo.length === 0 && (
            <li className="px-4 py-6 text-center text-gray-500">
              No tasks yet ✨
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
