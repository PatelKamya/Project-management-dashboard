import React, { useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
        // Add your login logic here
    };

    return (
        <div className='w-100 vh-100' style={{ backgroundColor: '#e0f2f1' }}>
        <div className='d-flex justify-content-center align-items-center w-100 mt-5'>

            <div className=' rounded-5' style={{ height: '60vh', width: '60%', backgroundColor: '#024005ff' }}>
                <Container className=''>
                    <h1 className='text-center mt-5' style={{ color: 'whitesmoke' }}>Login Page</h1>
                    <Row className='d-flex justify-content-center mt-5'>
                        <Col md="6">
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label style={{ color: 'whitesmoke' }}>Username</Form.Label>
                                        <Form.Control
                                            type='text'
                                            placeholder='Enter Username'
                                            name='username'
                                            value={formData.username}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12">
                                        <Form.Label style={{ color: 'whitesmoke' }}>Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            placeholder='Enter Password'
                                            name='password'
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Col md="12">
                                        <Button type='submit' variant='success' className='w-100 rounded-5'>Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
    )
}

export default Login