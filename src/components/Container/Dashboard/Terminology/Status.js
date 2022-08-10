import React from 'react'

function Status() {
    return (
        <>
            <h4 className="topic">Status</h4>
            <p className='content'> Every email address that you verify, will come back with a result that is either 'deliverable', 'undeliverable', 'risky' or 'unknown'. Below is a short explanation of what each means: </p>
            <div className="table__container">

                <div className="table__container-row">
                    <div className="table__container-col text-success">
                        Deliverable
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
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
                            <div className="table__container-col table__container-content">
                                <p className='content'>The email address may result in a bounce or low engagement. Risky addresses: Accept All, Full Mailbox or Disposable.</p>
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
                            <div className="table__container-col table__container-content">
                                <p className='content'>The address is either syntactically incorrect or does not exist.</p>
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
                            <div className="table__container-col table__container-content">
                                <p className='content'>We were unable to receive a response from the email provider.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status;