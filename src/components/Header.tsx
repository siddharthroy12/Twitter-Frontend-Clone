import React from 'react'
import { Link } from 'react-router-dom'
import ChatLeftQuoteIcon from './icons/ChatLeftQuoteIcon'
import HomeIcon from './icons/HomeIcon'
import HashIcon from './icons/HashIcon'
import BellIcon from './icons/BellIcon'
import EnvelopeIcon from './icons/EnvelopeIcon'
import BookmarkIcon from './icons/BookmarkIcon'
import ListIcon from './icons/ListIcon'
import PersonIcon from './icons/PersonIcon'
import ThreeDotsIcon from './icons/ThreeDotsIcon'

import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="header-logo">
                <ChatLeftQuoteIcon />
            </div>
            <div>
                <nav>
                    <li className="nav-link">
                        <Link to=''>
                            <HomeIcon />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <HashIcon />
                            <p>Explore</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <BellIcon />
                            <p>Notifications</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <EnvelopeIcon />
                            <p>Messages</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <BookmarkIcon />
                            <p>Bookmarks</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <ListIcon />
                            <p>Lists</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <PersonIcon />
                            <p>Profile</p>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to=''>
                            <ThreeDotsIcon />
                            <p>More</p>
                        </Link>
                    </li>
                </nav>
                <button className="header-tweet-button">
                    Tweet
                </button>
            </div>
            
        </header>
    )
}

export default Header