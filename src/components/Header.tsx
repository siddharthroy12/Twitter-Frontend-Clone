import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="header-logo">
                Twitter
            </div>
            <div>
                <nav>
                    <li className="nav-link"><Link to=''>Home</Link></li>
                    <li className="nav-link"><Link to=''>Explore</Link></li>
                    <li className="nav-link"><Link to=''>Notifications</Link></li>
                    <li className="nav-link"><Link to=''>Messages</Link></li>
                    <li className="nav-link"><Link to=''>Bookmarks</Link></li>
                    <li className="nav-link"><Link to=''>Lists</Link></li>
                    <li className="nav-link"><Link to=''>Profile</Link></li>
                    <li className="nav-link"><Link to=''>More</Link></li>
                </nav>
                <button className="header-tweet-button">
                    Tweet
                </button>
            </div>
            
        </header>
    )
}

export default Header