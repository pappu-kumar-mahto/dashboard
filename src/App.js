import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'
import Home from './components/Dashboard/Home'
import AddEmployee from './components/Dashboard/AddNewEmployess/AddEmployee'
import EmployeeList from './components/Dashboard/EmployeeList'
import Department from './components/Dashboard/Department'
import Login from './components/Login/Login'
import { dummyData } from './utils/dummyData'
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/home' element={<Home employees={dummyData} />} />
          <Route path='/employee' element={<EmployeeList employees={dummyData}/>}/>
          <Route path='/addnewemployee' element={<AddEmployee/>}/>
          <Route path='/department' element={<Department employees={dummyData} />} />
          <Route path='/' element={<Login />} />
        </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App


