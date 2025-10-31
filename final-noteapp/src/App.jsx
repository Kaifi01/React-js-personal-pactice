
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import { NoteProvider } from './usecontext/Context'

function App() {
  

  return (
  <>
  <NoteProvider>

    <NoteForm/>
    <NoteList/>
  </NoteProvider>
  </>
  )
}

export default App
