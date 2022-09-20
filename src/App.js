import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {AddEmployee,EmployeeList,Department,Home,Login,Navbar} from './components'
import { dummyData } from './utils/dummyData'

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


