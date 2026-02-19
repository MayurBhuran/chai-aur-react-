import { use, useState } from 'react'
import{useDispatch} from 'react-redux'
import { useEffect } from 'react';
import './App.css'
import authService, { AuthService } from './appwrite/auth';
import { login,logout } from './store/authslice';

function App() {
const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
  authService.getCurrentUser()
  .then((userData) => {
    if(userData) {
      dispatch(login(userData));
    } else {
      dispatch(logout());
    }

  })
}, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap 
    content-between bg-grey-400">
     <div className='w-fulll block'>
      <Header/>
      <main></main>
      <Footer/>
     </div>
    </div>
  ) :null;
  
}

export default App
