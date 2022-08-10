import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Navbar from '../../../Header/Navbar.component';
import Sidebar from '../../../Header/Sidebar.component';
import PreviousRequests from './PreviousRequest.component';
import { toast, ToastContainer } from 'react-toastify';

function VerifyList() {

    const [file, setFile] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const uploadFile = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('file', file);
        axios.post('/api/v1/sanitize/batch-verification', formData)
            .then(res => {
                if (res.data.response === "insufficient_credits") {
                    toast.error("Insufficient Credits", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setLoading(false);
                } if (res.data.status === "success") {
                    setLoading(false);
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err);
                toast.error("Please Upload a file", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).finally(() => {
                setLoading(false);
            })
    }

    const downloadSample = (e) => {
        e.preventDefault();
        window.open('/api/v1/sanitize/get-sample-file', '_blank');
    }

    return (
        <div className="wrapper">
            <Sidebar />
            <div id="content">
                <Navbar />
                <h1>Verify list</h1>
                <div className='row'>
                    <ToastContainer />
                    <Card className="col-lg-5">
                        <Card.Body>
                            <Card.Title>Verify from file</Card.Title>
                            <Card.Text className="text-danger">*** Please upload .csv or .txt file only! ***</Card.Text>
                            <Form className="col-lg-8">
                                <Form.Group controlId="upload">
                                    <Form.Control type="file" onChange={fileHandler} accept=".csv, .txt" />
                                </Form.Group>
                                <Button className="mt-3" variant="dark" onClick={uploadFile} disabled={loading}> {loading ? 'Uploading...' : 'Upload'}</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card className="col-lg-5 ml-auto">
                        <Card.Body>
                            <Card.Title>Sample:</Card.Title>
                            <Card className='col-lg-6' style={{ textAlign: "center" }}>
                                <Card.Text className='fontNormal' style={{ fontSize: "1rem" }}>email@example.com,</Card.Text>
                                <Card.Text className='fontNormal' style={{ fontSize: "1rem" }}>yourname@yourbank.com,</Card.Text>
                                <Card.Text className='fontNormal' style={{ fontSize: "1rem" }}>testemail@gmail.org</Card.Text>
                            </Card>
                            <p style={{ fontWeight: "normal" }}>If you want to download sample file click: <Button variant="outline-success" style={{ justifyItem: "center" }} onClick={downloadSample}> <i className="fas fa-download" /> Download</Button></p>
                        </Card.Body>
                    </Card>
                </div>
                <PreviousRequests />
            </div>
        </div>
    )
}

export default VerifyList;