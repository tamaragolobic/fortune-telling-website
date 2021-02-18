import React from 'react';
import paypalLogo from '../images/paypal-logo.png';

const donations = () => {
    return (
        <div className='fullScreenLayout'>
            <a href={process.env.REACT_APP_PAYPAL}
               target='_blank'
            >
                <img src={paypalLogo}
                     className="card-img-top"
                     alt="Paypal logo"
                     id='donations'
                />
            </a>
        </div>
    );
}

export default donations;