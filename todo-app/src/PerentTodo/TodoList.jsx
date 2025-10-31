import React from 'react'

const TodoList = ({ todo, opendeletemodel, openeditmodel }) => {
  return (
    <div className="w-full max-w-xl mx-auto mt-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
       

        {/* list */}
        <ul className="divide-y">
          {todo.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 px-5 py-4 hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* optional bullet / status circle */}
                <span
                  className="flex-shrink-0 w-3 h-3 rounded-full bg-indigo-400"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-gray-800 font-medium truncate">{item.value}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => openeditmodel(item.id,item.value)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label={`Edit ${item.value}`}
                >
                  Edit
                </button>

                <button
                  onClick={() => opendeletemodel(item.id)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
                  aria-label={`Delete ${item.value}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

      
      </div>
    </div>
  )
}

export default TodoList
