import React, { useState } from 'react'

const FeedbaFrom = ({ addfeeds}) => {
  const [input,setinput]=useState("");
  const [textarea,setTextarea]=useState("");
    const addvalue=(e)=>{
       e.preventDefault();
        addfeeds({input,textarea});
        setinput("");
        setTextarea("");
    }
     

  return (
   <>
   
 
  <form>
    <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
      <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
        Feedback
      </h2>
      <p className="mb-5 leading-relaxed text-gray-600">
        If you had any issues or you liked our product, please share with us!
      </p>
      <div className="mb-4">
        <label  className="text-sm leading-7 text-gray-600">
          Name
        </label>
        <input
        
        value={input}
        onChange={(e)=>setinput(e.target.value)}
          type="text"
         
          className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-sm leading-7 text-gray-600">
          Message
        </label>
        <input
        value={textarea}
        onChange={(e)=>setTextarea(e.target.value)}
          id="message"
          name="message"
          type='message'
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          defaultValue={""}
        />
      </div>
      <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none" onClick={addvalue}>
        Send
      </button>
      <p className="mt-3 text-xs text-gray-500">
        Feel free to connect with us on social media platforms.
      </p>
    </div>
  </form>
</>


  )
}

export default FeedbaFrom