import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CitationCard() {
  return (
    <>
        <CardGroup className='py-4 px-3 shadow-4'>
            <Card className='border-2 border-dark'>
                <Card.Body>
                <Card.Text className='text-uppercase fs-8 fw-bold'>
                I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.
                </Card.Text>
                </Card.Body>
                <Card.Title className='text-end px-4'>- MICHAEL JORDAN</Card.Title>
            </Card>
        </CardGroup>
    </>
  )
}

export default CitationCard