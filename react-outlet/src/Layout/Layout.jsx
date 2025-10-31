import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
    <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>about</Link>
    <Link to='/contact'> Contact</Link>
    </div>
     <div>
        <Outlet/>
     </div>
    </>
  )
}

export default Layout