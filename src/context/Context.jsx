import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import DeleteMode from "../components/DeleteMode";
import EditModel from "../components/EditModel";

export const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [note, setNote] = useState([]);
  const [flag,setfalg]=useState(false);
  const [delmod,setdelmod]=useState(false)
  const [selectid,setSelectid]=useState(null)
  const [editmodelopen,setedigtmodelopen]=useState(false)

  const study = async (date, starttime, endtime, startam, endam, topic) => {
    const user = {

      date: date,
      starttime: starttime,
      endtime: endtime,
      startam: startam,
      endam: endam,
      topic: topic,
    };
    try {
      setfalg(true)
      await axios.post("http://localhost:8000/studydata", user);
      
     getvalue()
   
    } catch (error) {
      console.log(error.message);
    }finally{
  setfalg(false)
    }
  };

  const getvalue = async () => {
    try {
      setfalg(true)
      const res = await axios.get("http://localhost:8000/studydata");
      setNote(res.data);
     
    } catch (error) {
      console.log(error.message);
    }finally{
 setfalg(false)
    }
  };
  useEffect(()=>{
    getvalue()
  },[])

 const  detelemodelfuncytion=(id)=>{
  setSelectid(id)
     setdelmod(true)
 }
  const deltemodclose=()=>{
    setdelmod(false)
  } 

  const deltemodel=()=>{
    try {
      axios.delete(`http://localhost:8000/studydata/${selectid}`)
        setNote((prev)=>prev.filter((item)=>item.id!==selectid))
        setdelmod(false)
    } catch (error) {
      console.log(error.message);
      
    }
  }
 const editmodelopenfunc=(id)=>{
  setSelectid(id)
  setedigtmodelopen(true)

 }
 const cancileditmod=()=>{
  setedigtmodelopen(false)
 }
 const currentval=note.find((item)=>item.id===selectid);
 const updatestudy=async(updatedData)=>{
  try {
    await axios.put(`http://localhost:8000/studydata/${selectid}`,updatedData);
    setNote((prev)=>prev.map((item)=>item.id===selectid ?{...item,...updatedData}: item))
    setedigtmodelopen(false)
  } catch (error) {
    console.log(error.message);
    
  }
 }
  return (
  <>
  {editmodelopen && <EditModel cancileditmod={cancileditmod} currentval={currentval}  updatestudy={ updatestudy}/>}
    {delmod && <DeleteMode  deltemodclose={deltemodclose} deltemodel={deltemodel}/>}
    <Usercontext.Provider value={{ study,note,detelemodelfuncytion,editmodelopenfunc }}>{children}</Usercontext.Provider>
     </>
  );
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const usestudy = () => useContext(Usercontext);
