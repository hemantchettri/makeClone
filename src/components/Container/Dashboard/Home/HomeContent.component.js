import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeContent() {
    return (
        <div className='col-lg-12 mt-5'>
            <Card style={{ height: "400px" }}>
                <Card.Body style={{ marginTop: "150px" }}>
                    <Link to="/member/upload">
                        <h3 className="fontNormal"><i className="fas fa-upload" />Verify List</h3>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomeContent;