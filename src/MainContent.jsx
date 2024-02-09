import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftContainer from './LeftContainer/LeftContainer.jsx'
import RightContainer from './RightContainer/RightContainer.jsx'


function MainContent() {
  return (
    <>
            <Row>
                <Col className='border border-dark d-flex justify-content-center'>
                    <LeftContainer />
                </Col>
                <Col className='border border-dark d-flex flex-column align-items-center'>
                    <RightContainer />
                </Col>
            </Row>
    </>
  )
}

export default MainContent