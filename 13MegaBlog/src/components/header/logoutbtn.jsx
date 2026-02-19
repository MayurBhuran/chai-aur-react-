import React from 'react'
import {usedsispatch} from 'react-redux'
import{logout} from '../../store/authslice'

function Logoutbtn() {
  const dispatch = usedsispatch()
  const logouthandler = () => {
    authService.logout().then(() => {
      dispatch(logout())  
    })
  return (
    <button
    className='inline-bock px-6 py-2
    duration-300 hover:bg-blue-800 text-white rounded-full'>

    Logout</button>
  )
}
}


export default Logoutbtn
