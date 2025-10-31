import React from 'react'

const NoteList = ({notes,opendelmode}) => {
  return (
    <>

    { notes.map((item)=>(   
    <div className="relative p-8 overflow-hidden rounded-xl min-h-28 max-w-96 shadow h-fit w-full bg-cool-950 dark:text-cool-100 transition-all duration-200 border border-cool-300 dark:border-cool-700 group hover:shadow" key={item.id}>
  {/* Efecto de círculo degradado como fondo */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-2xl">
    <div
      className="absolute w-20 h-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-700 via-fuchsia-800 to-teal-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-soft-light  "
      style={{ top: "var(--mouse-y)", left: "var(--mouse-x)" }}
    />
  </div>
  <button onClick={()=>opendelmode(item.id)}>Del</button>
  {/* Contenido de la tarjeta */}
  <h2 className="text-xl font-bold mb-2 relative ">{item.title}</h2>
  <p className="text-gray-700 relative">{item.massage}</p>
</div>
))

    }
    </>
  )
}

export default NoteList