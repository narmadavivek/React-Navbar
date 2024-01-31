import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isMobile,setIsMobile] = useState(false);
    return (
        <nav className='navbar'>
        <h3 className='logo'>blogs</h3>
        <div className='nav-link'>
        <ul className= {isMobile ?'nav-links-mob':'nav-links'}>
            <Link to="/" className='all'>
                <li>All</li>
            </Link>
            <Link to="/fullstackdev" className='fullstackdev'>
                <li>Fullstackdev</li>
            </Link>
            <Link to="/datascience" className='datascience'>
                <li>Datascience</li>
            </Link>
            <Link to="/cybersecurity" className='cybersecurity'>
                <li>Cybersecurity</li>
            </Link>
            <Link to="/career" className='career'>
                <li>Career</li>
            </Link>
        </ul>
        </div>
        <button className="mob-menu-icon" onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <h1>X</h1> : <h1>=</h1>}
        </button>
        </nav>
    );
}

export default Navbar;
