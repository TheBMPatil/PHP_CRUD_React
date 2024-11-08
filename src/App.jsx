import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import UserList from './Components/UserList'
import { Route, Routes } from "react-router-dom";
import Footer from './Components/Footer'
import AddUser from './Components/AddUser'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userList' element={<UserList />} />
        <Route path='/adduser' element={<AddUser />} />
      </Routes>
      <Footer />

    </div >
  )
}

export default App
