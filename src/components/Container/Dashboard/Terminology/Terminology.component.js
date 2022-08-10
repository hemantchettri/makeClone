import React from 'react'
import Sidebar from '../../../Header/Sidebar.component';
import Navbar from '../../../Header/Navbar.component';
import './terminology.css'
import Status from './Status';
import Reason from './Reason';
import DomainDetails from './DomainDetails';
import AccountDetails from './AccountDetails';
import Other from './Other';

function Terminology() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div id="content">
                <Navbar />
                <h2 className='mb-3' style={{ fontWeight: "normal", fontSize: "30px" }}>Terminology</h2>
                <Status />
                <Reason />
                <DomainDetails />
                <AccountDetails />
                <Other />
            </div>
        </div>
    )
}

export default Terminology;