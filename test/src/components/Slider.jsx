import React from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='ms-2' style={{ width: "240px" }}>
            <aside className='p-2 rounded-2 flex-column d-flex' style={{ backgroundColor: 'lightblue', height: "calc(100vh - 15vh )" }}>
                <ul className='nav flex-column'>
                    <li className='nav-item mb-2'><Link className='nav-link text-black' to="/">DashBoard</Link></li>
                    <li className='nav-item mb-2'><Link className='nav-link text-black' to="/tasks">Tasks</Link></li>
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