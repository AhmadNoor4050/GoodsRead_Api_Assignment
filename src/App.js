import React from 'react'
import ButtonAppBar from './AppBar'
import {  BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import SingleBook from './SingleBook'
import AllBooks from './AllBooks';
import Signup from './auth/Signup';
import Login from './auth/Login';
import UseAutocomplete from './home'

function App() {
  return (
    <div>
      {/* <ButtonAppBar /> */}

      <BrowserRouter>
      <ButtonAppBar />
        <Routes>
          <Route  path="/" element={<UseAutocomplete />} />
          <Route path="/SingleBook/:id" element={<SingleBook />} />
          <Route path="/AllBooks/:query" element={<AllBooks />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          </Routes>
          </BrowserRouter>


    </div>
  )
}

export default App
