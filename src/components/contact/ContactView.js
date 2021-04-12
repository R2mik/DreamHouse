import React from 'react'

import {GoogleMap} from "../google-maps"

export const ContactView = () => (
    <div className="grid-center">
        <div className="adress">
            <GoogleMap/>
            <h3>Białystok</h3>
            <ul className="list-unstyled">
                <li className="adr-li">Lipowa 1</li>
                <li className="adr-li">15-111</li>
                <li className="adr-li">tel. 111-111-111</li>
            </ul>
        </div>
        <div className="adress">
            <GoogleMap/>
            <h3>Warszawa</h3>
            <ul className="list-unstyled">
                <li className="adr-li">Królewska 2</li>
                <li className="adr-li">00-222</li>
                <li className="adr-li">tel. 222-222-222</li>
            </ul>
        </div>
        <div className="adress">
            <GoogleMap/>
            <h3>Gdańsk</h3>
            <ul className="list-unstyled">
                    <li className="adr-li">Angielska 3</li>
                    <li className="adr-li">80-333</li>
                    <li className="adr-li">tel. 333-333-333</li>
            </ul>
        </div>
    </div>
) 