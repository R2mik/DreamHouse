import React from 'react'

import CardItem from './CardItem'
import { Images } from '../carousel/CarouselData';
import { CardView } from './CardView'

export const Card = () => (
    <CardView {...{
        children: (
            Images.map(({id, title: text, img: src, label, path} ) => 
            <CardItem 
                key={`${id}${text}${label}`}
                {...{
                    src, 
                    text,
                    label,
                    path
                }}
            />)
        )
    }}/>             
)
