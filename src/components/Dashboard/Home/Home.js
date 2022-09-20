import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "../List/List";
import Header from "../Header/Header";
import "./Home.css";
import { useSelector } from "react-redux";

const Home = ({ employees }) => {
  const { loginStatus: status } = useSelector((state) => state.toggle || false);

  return (
    <>
      
        {status ? (
        <>
          <Container className="homeContainer">
            <header>
              <Header heading={"Welcome to AdTech Corp"} />
            </header>
            <Row>
              <header>
                <Header heading={"Employee Management System"} />
              </header>
              <Col>
                <List employees={employees} />
              </Col>
            </Row>
            </Container>
          </>
        ) : (

          <header className="homeContainer" >

            <Header heading={"Need To Login first"} />
          </header>

          
        )}
      
    </>
  );
};

export default Home;
