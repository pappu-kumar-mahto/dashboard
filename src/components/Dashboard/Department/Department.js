import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "../Header/Header";
import List from "../List/List";
import './Department.css'
const Department = ({ employees }) => {
  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate("/addnewemployee");
  };
  return (
    <div className="container departmentContainer">
      <Header heading={"Department Details"} />
      <Button className='addNewEmpBtn' variant="secondary" onClick={addNewEmployee}>
        Add New Department
      </Button>
      <List employees={employees} />
    </div>
  );
};

export default Department;
