import { useContext } from "react";
import { UserContext } from "../use-context/Context";

const TodoList = () => {
  const { todo, deletepopup,editModelpopup } = useContext(UserContext);

  return (
    <div className="max-w-md mx-auto mt-6">
      <ul className="space-y-3">
        {todo.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md rounded-md p-4 hover:bg-gray-50 transition"
          >
            <span className="text-gray-800 font-medium">{item.value}</span>
            <div className="flex gap-2">
              <button
              onClick={()=>editModelpopup(item.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deletepopup(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
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
