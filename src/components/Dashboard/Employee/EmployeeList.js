import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import List from "../List/List";
import Header from "../Header/Header";
import "./Employee.css";
const EmployeeList = ({ employees }) => {
  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate("/addnewemployee");
  };
  return (
    <div className="container EmployeeContainer">
      <Header heading={"Employee List"} />
      <Button
        className="addNewEmpBtn"
        variant="secondary"
        onClick={addNewEmployee}
      >
        Add New Employee
      </Button>
      <List employees={employees} />
    </div>
  );
};

export default EmployeeList;
