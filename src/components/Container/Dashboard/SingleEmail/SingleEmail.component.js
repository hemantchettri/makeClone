import axios from 'axios';
import React from 'react'
import { Card, Form, Button } from 'react-bootstrap';
import Navbar from '../../../Header/Navbar.component';
import Sidebar from '../../../Header/Sidebar.component';
import Requests from './Request.component';

function SingleEmail() {

    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('/api/v1/sanitize/single-verification', {
            email: email
        }).then(res => {
            if (res.status === 200) {
                setEmail('');
                window.location.reload();
            }
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <div className="wrapper">
            <Sidebar />
            <div id="content">
                <Navbar />

                <h1>Verify single email</h1>
                <Card className='col-lg-12'>
                    <Card.Body>
                        <Card.Title>Enter email adress that <strong> you want to verify </strong> </Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-4">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Ex: hemantchettri@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    </Form.Group>
                                </div>
                                <Button variant="primary" type="submit"> {loading ? 'Loading...' : 'Verify'} </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>

                <Requests />
            </div>
        </div>
    )
}

export default SingleEmail;