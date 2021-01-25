import { useState } from 'react'

import ThreeDotsIcon from './icons/ThreeDotsIcon'
import ChatIcon from './icons/ChatIcon'
import RepeatIcon from './icons/RepeatIcon'
import HeartIcon from './icons/HeartIcon'
import UploadIcon from './icons/UploadIcon'
import SadIcon from './icons/SadIcon'
import UnfollowIcon from './icons/UnfollowIcon'
import MuteIcon from './icons/MuteIcon'
import ListIcon from './icons/ListIcon'
import BlockIcon from './icons/BlockIcon'
import CodeIcon from './icons/CodeIcon'
import FlagIcon from './icons/FlagIcon'

import './Tweet.css'

type TweetProps = {
    tweet: {
        userName: string,
        username: string,
        profilePic: string,
        content: string,
        img: string,
        comments: number,
        retweets: number,
        likes: number,
        postedAt: string,
    }
}

const Tweet = ({ tweet }:TweetProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="Tweet">
            <div className="tweet-profile-pic">
                <img src={tweet.profilePic}
                    alt="Profile Pic"/>
            </div>
            <div className="tweet-data">
                <div className="tweet-title">
                    <div className="tweet-user-name">
                        {tweet.userName}
                    </div>
                    <div className="tweet-user-username">
                        @{tweet.username}
                    </div>
                    <span>·</span>
                    <div className="tweet-posted-at">
                        {tweet.postedAt}
                    </div>
                    <div className="tweet-options hover-background" onClick={e => setIsMenuOpen(!isMenuOpen)}>
                        <ThreeDotsIcon />
                    </div>
                </div>
                <div className="tweet-menu-container">
                {isMenuOpen && (
                        <div className="tweet-menu">
                            <div className="tweet-menu-item">
                                <SadIcon /> Not interested in this tweet
                            </div>
                            <div className="tweet-menu-item">
                                <UnfollowIcon /> Unfollow
                            </div>
                            <div className="tweet-menu-item">
                                <ListIcon /> Add/Remove from Lists
                            </div>
                            <div className="tweet-menu-item">
                                <MuteIcon /> Mute
                            </div>
                            <div className="tweet-menu-item">
                                <BlockIcon /> Block
                            </div>
                            <div className="tweet-menu-item">
                                <CodeIcon /> Embed Tweet
                            </div>
                            <div className="tweet-menu-item">
                                <FlagIcon /> Report Tweet
                            </div>
                        </div>
                    )}
                </div>
                <p className="tweet-content">{tweet.content}</p>
                <div className="tweet-image">
                    {/* eslint-disable-next-line */}
                    <img src={tweet.img} alt="Tweet Image"/>
                </div>
                <div className="tweet-controls">
                    <div className="tweet-control">
                        <div>
                            <ChatIcon />
                        </div>
                        <span>{tweet.comments}</span>
                    </div>
                    <div className="tweet-control tweet-control-green">
                        <div>
                            <RepeatIcon />
                        </div>
                        <span>{tweet.retweets}</span>
                    </div>
                    <div className="tweet-control tweet-control-red">
                        <div>
                            <HeartIcon />
                        </div>
                        <span>{tweet.likes}</span>
                    </div>
                    <div className="tweet-control">
                        <div>
                            <UploadIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet