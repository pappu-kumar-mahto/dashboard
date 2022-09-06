import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import List from './List'
import Header from './Header'
const Home = ({employees }) => {
    const navigate = useNavigate()
    const addEmployee = () => {
        navigate('/employee')
    }
    const department = () => {
        navigate('/department')
    }

    const divStyle = {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '15px',
        padding: '10px',
        cursor:'pointer'
    }

  return (
      <Container>
          <header><Header heading={'Employee Management System'} /></header>
          <Row>
              <Col sm={4} style={divStyle}>
                  <div>Home</div>
                  <div onClick={addEmployee}>Employee</div>
                  <div onClick={department}>Department</div>
              </Col>
              <Col sm={8}><List employees={employees} /></Col>
          </Row>
    </Container>
  )
}

export default Home

