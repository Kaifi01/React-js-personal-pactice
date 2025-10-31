import React, { useContext } from "react";
import { NoteContext } from "../usecontext/Context";

const NoteList = () => {
  const { note, delmodfunc, editmodelfunc } = useContext(NoteContext);

  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {note.length === 0 ? (
          <p className="text-gray-500 italic text-lg">
            No notes yet... Add your first one!
          </p>
        ) : (
          note.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-400 to-blue-500 text-white w-72 p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold tracking-wide">
                  {item.input}
                </h2>
              </div>

              {/* Message */}
              <p className="text-white/90 mb-5 leading-relaxed">
                {item.message}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-auto">
                <button
                  className="px-4 py-1 bg-white text-teal-600 rounded-lg font-semibold text-sm hover:bg-opacity-90 transition"
                  onClick={() => editmodelfunc(item.id)}
                >
                  ✏️ Edit
                </button>
                <button
                  className="px-4 py-1 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition"
                  onClick={() => delmodfunc(item.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default NoteList;
