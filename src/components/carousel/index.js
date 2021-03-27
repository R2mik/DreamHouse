import React, {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { images } from './CarouselData';
import {MoveImgLeft, MoveImgRight} from './move-images-buttons/MoveImg'

export default function Carousel() {
    
    const [currentImg, setCurrentImg] = useState(0);

    return (
        //move to CarouselView
        <div>
            <div id="carousel">
                <div className="carouselInner" style={{backgroundImage: `url(${images[currentImg].img})`}}>
                    {/* create reusable component button put to move-images-button*/}
                    <div className="left" onClick = {() => 
                        MoveImgLeft(
                            images, 
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
                            images, 
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
