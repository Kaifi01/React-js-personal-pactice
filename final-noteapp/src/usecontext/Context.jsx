import { createContext, useState } from "react";
import DeleteModel from "../components/DeleteModel";
import EditModelopen from "../components/EditModelopen";

export const NoteContext = createContext();
export const NoteProvider = ({ children }) => {
  const [note, setNote] = useState([]);
  const [input, setInput] = useState("");
  const [message, setmessage] = useState("");
  const [selectid, setSelectId] = useState(null);
  const [opendelmod, setDelmodelopen] = useState(false);
  const [editmode,seteditmodelopen]=useState(false);
  const addnote = (value) => {
    setNote([...note, { id: Date.now(), ...value }]);
  };
  const delmodfunc = (id) => {
    setSelectId(id);
    setDelmodelopen(true);
  };
  const closedelmodel = () => {
    setDelmodelopen(false);
  };
  const confimdelete = () => {
    setNote(note.filter((item) => item.id !== selectid));
    setDelmodelopen(false);
  };
  const editmodelfunc=(id)=>{
   setSelectId(id);
   seteditmodelopen(true)
  } 
   const cancileditmod=()=>{
    seteditmodelopen(false)
   }
   const cureentvalue=note.find((item)=>item.id ===selectid );
   const updatevalue=(newval)=>{
    setNote(note.map((item)=>item.id=== selectid ? {...item,...newval}:item));
     seteditmodelopen(false)
   }
  return (
    <NoteContext.Provider
      value={{
        note,
        setNote,
        addnote,
        input,
        setInput,
        message,
        setmessage,
        delmodfunc,
        closedelmodel,
        confimdelete,
         editmodelfunc,
          cancileditmod,
          cureentvalue,
          updatevalue,
          cancileditmod
      }}
    >
      {children}
      {opendelmod && <DeleteModel />}
      {editmode && <EditModelopen/>}
    </NoteContext.Provider>
  );
};
