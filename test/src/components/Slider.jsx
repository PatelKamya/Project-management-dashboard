import React from 'react'
import { Link } from 'react-router-dom';

const Slider = ({ isOpen }) => {
    return (
        <aside className={`slider ${isOpen ? "open" : ""}`}>
            <ul>
                <li><Link to="/">DashBorad</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/team">Team</Link></li>
            </ul>
            <h2>General</h2>
            <ul>
                <li><Link to="">Settings</Link></li>
                <li><Link to="">Help</Link></li>
                <li><Link to="">Logout</Link></li>
            </ul>

        </aside>
    )
}

export default Slider