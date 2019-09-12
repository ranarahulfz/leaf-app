import React from 'react'
import './Footer.css'
import LogoIcon from '../../assets/images/leaf.svg'


function Footer () {
    return(
        <div className="footer">
                <div className="logo-container">
                    <a href="/">
                        <img className="logo-icon" src={LogoIcon} alt="logo"/>
                    </a>
                </div>
                <div className="copyright-container">
                    <p className="copyright-text">&copy; 2018 Leaf. All rights reserved</p>
                </div>
                <div className="logo-container">
                    <a href="/">
                        <img className="logo-icon" src={LogoIcon} alt="logo"/>
                    </a>
                </div>

        </div>
    );
}

export default Footer;