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
                        <img className="logo-icon" src={LogoIcon} />
                    </a>
                </div>
                <div className="menu-container">
                    <ul>
                        <li>
                            <a>
                                <img className="menu-icon" src={HomeIcon} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="icon" src={CategoryIcon} />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="menu-icon" src={UserIcon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;