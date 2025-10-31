
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { UserProvider } from './use-context/Context'

function App() {
  

  return (
   <>
   <UserProvider >
 <TodoForm/>
 <TodoList/>
   </UserProvider>
  
   
   </>
  )
}

export default App
