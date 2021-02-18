import React from 'react';
import paypalLogo from '../images/paypal-logo.png';

const donations = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className='fullScreenLayout'>
            <a href='https://paypal.me/jozicvetnik'
               target='_blank'
            >
                <img src={paypalLogo}
                     className="card-img-top"
                     alt="..."
                     id='donations'
                />
            </a>
        </div>
    );
}

export default donations;