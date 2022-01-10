import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const CarouselView = (bgImg, images, currentImg, handleLeftSide, setCurrentImg) => (
    <div>
        <div id="carousel">
            <div className="carouselInner" style={bgImg}>
                <div className="left" onClick = {() => handleLeftSide()}>                     
                    <ArrowBackIosIcon />
                </div>
                <div className="center"></div>
                <div className="right" onClick = {()=>{
                    setCurrentImg(currentImg+1)
                    currentImg < images.length-1 ? setCurrentImg(currentImg + 1) : setCurrentImg(0);
                }}>
                    <ArrowForwardIosIcon />
                </div>         
            </div>
        </div>
    </div>
)
