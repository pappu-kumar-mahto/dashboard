import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Button } from "react-bootstrap";
import Header from "../Header/Header";
import List from "../List/List";
import './Department.css'
const Department = ({ employees }) => {
  const { loginStatus: status } = useSelector((state) => state.toggle);
  const navigate = useNavigate();

  const addNewEmployee = () => {
    navigate("/addnewemployee");
  };
  return (
    <>
    {status ? (<div className="container departmentContainer">
      <Header heading={"Department Details"} />
      <Button className='addNewEmpBtn' variant="secondary" onClick={addNewEmployee}>
        Add New Department
      </Button>
      <List employees={employees} />
    </div>) : (<Container className="departmentContainer"><Header heading={"Need to Login first"} /></Container>)}
    </>
  );
};

export default Department;
