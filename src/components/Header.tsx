import React, { useState } from 'react'
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
import CheckIcon from './icons/CheckIcon'

import './Header.css'

const Header = () => {
    const [profileMenuShown, setProfileMenuShown] = useState(false)
    
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
            </div>
            <button className="header-tweet-button">
                Tweet
            </button>
            <div className={
                profileMenuShown ? 'header-profile-menu-active header-profile-menu'
                : 'header-profile-menu'
                } onClick={e => setProfileMenuShown(!profileMenuShown)}>
                <img src="/img/profilepic.jpg" alt="Profile Pic"/>
                <div>
                    <h3>Siddharth Roy</h3>
                    <h5>@Siddharth_Roy12</h5>
                </div>
                <ThreeDotsIcon />
                {profileMenuShown && (
                    <div className="header-profile-menu-card">
                    <div className="border-bottom">
                        <img src="/img/profilepic.jpg" alt="Profile Pic"/>
                        <div>
                            <h3>Siddharth Roy</h3>
                            <h5>@Siddharth_Roy12</h5>
                        </div>
                        <CheckIcon />
                    </div>
                    <div className="border-bottom hover-background">
                        <p>Add an Existing Account</p>
                    </div>
                    <div className="hover-background" style={{
                        borderBottomLeftRadius:'16px', borderBottomRightRadius: '16px'}}>
                        <p>Log out @Siddharth_Roy12</p>
                    </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header