import React from 'react'

import {GoogleMap} from "../google-maps"

export const ContactView = () => (
    <div className="row">
        <div className="col">
            <GoogleMap/>
            <h3>Białystok</h3>
            <ul className="list-unstyled">
                <li>Lipowa 1</li>
                <li>15-111</li>
                <li>tel. 111-111-111</li>
            </ul>
        </div>
        <div className="col">
            <GoogleMap/>
            <h3>Warszawa</h3>
            <ul className="list-unstyled">
                <li>Magnoliowa 2</li>
                <li>00-222</li>
                <li>tel. 222-222-222</li>
            </ul>
        </div>
        <div className="col">
            <GoogleMap/>
            <h3>Gdańsk</h3>
            <ul className="list-unstyled">
                    <li>Angielska 3</li>
                    <li>80-333</li>
                    <li>tel. 333-333-333</li>
            </ul>
        </div>
    </div>
) 