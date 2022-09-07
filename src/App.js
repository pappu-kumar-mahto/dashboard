import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Dashboard/Home/Home'
import AddEmployee from './components/Dashboard/AddNewEmployess/AddEmployee'
import EmployeeList from './components/Dashboard/Employee/EmployeeList'
import Department from './components/Dashboard/Department/Department'
import Login from './components/Login/Login'
import { dummyData } from './utils/dummyData'
import Navbar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <BrowserRouter>
      <div>
      <Navbar/>
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


