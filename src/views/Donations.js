import React from 'react';
import paypalLogo from '../images/paypal-logo.png';

const donations = () => {
    const link = process.env.REACT_APP_PAYPAL;
    console.log('env ', link);

    return (
        <div className='fullScreenLayout'>
            <a href={link}
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