import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../Styles/navibar.css'

function Navibar() {
    return (
        <div className='grid-container'>
            {/* <ul>
                <li><Link className="active" to="/">GuitHub Jobs</Link></li>
                <li><Link to="#news">All jobs</Link></li>
                <li><Link to="#contact">Post a job</Link></li>
                <li className="dir"><Link to="#about">How it works</Link></li>
            </ul> */}
            <Navbar bg="primary" variant="dark">
                <Link to="/" className='nav'>GuitHub Jobs</Link>
                <Nav className="mr-auto">
                    <Link to="/all-jobs" className='nav' >All jobs</Link>
                    <Link to="/post-a-job" className='nav'>Post a job</Link>
                    <Link to="/how-it-works" className='nav dir' >How it works</Link>
                </Nav>
            </Navbar>

        </div>
    );
}

export default Navibar;