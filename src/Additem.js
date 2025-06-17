import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap'
import './Additem.css';
import CloseButton from 'react-bootstrap/CloseButton';
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select unit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
            <Col md={6}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='base'>Base Unit</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Base unit</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Col>
            <Col md={6}>                
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='secondary'>Secondary Unit</Form.Label>
                    <Form.Select aria-label="Default select example">
                            <option>Secondary unit</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                    </Form.Select>
                    </Form.Group>
                </Form>
            </Col>
          </Row>

          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export const Additem = () => {
    const [modalShow, setModalShow] = useState(false);

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
                    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Select unit
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </>
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
