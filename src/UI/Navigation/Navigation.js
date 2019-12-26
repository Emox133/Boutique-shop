import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import logo from '../../logo.png'

const Navigation = () => {
    return (
        <nav className={'nav u-capitalize-text d-flex'}>
            <div className={'nav__logo'}>
                <Link to="/">
                    <img src={logo} alt="Company logo" className='nav__logo-brand'/>
                </Link>
            </div>

            <ul className={'nav__routes d-flex'}>
                <li className={'nav__route-home u-capitalize-text'}>
                    <Link to="/">
                            explore
                        <i className="fas fa-search"></i>
                    </Link>
                </li>
            </ul>

            <Link to="/bag">
                <Button btnType="main">
                    <i className="fas fa-shopping-bag"></i>
                </Button>
            </Link>
        </nav>
    )
}

export default Navigation
