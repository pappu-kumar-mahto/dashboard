import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import List from '../List/List'
import Header from '../Header/Header'
import './Home.css'
const Home = ({employees }) => {
  return (
      <Container  className='homeContainer'>
            <header><Header heading={'Welcome to AdTech Corp'} /></header>
          <Row >
            <header><Header heading={'Employee Management System'} /></header>
              <Col><List employees={employees} /></Col>
          </Row>
    </Container>
  )
}

export default Home

