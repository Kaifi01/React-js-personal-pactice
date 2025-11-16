import React, { useEffect, useState } from 'react'

const EditModel = ({cancileditmod,currentval,updatestudy}) => {
    const [date,setdate]=useState("");
    const [starttime,setStarttime]=useState("");
    const [startam,setstartam]=useState("");
    const [endtime,setendtime]=useState("");
    const [endam,setendam]=useState("");
    const [topic,settopic]=useState("")
   useEffect(()=>{
    if(currentval){
 setdate(currentval.date);
 setStarttime(currentval.starttime);
   setstartam(currentval.startam);
   setendtime(currentval.endtime)
   setendam(currentval.endam)
   settopic(currentval.topic)
    }
  
   },[])
   const handleupdatesubmit=()=>{
    updatestudy({
        date,
        starttime,
        startam,
        endtime,
        endam,
        topic
    })
   }
  return (
   <>
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg space-y-4">

        <h2 className="text-xl font-bold text-center text-blue-600">
          ✏ Edit Study Plan
        </h2>

        {/* Date */}
        <input
        value={date}
          type="date"
            onChange={(e)=>setdate(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Start Time */}
        <div className="flex gap-3">
          <input
            type="time"
           value={starttime}
           onChange={(e)=>setStarttime(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
          value={startam}
            onChange={(e)=>setstartam(e.target.value)}
            className="border p-2 rounded"
          >
            <option >AM</option>
            <option>PM</option>
          </select>
        </div>

        {/* End Time */}
        <div className="flex gap-3">
          <input
            type="time"
           value={endtime}
           onChange={(e)=>setendtime(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
             value={endam}
             onClick={(e)=>setendam(e.target.value)}
            className="border p-2 rounded"
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>

        {/* Topic */}
        <input
          type="text"
         value={topic}
         onChange={(e)=>settopic(e.target.value)}
          className="border p-2 rounded w-full"
        />

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-3">
          <button
          onClick={cancileditmod}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>

          <button
           onClick={handleupdatesubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  
   </>
  )
}

export default EditModel