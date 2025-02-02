import React from 'react'
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useDataLayerValue } from './components/DataLayer'

function Header() {
    const [{user}, dispatch] = useDataLayerValue()
  return (
    <div className='header'>
        <div className='header__left'>
            <Search></Search>
            <input placeholder='Search for Artists, Songs, or Albums' type='text'></input>
        </div>
        <div className='header__right'>
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}></Avatar>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header
