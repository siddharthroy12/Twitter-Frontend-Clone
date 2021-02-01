import HeartIcon from '../icons/HeartIcon'
import './Notification.css'

type NotificationProps = {
    notification: {
        userName: string,
        profilePic: string,
        content: string,
    }
}

const Notification = ({ notification }:NotificationProps) => {
    return (
        <div className="Notification">
            <div className="tweet-profile-pic">
                <HeartIcon />
            </div>
            <div className="tweet-data">
                <div className="tweet-title">
                <img src={notification.profilePic}
                    alt="Profile Pic"/>
                </div>
                <p className="notification-topic">
                    <strong>{notification.userName}</strong> liked your post
                </p>
                <p className="notification-ref-text">
                    {notification.content}
                </p>
            </div>
        </div>
    )
}

export default Notification