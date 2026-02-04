import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { MdArrowOutward } from "react-icons/md";
import CardBody from 'react-bootstrap/esm/CardBody';
import Button from 'react-bootstrap/Button';
import { MdArrowDropUp } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom';
import AddProjects from '../../models/AddProjects';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';




const Dashboard = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='w-100' style={{ background: '' }}>
            <div className='d-flex justify-content-between'>
                <div className='ms-2'>
                    <h3>Dashboard</h3>
                    <p>Plan, Prioritize, and accomplish your task with ease.</p>
                </div>
                <div className='mt-3'>
                    <div className='d-flex gap-3' style={{ padding: '1px 20px' }}>
                        
                        <Button className='rounded-5 mb-1' onClick={() => setShow(true)}>
                            <HiOutlinePlusSm size={20} className='me-2' style={{ marginTop: '3px' }} /> Add Project
                        </Button>
                        <AddProjects show={show} handleClose={() => setShow(false)} />
                        <Button className='rounded-5 mb-1'>Import Data</Button>
                    </div>
                </div>
            </div>
            <Row className='mt-2 me-1 ms-1'>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100 rounded-4'>
                        <div className='m-2'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='mb-0 text-black fw-bold mt-1 fs-5'>Total Projects</h6>
                                <OverlayTrigger placement='bottom' overlay={<Tooltip id='tooltip-delete'>view details</Tooltip>}>
                                    <Link to='/projects'><MdArrowOutward className='border border-black rounded-circle p-1 fw-bolder' style={{ backgroundColor: '', color: 'black', borderWidth: "" }} size={25} /></Link>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <CardBody>
                            <h1 className='mb-3'>24</h1>
                            <div className='d-flex gap-2'>
                                <Button className='' style={{ padding: '0px 3px' }}>3 <MdArrowDropUp className='mt-1' /></Button>
                                <span>Increased from last month</span>
                            </div>
                        </CardBody>

                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100 rounded-4'>
                        <div className='m-2'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='mb-0 text-black fw-bold mt-1 fs-5'>Ended Projects</h6>
                                <div className='me-2 '><MdArrowOutward className='border border-black rounded-circle p-1 fw-bolder' style={{ backgroundColor: '', color: 'black', borderWidth: "" }} size={25} /></div>
                            </div>
                        </div>
                        <CardBody>
                            <h1 className='mb-3'>24</h1>
                            <div className='d-flex gap-2'>
                                <Button className='' style={{ padding: '0px 3px' }}>3 <MdArrowDropUp className='mt-1' /></Button>
                                <span>Increased from last month</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100 rounded-4'>
                        <div className='m-2'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='mb-0 text-black fw-bold mt-1 fs-5'>Running Projects</h6>
                                <div className='me-2 '><MdArrowOutward className='border border-black rounded-circle p-1 fw-bolder' style={{ backgroundColor: '', color: 'black', borderWidth: "" }} size={25} /></div>
                            </div>
                        </div>
                        <CardBody>
                            <h1 className='mb-3'>24</h1>
                            <div className='d-flex gap-2'>
                                <Button className='' style={{ padding: '0px 3px' }}>3 <MdArrowDropUp className='mt-1' /></Button>
                                <span>Increased from last month</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} className=''>
                    <Card className='h-100 rounded-4'>
                        <div className='m-2'>
                            <div className='d-flex justify-content-between'>
                                <h6 className='mb-0 text-black fw-bold mt-1 fs-5'>Pending Projects</h6>
                                <div className='me-2 '><MdArrowOutward className='border border-black rounded-circle p-1 fw-bolder' style={{ backgroundColor: '', color: 'black', borderWidth: "" }} size={25} /></div>
                            </div>
                        </div>
                        <CardBody>
                            <h1 className='mb-3'>2</h1>
                            <span>On discuss</span>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3 me-1 ms-1'>
                <Col lg={6} md={6}>
                    <Card>projects</Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>projects</Card>
                </Col>
                <Col lg={3} md={6}>
                    <Card>projects</Card>
                </Col>

            </Row>


        </div>
    )
}

export default Dashboard