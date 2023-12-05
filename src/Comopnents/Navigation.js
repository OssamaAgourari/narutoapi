import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className='list-nav'>
          <Link to="/" className='link'><li>Trending</li></Link>
          <Link to="/movies" className='link'><li>Movies</li></Link>
          <Link to="/series" className='link'><li>Series</li></Link>
          <Link to="/search" className='link'><li>Search</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
