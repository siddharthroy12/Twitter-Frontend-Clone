import './SidebarCard.css'

const SidebarFollowCard = () => {
    return (
        <div className="SidebarCard">
            <div className="sidebar-card-title border-bottom">
                Who to follow
            </div>
            <ul className="sidebar-card-news-list">
                <li className="sidebar-card-profile border-bottom">
                    <a href="https://twitter.com/Siddharth_Roy12" target="_blank" rel="noreferrer">
                        <div>
                            <img src="/img/profilepic.jpg" alt="Profile Pic" />
                        </div>
                        <div>
                            <h4>Siddharth Roy</h4>
                            <h5>@Siddharth_Roy12</h5>
                        </div>
                    </a>
                </li>
            </ul>
            <div className="sidebar-card-bottom">
                Show more
            </div>
        </div>
    )
}

export default SidebarFollowCard