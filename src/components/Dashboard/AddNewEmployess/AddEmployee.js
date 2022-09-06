import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";
import { dummyData } from "../../../utils/dummyData";
import './AddNewEmployee.css'

const AddEmployee = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");

  const addEmployee = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !employeeId || !department) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    let newEmployee = {
      firstName,
      lastName,
      employeeId,
      department,
    };
    dummyData.push(newEmployee);
    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      navigate("/employee");
    }, 1800);
  };

  return (
    <Form className="addNewEmpForm">
      <Form.Group className="mb-3 formInput" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <input
          type="text"
          placeholder="FirstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 formInput" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <input
          type="text"
          placeholder="LastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 formInput" controlId="formBasicEmployeId">
        <Form.Label>Employee Id</Form.Label>
        <input
          type="text"
          placeholder="Employee Id"
          value={employeeId}
          onChange={(event) => setEmployeeId(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 formInput" controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
      </Form.Group>
      <Button className='addBtn' onClick={addEmployee}>Add Employee</Button>
    </Form>
  );
};

export default AddEmployee;
