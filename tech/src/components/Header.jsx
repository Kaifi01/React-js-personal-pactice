import React from 'react'

const Header = ({ headerinfo,cname}) => {
  
     
  return (
    <>
    
    <h3>Header Part</h3>
   <h1> {headerinfo.email} {cname}</h1>
  <div>
     <img width={50} src="/src/images/bird-colorful-gradient-design-vector_343694-2506.jpg" alt="" />
  </div>

    </>
  )
}

export default Header