import React from 'react'

const DeleteMode = ({deltemodclose,deltemodel }) => {
  return (
    <>
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-80 p-6 rounded-2xl shadow-xl text-center animate-fadeIn">

        <h2 className="text-xl font-semibold text-gray-800">
          ⚠️ Confirm Delete
        </h2>

        <p className="text-gray-600 mt-2">
          Are you sure you want to delete this study record?
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={deltemodclose}
            className="px-5 py-2 bg-gray-300 rounded-xl text-gray-800 hover:bg-gray-400 transition"
          >
            Cancel
          </button>

          <button
            onClick={deltemodel}
            className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default DeleteMode