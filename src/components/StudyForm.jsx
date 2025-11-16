import React, { useState } from "react";
import { usestudy } from "../context/Context";

const StudyForm = () => {
  const { study } = usestudy();

  const [date, setDate] = useState("");
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  const [startam, setStartAm] = useState("AM");
  const [endam, setEndAm] = useState("AM");
  const [topic, setTopic] = useState("");

  const handleSubmit = () => {
    if (!date || !starttime || !endtime || !topic.trim()) {
      alert("All fields are required!");
      return;
    }

    study(date, starttime, endtime, startam, endam, topic);
    reset();
  };

  const reset = () => {
    setDate("");
    setStartTime("");
    setEndTime("");
    setStartAm("AM");
    setEndAm("AM");
    setTopic("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl p-6 md:p-10 space-y-8">

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">📘 Study Planner</h1>
          <p className="text-gray-700">Plan your daily study schedule easily</p>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-900">📅 Select Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border bg-white p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Time Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Start Time */}
          <div className="space-y-2">
            <label className="font-semibold text-gray-900">⏳ Start Time</label>
            <div className="flex gap-3">
              <input
                type="time"
                value={starttime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full border bg-white p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={startam}
                onChange={(e) => setStartAm(e.target.value)}
                className="border p-3 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          {/* End Time */}
          <div className="space-y-2">
            <label className="font-semibold text-gray-900">⏱ End Time</label>
            <div className="flex gap-3">
              <input
                type="time"
                value={endtime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full border bg-white p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={endam}
                onChange={(e) => setEndAm(e.target.value)}
                className="border p-3 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-500"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

        </div>

        {/* Topic */}
        <div className="space-y-2">
          <label className="font-semibold text-gray-900">📘 Topic / Title</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Ex: React Hooks, JS Functions, MongoDB Queries"
            className="w-full border bg-white p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-300 text-gray-900 rounded-xl hover:bg-gray-400 transition shadow-md"
          >
            Reset
          </button>

          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default StudyForm;
