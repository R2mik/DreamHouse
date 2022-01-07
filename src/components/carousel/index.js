import React, {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { Images } from './CarouselData';
import {MoveImgLeft, MoveImgRight} from './move-images-buttons/MoveImg'
import {CHECK_OUT_PROJECTS} from '../../utils/constants'

export default function Carousel() {
    
    const [currentImg, setCurrentImg] = useState(0);

    return (
        //move to CarouselView
        <div>
            <h1 className="hdl-1">{CHECK_OUT_PROJECTS}</h1>
            <div id="carousel">
                <div className="carouselInner" style={{backgroundImage: `url(${Images[currentImg].img})`}}>
                    {/* create reusable component button put to move-images-button*/}
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
                    {/* create new handler and move there code  */}
                    {/* create reusable component button put to move-images-button*/}
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
        //move to CarouselView
    )
}
