import React from 'react'
import './List.css'
const List = ({employees}) => {
  return (
    <div className='contain-table'>
      
      <table className='striped-table'>
        <thead>
          <tr>
            <th>Emp. Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          
            {
              employees.length >0  ? (
                employees.map((employee, idx) => (
                  <tr key={idx}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.department}</td>
                  </tr>
                ))
              ):''
            }
          
        </tbody>
      </table>
    </div>
  )
}

export default List
