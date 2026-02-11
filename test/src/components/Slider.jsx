import React from 'react'
import { Link } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

const Slider = () => {
    const [border, setBorder] = useState(false);

    return (
        <div className='ms-2' style={{ width: "240px" }}>
            <aside className='p-2 rounded-2 flex-column d-flex' style={{ backgroundColor: 'lightblue', height: "calc(100vh - 15vh )" }}>
                <ul className='nav flex-column'>
                    <h5 className='mb-4 m-2' style={{ color: 'gray' }}>Menu</h5>
                    <Button variant='light' onClick={() => setBorder(!border)} className={border ? "" : ""} style={{ backgroundColor: 'transparent', padding: '0px 10px', border: 'none' }}>
                        <li className='nav-item mb-2 fs-5'><Link className='nav-link text-black' to="/"><MdDashboard className='me-2' size={25} /> DashBoard</Link></li>
                    </Button>
                    <Button>
                        <li className='nav-item mb-2'><Link className='nav-link text-black' to="/tasks">Tasks</Link></li>
                    </Button>
                    <li className='nav-item mb-2'><Link className='nav-link text-black' to="/calendar">Calendar</Link></li>
                    <li className='nav-item mb-2'><Link className='nav-link text-black' to="/analytics">Analytics</Link></li>
                    <li className='nav-item mb-2'><Link className='nav-link text-black' to="/team">Team</Link></li>
                </ul>
                <div className="mt-auto">
                    <ul className=''>
                        <p className=''>general</p>
                        <li className='nav-item mb-3'><Link className='nav-link text-black' to="">Settings</Link></li>
                        <li className='nav-item mb-3'><Link className='nav-link text-black' to="">Help</Link></li>
                        <li className='nav-item mb-3'><Link className='nav-link text-black' to="">Logout</Link></li>
                    </ul>
                </div>

            </aside>
        </div>
    )
}

export default Slider