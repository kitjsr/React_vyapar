import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Additem.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router';

export const Additem = () => {
  return (
    <Container className='head'>
        <Row className='head1'>
            <Col md={6}>
                <h3>Add Item</h3>
            </Col>
            <Col md={6}>
                <p><CloseButton /></p>
            </Col>
        </Row>
        <Form>
            <Row className='head2'>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Item name" required className='from'/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="Item HSN" required className='from' />
                    </Form.Group>
                </Col>
                <Col md={2} className='from1'>
                    <a href=''>SELECT UNIT</a>
                </Col>
                <Col md={4} className='from2'>
                    <p><Link to="/additem">Add item image</Link></p>
                </Col>
            </Row>
            <Row className='head5'>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Select aria-label="Default select example" className='from'>
                            <option>Category</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    
                </Col>
                <Col md={3}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="Item Code" required className='from' />
                    </Form.Group>
                </Col>
            </Row>
        <Row className='head3'>
            <Col md={1} className='price'>
                <p><Link to="">Pricing</Link></p>
            </Col>
            <Col md={1} className='stock'>
                <p><Link to="">Stock</Link></p>
            </Col>
            <Col md={10}></Col>
        </Row>
        <Row className='price1'>
            <Col>
                <Row className='price2'>
                    <Col>
                        <p>Sale Price</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Form>
    </Container>
  )
}

export default Additem
