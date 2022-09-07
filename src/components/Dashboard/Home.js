import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import List from './List'
import Header from './Header'
const Home = ({employees }) => {
    const divStyle = {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '15px',
        marginLeft:'95px',
        padding: '10px',
        position: 'absolute',
        top: '5%',
        left:'20%',
    }

  return (
      <Container style={divStyle}>
            <header><Header heading={'Welcome to AdTech Corp'} /></header>
          <Row >
            <header><Header heading={'Employee Management System'} /></header>
              <Col><List employees={employees} /></Col>
          </Row>
    </Container>
  )
}

export default Home

