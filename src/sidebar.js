import React from 'react'
import SidebarOption from './sidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from './components/DataLayer'

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()
  return (
    <div className='sidebar'>
        <img className='sidebar__logo'
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></img>
        <SidebarOption title='home' Icon={HomeIcon}></SidebarOption>
        <SidebarOption title='search' Icon={SearchIcon}></SidebarOption>
        <SidebarOption title='Your Library' Icon={LibraryMusic}></SidebarOption>
        <br/>
        <strong className='sidebar_title'>PLAYLIST</strong>
        <hr/>
        {playlists ?.items?.map((playlists)=>{
            <SidebarOption title='playlist.name'></SidebarOption>
        })}
    </div>
  )
}

export default Sidebar