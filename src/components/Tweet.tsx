import ThreeDotsIcon from './icons/ThreeDotsIcon'
import ChatIcon from './icons/ChatIcon'
import RepeatIcon from './icons/RepeatIcon'
import HeartIcon from './icons/HeartIcon'
import UploadIcon from './icons/UploadIcon'
import './Tweet.css'


const Tweet = () => {
    return (
        <div className="Tweet">
            <div className="tweet-profile-pic">
                <img src="https://pbs.twimg.com/profile_images/1347182038084849665/pCz-T1Ze_400x400.jpg"
                    alt="Profile Pic"/>
            </div>
            <div className="tweet-data">
                <div className="tweet-title">
                    <div className="tweet-user-name">
                        SiddharthRoy
                    </div>
                    <div className="tweet-user-username">
                        @Siddharth_Roy12
                    </div>
                    <span>·</span>
                    <div className="tweet-posted-at">
                        12h
                    </div>
                    <div className="tweet-options hover-background">
                        <ThreeDotsIcon />
                    </div>
                </div>
                <p className="tweet-content">Hello</p>
                <div className="tweet-controls">
                    <div className="tweet-control">
                        <div>
                            <ChatIcon />
                        </div>
                        <span>2</span>
                    </div>
                    <div className="tweet-control tweet-control-green">
                        <div>
                            <RepeatIcon />
                        </div>
                        <span>2</span>
                    </div>
                    <div className="tweet-control tweet-control-red">
                        <div>
                            <HeartIcon />
                        </div>
                        <span>25</span>
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