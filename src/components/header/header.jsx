import React from 'react'
import logo from '../../Logonetflix.png'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div>
        <Link to='/tvshows' >TV Shows</Link>
        <Link to='/movies' >Movies</Link>
        <Link to='/recentlyadded' >Recently Added</Link>
        <Link to='/mylist' >My List</Link>
      </div>
      <FaSearch />
    </nav>
  )
}

export default Header