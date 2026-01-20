import React from 'react'
import { TiSpiral } from "react-icons/ti";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FiMail } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";



const Header = () => {
    return (
        <div className=''>
            <div className='rounded-3 m-4' style={{ backgroundColor: 'gray' }}>
                <Navbar className='d-flex justify-content-between me-2'>
                    <div className='d-flex gap-1 m-1'>
                        <div><TiSpiral className='' size={40} /></div>
                        <Navbar.Brand className=''>Donezo</Navbar.Brand>
                    </div>
                    <div className='d-flex gap-2'>
                        <div><FiMail /></div>
                        <div><IoNotificationsOutline /></div>
                    </div>
                    <div className='profile-container'>

                    </div>
                </Navbar>
            </div>
        </div>
    )
}

export default Header