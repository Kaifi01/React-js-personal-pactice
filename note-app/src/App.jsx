
import { useState } from 'react'
import './App.css'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {
     const [notes,setNotes]=useState([]);
     const [opendeletemode,setopendelmode]=useState(false)
     const [selectid,setSelectId]=useState(null);
   const addnote=(value)=>{
    setNotes([...notes,{id:Date.now(),...value}])
   }
   console.log(notes);
           const opendelmode=(id)=>{
            setopendelmode(true);
             setSelectId(id)
           }
  return (
   <>
    <NoteForm  addnote={ addnote} />
    <NoteList notes={notes} opendelmode={opendelmode}/> 
    
   </>
   
   
  )
}

export default App
