import { useState } from 'react'
import{ usedispatch} from 'react-redux'
import './App.css'
import { AuthService } from './appwrite/auth';

function App() {
const [loading, setLoading] = useState(true);
const dispatch = usedispatch();

  return (
    <>
     <h1>a blog with appwrite</h1>
    </>
  )
}

export default App
