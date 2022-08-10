import axios from 'axios';
import React from 'react'
import Spinner from '../../Spinner';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Card } from 'react-bootstrap';

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const status = row.request.status === 'deliverable' ? <p className='text-success' style={{ fontWeight: "bold" }}>DELIVERABLE</p>
        : row.request.status === 'undeliverable' ? <p className='text-danger' style={{ fontWeight: "bold" }}>UNDELIVERABLE</p>
            : row.request.status === 'risky' ? <p className='text-warning' style={{ fontWeight: "bold" }}>RISKY</p>
                : row.request.status === 'unknown' ? <p className='text-secondary' style={{ fontWeight: "bold" }}>UNKNOWN</p>
                    : '';

    const reason = row.request.reason === 'accepted_email' ? <h6 className='badge badge-success'><strong>ACCEPTED EMAIL</strong></h6>
        : row.request.reason === 'low_deliverability' ? <h6 className='badge badge-warning' style={{ color: "white" }}><strong>LOW DELIVERABILIT`Y</strong></h6>
            : row.request.reason === 'low_quality' ? <h6 className='badge badge-warning' style={{ color: "white" }}><strong>LOW QUALITY</strong></h6>
                : row.request.reason === 'invalid_email' ? <h6 className='badge badge-danger'><strong>INVALID EMAIL</strong></h6>
                    : row.request.reason === 'invalid_domain' ? <h6 className='badge badge-danger'><strong>INVALID DOMAIN</strong></h6>
                        : row.request.reason === 'rejected_email' ? <h6 className='badge badge-danger'><strong>REJECTED EMAIL</strong></h6>
                            : row.request.reason === 'dns_error' ? <h6 className='badge badge-secondary'><strong>DNS ERROR</strong></h6>
                                : row.request.reason === 'unavailable_smtp' ? <h6 className='badge badge-secondary'><strong>UNAVAILABLE SMTP</strong></h6>
                                    : row.request.reason === 'unknown' ? <h6 className='badge badge-secondary'><strong>UNKNOWN</strong></h6>
                                        : '';

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row">
                    {row.request.email}
                </TableCell>
                <TableCell align="center">{status}</TableCell>
                <TableCell align="center">{reason}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div className='row'>
                            <div className="col-lg-4 mt-3 mb-3">
                                <Card style={{ backgroundColor: "#F9F9F9" }}>
                                    <p className='text-secondary' style={{ fontWeight: "bold" }}>Domain</p>
                                    <div className='singleEmailReq'>
                                        <div>
                                            <p>Name</p>
                                            <p>{row.request.domain.name}</p>
                                        </div>
                                        <div>
                                            <p>Accept All</p>
                                            <p>{row.request.domain.acceptAll}</p>
                                        </div>
                                        <div>
                                            <p>Disposable</p>
                                            <p>{row.request.domain.disposable}</p>
                                        </div>
                                        <div>
                                            <p>Free</p>
                                            <p>{row.request.domain.free}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3 mb-3">
                                <Card style={{ backgroundColor: "#F9F9F9" }}>
                                    <p className='text-secondary' style={{ fontWeight: "bold" }}>Account</p>
                                    <div className='singleEmailReq'>
                                        <div>
                                            <p>Role</p>
                                            <p>{row.request.account.role}</p>
                                        </div>
                                        <div>
                                            <p>Disabled</p>
                                            <p>{row.request.account.disabled}</p>
                                        </div>
                                        <div>
                                            <p>Full mailbox</p>
                                            <p>{row.request.account.fullMailbox}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-lg-4 mt-3 mb-3">
                                <Card style={{ backgroundColor: "#F9F9F9" }}>
                                    <p className='text-secondary' style={{ fontWeight: "bold" }}>Provider</p>
                                    <div className='singleEmailReq'>
                                        <div>
                                            <p>Domain</p>
                                            <p>{row.request.provider}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function Requests() {

    const [requests, setRequests] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios.get('/api/v1/sanitize/get-all-singles')
            .then(res => {
                setRequests(res.data);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div className='mt-3'>
                <h2 style={{ fontWeight: "normal" }}>Requests</h2>
                {loading ? <>
                    <div style={{ textAlign: "center" }}><Spinner /></div>
                    <div style={{ textAlign: "center" }}>Loading...</div>
                </> :
                    <div className="table-responsive">
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="center"><strong>Status</strong></TableCell>
                                        <TableCell align="center"><strong>Reason</strong></TableCell>
                                        <TableCell />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {requests.length > 0 ? requests.map((request, index) => (
                                        <Row key={index} row={{ request }} />
                                    )) : <tr><td colSpan="5" style={{ textAlign: "center" }}>No Requests</td></tr>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>}
            </div>
        </>
    )
}

export default Requests;