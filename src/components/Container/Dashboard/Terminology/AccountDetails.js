import React from 'react'

function AccountDetails() {
    return (
        <>
            <h4 className="topic">Account details</h4>
            <div className="table__container">

                <div className="table__container-row">
                    <div className="table__container-col">
                        Role
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">Role-based email address, that is not assigned to a specific person, but to a position or a group of people, like info@ or support@</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col">
                        Disabled
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">Account exists but is disabled and won't be able to receive email.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="table__container-row">
                    <div className="table__container-col">
                        Full mailbox
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">The inbox of this recipient is full, it might generate a soft bounce.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails;