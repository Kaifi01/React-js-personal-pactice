import React from 'react'
import StudyForm from './StudyForm'
import { UserProvider } from '../context/Context'
import StudyList from './StudyList'

const Home = () => {
  return (
  <>
  <UserProvider>
  <StudyForm/>
  <StudyList/>
  </UserProvider>

  </>
  )
}

export default Home