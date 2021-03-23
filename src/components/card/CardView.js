import React from 'react'

//domyslny parametr title, który można zmieniać przekazujać nową nazwę
export const CardView = ({children, title = 'Jakis tekst'}) => (
    <div className='cards'>
        {/* przenieść do constants text stały */}
        <h1 className="hdl">{title}</h1>
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
