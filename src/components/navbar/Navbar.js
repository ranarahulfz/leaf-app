import React from 'react'
import './Navbar.css'
import LogoIcon from '../../assets/images/leaf.svg'
import HomeIcon from '../../assets/images/house-outline.svg'
import UserIcon from '../../assets/images/user-avatar.svg'
import CategoryIcon from '../../assets/images/category-avatar.svg'

function Navbar() {
        return(
            <nav className="navbar">
                <div className="logo-container">
                    <a className="logo" href="/">
                        <img className="logo-icon" src={LogoIcon} alt="logo" />
                    </a>
                </div>
                <div className="menu-container">
                    <ul>
                        <li>
                            <a>
                                <img className="home-icon" alt="home logo"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="flower-icon" alt="home logo"/>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="user-icon" alt="home logo"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;