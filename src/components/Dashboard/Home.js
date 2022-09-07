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
        position: 'fixed',
        top:'10%'
    }

  return (
      <Container>
          <Row style={divStyle}>
            <header><Header heading={'Employee Management System'} /></header>
              <Col><List employees={employees} /></Col>
          </Row>
    </Container>
  )
}

export default Home

