import React from 'react'

function DomainDetails() {
    return (
        <>
            <h4 className="topic">Domain details</h4>
            <div className="table__container">

                <div className="table__container-row">
                    <div className="table__container-col">
                        Accept all
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">Domain set up to accept all emails, however, while the server will reply that the email is valid, it can still bounce.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col">
                        Disposable
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">Temporary email, that is usually valid for up to 72hrs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col">
                        Free
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">Email that comes from a free domain, like hotmail.com or gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DomainDetails;