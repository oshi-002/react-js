// import { useState } from 'react'
// import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'



function App() {
  

  return (
    <UserContextProvider>
    <h1>React Login Page</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
