import { useState } from 'react'
import GearIcon from '../components/icons/GearIcon'
import Notification from '../components/notifications/Notification'
import Tweet from '../components/Tweet'
import './Notifications.css'

const notifications = [
    {
        type: 'info',
        notification: {
            userName: 'Kyle Prinsloo',
            profilePic: 'https://pbs.twimg.com/profile_images/1263482479429763072/zl-Sqbop_normal.jpg',
            content: 'I wanna become a web dev freelancer and learn more about freelancing',
        }
    },
    {
        type: 'mention',
        tweet: {
            userName: "Siddharth Roy",
            username: "Siddharth_Roy12",
            profilePic: "/img/profilepic.jpg",
            content: "Bruh",
            img: "https://pbs.twimg.com/media/EsjoHFjVkAAQ53y?format=png&name=small",
            comments: 43,
            retweets: 2312,
            likes: 23,
            postedAt: '12h',
            replyingTo: '@SiddharthRoy'
        }
    }
]

export default function Notifications() {
    const [screen, setScreen] = useState('all')

    return (
        <div className="Notifications">
            <div className="title">
                <h1>Notifications</h1>
                <div className="title-icon">
                    <GearIcon />
                </div>
            </div>
            <div className="screen-switcher">
                <div className={screen === 'all' ?
                    'screen-switcher-button screen-switcher-button-active' : 'screen-switcher-button'}
                    onClick={() => setScreen('all')}>
                    All
                </div>
                <div className={screen === 'mentions' ?
                    'screen-switcher-button screen-switcher-button-active' : 'screen-switcher-button'}
                    onClick={() => setScreen('mentions')}>
                    Mentions
                </div>
            </div>
            <div className="notification-list">
                {screen === 'all' ? (
                    notifications.map(item => {
                        if (item.type === 'info') {
                            return <Notification notification={item.notification!}/>
                        } else if (item.type === 'mention') {
                            return <Tweet tweet={item.tweet!}/>
                        } else {
                            return null
                        }
                    })
                ) : (
                    notifications.map(item => {
                        if (item.type === 'mention') {
                            return <Tweet tweet={item.tweet!}/>
                        } else {
                            return null
                        }
                    })
                )}
            </div>
        </div>
    )
}
