import React from 'react'
import heart from '../assets/heart.png'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const HeartCard = () => {
  return (
    <>
        <CardGroup className='py-5 px-3 shadow-4'>
            <Card 
                className='border-2 border-dark'
                style={{ width: '675px', backgroundColor: '#F5F5F5', boxShadow: ' 0 8px 0 8px 0 #DF80AC'}}
            >
            <Image
                src={heart}
                alt='Heart'
                style={{ width: '40%' }}
                className='p-5 m-auto'
            />
            </Card>
      </CardGroup>
    </>
  )
}

export default HeartCard