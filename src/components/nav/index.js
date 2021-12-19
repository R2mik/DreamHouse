import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { changeNavBarClassName } from './utils'
import { LData } from './link-data';
//import { NavView } from './NavView';


export default function Nav(){
    
    const [sidebar, setSidebar] = useState(true);

    const showSidebar = () => setSidebar(!sidebar);
    const closeMobileMenu = () => setSidebar(true);

    return(
        <div className="container container-nav">
        <header>
            <Link to="/" className="side-title" onClick={()=>closeMobileMenu()}>
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
                {/* 1. created array with object, 2. iterated this array using method map  */}
                {LData.map(item => {
                    return(
                        <Link to={item.to}  className="td">
                            <li><p className="link">{item.text}</p></li>
                        </Link>
                    )})
                }             
            </ul>
        </nav>
        </div>
    );
}