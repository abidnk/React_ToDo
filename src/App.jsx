import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ToDo from './components/ToDo';

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <ToDo/>
   </div>
  )
}

export default App
