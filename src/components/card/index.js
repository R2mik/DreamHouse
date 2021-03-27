import React from 'react'

import CardItem from './CardItem'
import { images } from '../carousel/CarouselData';
import { CardView } from './CardView'

//->changed this to export const 
export const Card = () => (
                    <CardView {...{
                        children: (
                            images.map(({id, title: text, img: src, label, path} ) => 
                            // images.map((item) => 
                            <CardItem 
                                key={`${id}${text}${label}`}
                                {...{
                                    src,
                                    // src: item.src,
                                    text,
                                    label,
                                    path
                                }}
                            />)
                        )
                    }}/>             
)

//javascript methods: map, filter, pop,find,  fill, reduce ,ect. - methods array
// [
//     { object 1}, - iteraration 1
//     { object 2} - iteration 2
// ]