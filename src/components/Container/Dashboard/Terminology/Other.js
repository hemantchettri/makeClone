import React from 'react'

function Other() {
    return (
        <>
            <h4 className="topic">Other</h4>
            <div className="table__container">

                <div className="table__container-row">
                    <div className="table__container-col">
                        Did You Mean
                    </div>
                    <div className="table__container-col">
                        <div className="table__container-row">
                            <div className="table__container-col table__container-content">
                                <p className="content">If the email address you have provided seems to be undeliverable or of low quality - InitHive may find a suggestion of a correct one and return it in the didYouMean field.</p>
                                <p className="content">Please note it was not fully verified, so you might want to run a verification of the suggested email address.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Other;