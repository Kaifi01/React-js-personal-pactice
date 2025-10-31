
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import { blog } from './Data/Blog'

function App() {
  let headerinfo={
    email:"Roni2001@gmail.com",
    phone:"8145911765"
  }

  return (
   <>
   <Header headerinfo={headerinfo} cname="mallickenterprice"/>

   <div className='flex flex-wrap gap-5 justify-center m-auto mt-10 mb-10 w-[1320px]'>
     {blog.map((v,i)=>{
      return (
        <Card pitems={v} key={i}/>
      )
     })}
    </div>
  
    <Footer/>
   </>
  )
}

export default App
