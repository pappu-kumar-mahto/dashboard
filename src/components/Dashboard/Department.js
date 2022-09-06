import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Header from "./Header";
import List from "./List";
const Department = ({ employees }) => {
  const navigate = useNavigate();
  const addNewEmpBtn = {
    width: "15%",
    height: "2.5rem",
    margin: "15px 0",
    fontWeight: 700,
  };
  const addNewEmployee = () => {
    navigate("/addnewemployee");
  };
  return (
    <div className="container">
      <Header heading={"Department Details"} />
      <Button style={addNewEmpBtn} variant="secondary" onClick={addNewEmployee}>
        Add New Department
      </Button>
      <List employees={employees} />
    </div>
  );
};

export default Department;
