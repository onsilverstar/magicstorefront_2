import './components.css'
import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_container'>
                <div className='rows'>
                    <div className='column'>
                        <a className='fa fa-linkedin'></a>
                    </div>
                    <div className='column'>
                        <a className='fa fa-twitter'></a>
                    </div>
                    <div className='column'>
                        <a className='fa fa-github'></a>
                    </div>
                    <div>
                        <a href='Facebook' className="fa fa-facebook"></a>
                    </div>
                </div>
                <div className='copyright'>
                        <p>
                            &#xa9; 2023 Silvester Onono. All Rights Reserved
                            </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
