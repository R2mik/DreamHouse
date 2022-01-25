import React from 'react'

import { Button } from '../shared'
import { INCREASE_LEVEL_LIFE } from '../../utils/constants'

export const HomeView = () => (
    <div className='bg'>
        <div className="bgImg"></div>
        <div className="video-cont">
            <video className="bgVideo" autoPlay muted loop>
                <source src ={require( "../../assets/video/HomeVid.mp4")} type="video/mp4"/>
            </video>
        </div>
        <div className='outer'>
            <div className='middle'>
                <div className='inner'>
                    <h1 className="headline">{INCREASE_LEVEL_LIFE}</h1>
                    {<Button className='btns' buttonStyle='btn-outline' buttonSize='btn-large'><b>GET STARTED</b></Button>}
                </div>
            </div>
        </div>           
    </div>
)