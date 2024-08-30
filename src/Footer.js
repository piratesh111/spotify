import React from 'react'
import { PlayCircleOutline, SkipPrevious, SkipNext, 
    PlaylistPlay, Shuffle, Repeat, VolumeDown } from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__left'>
            <img src='https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg' alt=''
            className='footer__albumLogo'></img>
            <div className='footer__songInfo'>
                <h4>My Favorite Song</h4>
                <p>Zamasu</p>
            </div>
        </div>
        <div className='footer__center'>
            <Shuffle className='footer__green'></Shuffle>
            <SkipPrevious className='footer__icon'></SkipPrevious>
            <PlayCircleOutline fontSize='large' className='footer__icon'></PlayCircleOutline>
            <SkipNext className='footer__icon'></SkipNext>
            <Repeat className='footer__green'></Repeat>

        </div>
        <div className='footer__right'>
            <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay>

                    </PlaylistPlay>
                </Grid>
                <Grid item>
                    <VolumeDown></VolumeDown>
                </Grid>
                <Grid item xs>
                    <Slider></Slider>
                </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer
