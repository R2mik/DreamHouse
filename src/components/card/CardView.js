import React from 'react'

import {CHECK_OUT_PROJECTS} from '../../utils/constants'

//domyslny parametr title, który można zmieniać przekazujać nową nazwę
export const CardView = ({children}) => (
    <div className='cards'>
        {/* move this sentence to constants / utils */}
        <h1 className="hdl">{CHECK_OUT_PROJECTS}</h1>
        <div className='cards__containter'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    {children}
                </ul>
                {/* {subChildren} */}
            </div>
        </div>            
    </div>
)
