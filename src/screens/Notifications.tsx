import { useState } from 'react'
import GearIcon from '../components/icons/GearIcon'
import Notification from '../components/notifications/Notification'
import './Notifications.css'

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
                    <Notification />
                ) : null}
            </div>
        </div>
    )
}
