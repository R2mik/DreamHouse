import React from 'react'

import {FaFacebook, FaInstagram} from "react-icons/fa";
import {FcPhone} from "react-icons/fc";
import {MdEmail} from "react-icons/md"; 

export const FooterView = () => (
    <div className="footer">
        <div className="row">
            <div className="col">
                <a href="https://www.facebook.com/me">
                     <FaFacebook className="icons" size="2em" color="DodgerBlue"/>
                Facebook: DreamHouse</a>      
            </div>
            <div className="col">
                <a href="https://www.instagram.com/me">
                     <FaInstagram className="icons" size="2em" color="red" />
                Instagram: @dreamhouse</a>
            </div>
            <div className="col">
                    <a href="tel: 111-111-111">
                         <FcPhone className="icons" size="2em"/>
                    Phone: 111-111-111</a>
            </div>
            <div className="col">
                <a href="mailto: biuro@dreamhouse.com">
                     <MdEmail className="icons" size="2em" color="white" />
                Email: biuro@dreamhouse.com</a>
            </div>
        </div>
            <div className="footer-bot">
                <hr/>
                <p className="terms">&copy;{new Date().getFullYear()} All right reserved | Terms of service | Privacy</p>
            </div>
    </div> 
)