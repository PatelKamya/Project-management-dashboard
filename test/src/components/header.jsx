import React from 'react'
import { TiSpiral } from "react-icons/ti";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { FiMail } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";



const Header = () => {
    return (

        <div className='nav-bar'>
            <div className='rounded-3'>
                <Navbar className='d-flex justify-content-between me-2'>
                    <div className='d-flex gap-2 '>
                        <div><TiSpiral className='ms-3' size={40} /></div>
                        <Navbar.Brand className=''>Donezo</Navbar.Brand>
                    </div>
                    <div className='d-flex '>
                        <div className='d-flex gap-5'>
                            <div><FiMail size={25} className='mt-4' /></div>
                            <div><IoNotificationsOutline size={25} className='mt-4 me-4' /></div>
                        </div>
                        <div className='d-flex gap-3'>

                            <div className="profile-container rounded-circle m-2" style={{ backgroundColor: 'pink' }}>
                                <RiAccountCircleLine size={60} />
                            </div>
                            <div className='me-4 mt-2'>
                                <span>username</span>
                                <p>kamyapatel521@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </Navbar>
            </div>
        </div>

    )
}

export default Header