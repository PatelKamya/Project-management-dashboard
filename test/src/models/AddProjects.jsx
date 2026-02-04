import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import ModalBody from 'react-bootstrap/esm/ModalBody';
import ModalFooter from 'react-bootstrap/esm/ModalFooter';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const AddProjects = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({ projectName: '', projectDesc: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
    setFormData({ projectName: '', projectDesc: '' });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <ModalHeader closeButton>
        <Modal.Title id='contained-model-title-vcenter'>Add New Projects</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Project Name</Form.Label>
              <Form.Control 
                type='text'
                placeholder='Enter Project Name'
                name='projectName'
                value={formData.projectName}
                onChange={handleChange}
                required
              />      
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12">
              <Form.Label>Project Description</Form.Label>
              <Form.Control 
                type='text'
                placeholder='Enter Project Description'
                name='projectDesc'
                value={formData.projectDesc}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button variant='secondary' className='rounded-5' onClick={handleClose}>Cancel</Button>
        <Button variant='primary' className='rounded-5' onClick={handleSubmit}>Add Project</Button>
      </ModalFooter>
    </Modal>
  )
}

export default AddProjects