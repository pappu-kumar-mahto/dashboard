import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import List from "../List/List";
import Header from "../Header/Header";
import "./Employee.css";
const EmployeeList = ({ employees }) => {
  const { loginStatus: status } = useSelector((state) => state.toggle);

  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate("/addnewemployee");
  };
  return (
  <>
      {status ? (<div className="container EmployeeContainer">
      <Header heading={"Employee List"} />
      <Button
        className="addNewEmpBtn"
        variant="secondary"
        onClick={addNewEmployee}
      >
        Add New Employee
      </Button>
      <List employees={employees} />
    </div>) : (<Container className="EmployeeContainer"><Header heading={"Need to Login first"} /></Container>)}
  </>
    
  );
};

export default EmployeeList;
