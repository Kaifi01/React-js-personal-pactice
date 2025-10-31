import React, { useContext, useState } from "react";
import { NoteContext } from "../usecontext/Context";

const EditModelopen = () => {
  const { cancileditmod, cureentvalue, updatevalue, confimdelete} =
    useContext(NoteContext);

  const [editinput, setEditinput] = useState({
    input: cureentvalue?.input || "",
    message: cureentvalue?.message || "",
  });

  const updateinpute = () => {
    // যদি ফাঁকা হয়, তাহলে delete করব
    if (!editinput.input.trim() && !editinput.message.trim()) {
      confimdelete();
     cancileditmod();
      return;

    }

    // না হলে update করব
    updatevalue(editinput);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Modal Card */}
      <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            ✏️ Edit Your Note
          </h3>
          <button
            onClick={cancileditmod}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="h-4 w-4 inline-block ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            value={editinput.input}
            onChange={(e) =>
              setEditinput({ ...editinput, input: e.target.value })
            }
            placeholder="Edit title..."
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            value={editinput.message}
            onChange={(e) =>
              setEditinput({ ...editinput, message: e.target.value })
            }
            placeholder="Edit message..."
            className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            rows="4"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-5">
            <button
              onClick={cancileditmod}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={updateinpute}
              className="px-5 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModelopen;
