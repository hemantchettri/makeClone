import React from 'react';
import axios from 'axios';
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
import Chart from 'react-apexcharts'

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const download = () => {
        axios.get(`/api/v1/sanitize/download?request_id=${row.request.request_id}&type=all`)
            .then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${row.request.request_id}.csv`);
                document.body.appendChild(link);
                link.click();
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setOpen(false);
            });
    }

    const deleteBatch = (request_id) => {
        window.confirm('Are you sure you want to delete this request?') && axios.post(`/api/v1/sanitize/delete-batch`, { request_id })
            .then(res => {
                if (res.data.status === 'success') {
                    window.location.reload();
                }
            }).catch(err => {
                console.log(err);
            });
    }

    const options = {
        chart: {
            type: 'donut',
            height: '100%'
        },
        labels: ['Deliverable', 'Risky', 'Undeliverable', 'Unknown'],
        series: [row.request.deliverable, row.request.risky, row.request.undeliverable, row.request.unknown],
        colors: ['#28A745', '#FFC107', '#DC3545', '#6C757D'],
        legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
            verticalAlign: 'middle',
            floating: false,
            fontSize: '14px',
            offsetX: 0,
            offsetY: 0,
            formatter: function (seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: '100%'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    const series = [row.request.deliverable, row.request.risky, row.request.undeliverable, row.request.unknown]

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell component="th" scope="row"> {row.request.filename} </TableCell>
                <TableCell align="center">{row.request.quantity}</TableCell>
                <TableCell align="center">{row.request.created_date}</TableCell>
                <TableCell align="center">{row.request.started_date}</TableCell>
                <TableCell align="center">{row.request.completed}</TableCell>
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
                        <div className="row m-3 get-all-verification">
                            <div className='col-lg-6'>
                                <div>
                                    <Chart options={options} series={series} type="donut" width="390" />
                                </div>
                            </div>
                            <div className='col-lg-6 ml-auto singleEmailReq'>
                                <div>
                                    <span className="emailCircle" style={{ backgroundColor: "#28A745" }}></span> &nbsp; <h6> Deliverable:</h6>
                                    <p className='text-success' style={{ fontWeight: "bold" }}>{row.request.deliverable}</p>
                                </div>
                                <div>
                                    <span className="emailCircle" style={{ backgroundColor: "#FFC107" }}></span> &nbsp; <h6> Risky:</h6>
                                    <p className='text-warning' style={{ fontWeight: "bold" }}> {row.request.risky}</p>
                                </div>
                                <div>
                                    <span className="emailCircle" style={{ backgroundColor: "#DC3545" }}></span> &nbsp; <h6> UnDeliverable:</h6>
                                    <p className='text-danger' style={{ fontWeight: "bold" }}>{row.request.undeliverable}</p>
                                </div>
                                <div>
                                    <span className="emailCircle" style={{ backgroundColor: "#6C757D" }}></span> &nbsp; <h6> Unknown:</h6>
                                    <p className='text-secondary' style={{ fontWeight: "bold" }}>{row.request.unknown}</p>
                                </div>
                                <div className='mt-3'>
                                    <p>{row.request.completed === row.request.quantity ? <button className="btn btn-outline-dark" onClick={() => deleteBatch(row.request.request_id)}> <i className='fas fa-trash' /> Delete</button> : null}</p>
                                    <p style={{ marginRight: "170px" }}>{row.request.completed === row.request.quantity ? <button className="btn btn-primary" onClick={() => download(row.request.request_id)}> <i className='fas fa-download' /> Download</button> : null} </p>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

function PreviousRequests() {

    const [previousRequest, setPreviousRequest] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    // const [ModalShow , setModalShow] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        axios.get('/api/v1/sanitize/get-all-verifications')
            .then(res => {
                setPreviousRequest(res.data);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            <div className='mt-3'>
                <h2 style={{ fontWeight: "normal" }}>Previous Requests</h2>
                {loading ? <>
                    <div style={{ textAlign: "center" }}><Spinner /></div>
                    <div style={{ textAlign: "center" }}>Loading...</div>
                </> :
                    <div className="table-responsive">
                        <TableContainer component={Paper}>
                            <Table aria-label="collapsible table" size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell><strong>File Name</strong></TableCell>
                                        <TableCell align="center"><strong>Quantity </strong></TableCell>
                                        <TableCell align="center"><strong>Created Date </strong></TableCell>
                                        <TableCell align="center"><strong>Started Date </strong></TableCell>
                                        <TableCell align="center"><strong>Completed </strong></TableCell>
                                        <TableCell />
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {previousRequest.length > 0 ? previousRequest.map(request => (
                                        <Row key={request.request_id} row={{ request }} />
                                    )) : <tr><td colSpan="5" style={{ textAlign: "center" }}>No Previous Requests</td></tr>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>}
            </div>
        </>
    )
}

export default PreviousRequests;
