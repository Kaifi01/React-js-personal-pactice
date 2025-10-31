
import { useState } from 'react'
import './App.css'
import FeedbaFrom from './components/FeedbaFrom'
import FeedbaList from './components/FeedbaList';
import DeleteModel from './components/DeleteModel';
import EditModel from './components/EditModel';

function App() {
    const [feeds,setFeeds]=useState([]);
      const [openDelMod,setDelModl]=useState(false);
      const [editmodel,seteditmodel]=useState(false);
      const[selectid,setselectid]=useState(null)
    const addfeeds=(value)=>{
      setFeeds([...feeds,{id:Date.now(),...value}])
    } 
    
   
  // console.log(feeds);
     const opendelmode=(id)=>{
      setDelModl(true);
      setselectid(id)
     }         
       const confimdelmodel=()=>{
        setFeeds(feeds.filter((item)=>item.id!==selectid))
        setDelModl(false)
       }  
          
       const openeditmodel=(id)=>{
        setselectid(id);
        seteditmodel(true);
       }
       const currentval=feeds.find((item)=>item.id===selectid);
       const updateval=(newval)=>{
   setFeeds(feeds.map((item)=> item.id===selectid?{...item,...newval}:item ))
   seteditmodel(false)
       }
       const canciledit=()=>{
        seteditmodel(false)
       }
  return (
 <>
    <FeedbaFrom  addfeeds={ addfeeds}/>
       <FeedbaList feeds={feeds} opendelmode={opendelmode}  openeditmodel={openeditmodel} />
      {openDelMod && 
      <DeleteModel confimdelmodel={confimdelmodel}/>

      }
      {editmodel && 
          <EditModel  currentval={currentval} updateval={updateval} confimdelmodel={confimdelmodel} canciledit={canciledit}/>
      }
 </>
  )
}

export default App
