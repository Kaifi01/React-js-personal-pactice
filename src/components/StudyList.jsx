import React from "react";
import { usestudy } from "../context/Context";

const StudyList = () => {
  const { note,detelemodelfuncytion,editmodelopenfunc} = usestudy();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        📚 Study History And Study Plan
      </h1>

      {note.length === 0 && (
        <p className="text-center text-gray-500">No study record found.</p>
      )}

      <div className="space-y-5">
        {note.map((item) => (
          <div
            key={item._id}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                📅 {item.date}
              </h2>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
                {item.topic}
              </span>
            </div>

            {/* Time */}
            <p className="mt-3 text-gray-700">
              🕒 <b>Time:</b> {item.starttime} {item.startam} — {item.endtime} {item.endam}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex gap-3">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 shadow" onClick={()=>editmodelopenfunc(item.id)}>
                Edit
              </button>

              <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow" onClick={()=>detelemodelfuncytion(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;
