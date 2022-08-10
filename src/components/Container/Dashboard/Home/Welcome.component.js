import React from 'react'
import axios from 'axios'
import Spinner from '../../Spinner';

function Welcome() {

    const [credit, setCredit] = React.useState(0);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        axios.get('/api/v1/sanitize/check-credits')
            .then(res => {
                setCredit(res.data.credits);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                setLoading(false);
            })
    }, [])

    const creditColor = (credit) => {
        if (credit === 0) {
            return 'text-secondary';
        }
        if (credit <= 200) {
            return 'text-danger';
        }
        if (credit <= 2000) {
            return 'text-warning';
        } else {
            return 'text-success';
        }
    }

    return (
        <div className='row'>
            <div className='col-lg-8'>
                <h4>Hello {localStorage.getItem('email')}!</h4>
                <p style={{ fontSize: "20px" }}><strong>Welcome back! </strong></p>
            </div>
            <div className='col-lg-4 ml-auto'>
                <p style={{ fontSize: "15px" }}>AVAILABE CREDITS</p>
                {loading ? <div><Spinner/></div> :
                    <h2 className={creditColor(credit)} style={{fontWeight:"normal"}}>{credit}</h2>}
            </div>
        </div>
    )
}

export default Welcome;