import React from 'react'
import SongRow from './components/SongRow';
import Header from './header';
import { useDataLayerValue } from './components/DataLayer';
import { PlayCircleFilled, Favorite, MoreHoriz } from '@material-ui/icons';


function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue()
  return (
    <div className='body'>
        <Header spotify={spotify}></Header>
        <div className='body__info'>
            <img src={discover_weekly?.images[0]?.url} alt=''></img>
            <div className='body__infoText'>
                <strong>PLAYLISTS</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
        </div>
        <div className='body__songs'>
            <div className='body__icons'>
                <PlayCircleFilled className='body__shuffle'></PlayCircleFilled>
                <Favorite fontSize='large'></Favorite>
                <MoreHoriz></MoreHoriz>
            </div>
            {discover_weekly?.tracks.items.map((item) => (
                <SongRow track={item.track}></SongRow>
            ))}
        </div>
    </div>
  )
}

export default Body
