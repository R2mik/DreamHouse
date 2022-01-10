import React, { useState } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Images } from './CarouselData';
import { MoveImgLeft, MoveImgRight } from './move-images-buttons/MoveImg'
import { CHECK_OUT_PROJECTS } from '../../utils/constants'

export default function Carousel() {
    
    const [currentImg, setCurrentImg] = useState(0);

    return (
        <div>
            <h1 className="hdl-1">{CHECK_OUT_PROJECTS}</h1>
            <div id="carousel">
                <div className="carouselInner" style={{backgroundImage: `url(${Images[currentImg].img})`}}>
                    <div className="left" onClick = {() => 
                        MoveImgLeft(
                            Images, 
                            currentImg, 
                            setCurrentImg
                        )
                    }>                     
                        <ArrowBackIosIcon />
                    </div>
                    <div className="center"></div>
                    <div className="right" onClick = {()=>
                        MoveImgRight (
                            Images, 
                            currentImg, 
                            setCurrentImg
                        )
                    }>
                        <ArrowForwardIosIcon />
                    </div>         
                </div>
            </div>
        </div>
    )
}
