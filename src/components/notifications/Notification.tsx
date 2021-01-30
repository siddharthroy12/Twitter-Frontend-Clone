import HeartIcon from '../icons/HeartIcon'
import './Notification.css'

/*type TweetProps = {
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
        replyingTo: string,
    }
}*/

const Notification = (/*{ tweet }:TweetProps*/) => {
    return (
        <div className="Tweet">
            <div className="tweet-profile-pic">
                <HeartIcon />
            </div>
            <div className="tweet-data">
                <div className="tweet-title">
                <img src="/img/profilepic.jpg"
                    alt="Profile Pic"/>
                </div>
                <p className="notification-topic">
                    freelancer liked your post
                </p>
                <p className="notification-ref-text">
                sadfsadfds
                </p>
            </div>
        </div>
    )
}

export default Notification