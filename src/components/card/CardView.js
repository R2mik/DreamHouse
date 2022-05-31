import React from 'react'

import { CHECK_OUT_PROJECTS } from '../../utils/constants'

export const CardView = ({children}) => (
    <div className='cards'>
        <h1 className="hdl">{CHECK_OUT_PROJECTS}</h1>
        <div className='cards__containter'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {children}
                </ul>
            </div>
        </div>            
    </div>
)
