import React from "react";

const FeedbaList = ({ feeds,opendelmode,openeditmodel }) => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-600 mb-8">
          Feedback List
        </h1>

        {/* 🌟 Grid layout for all feedback cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeds.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-purple-400 to-indigo-500 
                         p-6 rounded-2xl shadow-lg text-white hover:scale-105 
                         transform transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{item.input}</h2>
                <div className="flex gap-2">
                  <button
                    className="bg-white/20 px-3 py-1 rounded-md text-sm 
                               hover:bg-white/30 transition"
                              onClick={()=>openeditmodel(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500/80 px-3 py-1 rounded-md text-sm 
                               hover:bg-red-600 transition"
                               onClick={()=>opendelmode(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <p className="leading-relaxed text-white/90">{item.textarea}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbaList;
