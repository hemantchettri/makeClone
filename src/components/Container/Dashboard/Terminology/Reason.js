import React from 'react'

function Reason() {
    return (
        <>
            <h4 className="topic">Reason</h4>
            <p className='content'>Additionally to the status of your results, InitHive will provide you with a reason for the results:</p>
            <div className="table__container">
                <div className="table__container-row">
                    <div className="table__container-col text-success">
                        Deliverable
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col deliverable" >
                                <span className="table__container-subHead text-success" >
                                    ACCEPTED EMAIL
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>Email address was accepted.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col text-warning">
                        Risky
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col risky">
                                <span className="table__container-subHead text-warning">
                                    LOW DELIVERABILITY
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>Email address appears to be deliverable, but deliverability cannot be guaranteed (in most cases it is caused by catch_all / accept_all configuration of recipient’s server or full mailbox).</p>
                            </div>
                        </div>
                        <div className="table__container-row">
                            <div className="table__container-col risky">
                                <span className="table__container-subHead text-warning">
                                    LOW QUALITY
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>Email address has quality issues that may make it a risky or low-value address (in most cases it is caused by the fact that it is a disposable/temporary email).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col text-danger">
                        Undeliverable
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col undeliverable">
                                <span className="table__container-subHead text-danger">
                                    INVALID EMAIL
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'> Specified email doesn't have a valid email address syntax.</p>
                            </div>
                        </div>
                        <div className="table__container-row">
                            <div className="table__container-col undeliverable">
                                <span className="table__container-subHead text-danger">
                                    INVALID DOMAIN
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>Domain for email does not exist or has no valid DNS records.</p>
                            </div>
                        </div>
                        <div className="table__container-row">
                            <div className="table__container-col undeliverable">
                                <span className="table__container-subHead text-danger">
                                    REJECTED EMAIL
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>Email address was rejected by the SMTP server, email address does not exist.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col text-dark">
                        Unknown
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col">
                                <span className="table__container-subHead text-dark">
                                    DNS ERROR
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>We were unable to resolve DNS records or domain is misconfigured.</p>
                            </div>
                        </div>
                        <div className="table__container-row">
                            <div className="table__container-col">
                                <span className="table__container-subHead text-dark">
                                    UNAVAILABLE SMTP
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>SMTP server was unavailable to process our request or we were unable to connect to it.</p>
                            </div>
                        </div>
                        <div className="table__container-row">
                            <div className="table__container-col">
                                <span className="table__container-subHead text-dark">
                                    UNKNOWN
                                </span>
                            </div>
                            <div className="table__container-col table__container-content">
                                <p className='content'>An unexpected error has occurred. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reason;