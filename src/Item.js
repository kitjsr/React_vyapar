import React from 'react'
import './Item.css';
import { Col, Container, Row } from 'react-bootstrap'

export const Item = () => {
  return (
    <Container className='it'>
        <Row>
            <Col>
                <h3>Add item</h3>
            </Col>
        </Row>
    </Container>
  )
}

export default Item
