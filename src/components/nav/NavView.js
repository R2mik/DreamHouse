import React from 'react'
import {Link} from 'react-router-dom';

import { changeNavBarClassName } from './utils'

export const NavView = (closeMobileMenu, showSidebar, sidebar) => (
    <div className="container container-nav">
        <header>
            <Link to="/" className="side-title" onClick={()=>closeMobileMenu}>
                <h1>Dream House</h1>
                <p className="subtitle">Live your dream</p>
            </Link>
        </header>
        <nav className={sidebar ? 'navbar' : "change navbar"}>
            {/* {...{  onClick: showSidebar, className: ....}} */}
            <div onClick={()=>showSidebar()} className="hamburger-menu">
                <div className='line line-1'></div>
                <div className='line line-2'></div>
                <div className='line line-3'></div>
            </div>
            {/* {...{  onClick: showSidebar, className: ....}} */}
            <ul onClick={()=>showSidebar()} className={changeNavBarClassName(sidebar, 'change navbar', "navbar")}>
                {/* 1. create array with object, 2. iterate this array using method map  */}
                <Link to="/Projects"  className="td">
                    <li><p className="link">Projects</p></li>
                </Link>
                <Link to="/about-me" className="td">
                    <li><p className="link">About Me</p></li>
                </Link>
                <Link to="/Contact" className="td">
                    <li><p className="link">Contact</p></li>
                </Link>
            </ul>
        </nav>
    </div>
)